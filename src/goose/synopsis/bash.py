import os
from pathlib import Path

from rich.markdown import Markdown
from rich.rule import Rule
from goose.notifier import Notifier
from goose.utils.confirm_execute import cancel_confirmation, confirm_execute
from goose.view import ExchangeView
from goose.toolkit.utils import RULEPREFIX, RULESTYLE
from goose.synopsis.system import system
from goose.utils.shell import shell
from goose.synopsis.util import log_command


class Bash:
    def __init__(self, notifier: Notifier, exchange_view: ExchangeView, 
                 explanation: str, ask_confirmation: bool) -> None:
        self.notifier = notifier
        self.exchange_view = exchange_view
        self.explanation = explanation
        self.ask_confirmation = ask_confirmation

    def _logshell(self, command: str, title: str = "shell") -> None:
        log_command(self.notifier, command, path=os.path.abspath(system.cwd), title=title)
        if self.explanation:
            self.notifier.log(self.explanation)

    def _source(self, path: str) -> str:
        """Source the file at path."""
        source_command = f"source {path} && env"
        self._logshell(f"source {path}")
        if not confirm_execute(self.ask_confirmation, self.notifier, "source this file"):
            return cancel_confirmation("Sourcing file")
        result = shell(source_command, self.notifier, self.exchange_view, cwd=system.cwd, env=system.env)
        env_vars = dict(line.split("=", 1) for line in result.splitlines() if "=" in line)
        system.env.update(env_vars)
        return f"Sourced {path}"

    def _shell(self, command: str) -> str:
        """Execute any shell command."""
        if command.startswith("cat"):
            raise ValueError("You must read files through the text_editor tool with 'view' comamnd.")
        if command.startswith("cd"):
            raise ValueError("You must change dirs through the bash tool with 'working_dir' param.")
        if command.startswith("source"):
            raise ValueError("You must source files through the bash tool with 'source' command.")

        self._logshell(command)
        if confirm_execute(self.ask_confirmation, self.notifier, "execute this command"):
            return shell(command, self.notifier, self.exchange_view, cwd=system.cwd, env=system.env)
        return cancel_confirmation("Command execution")

    def _change_dir(self, path: str) -> str:
        """Change the directory to the specified path."""
        patho = system.to_patho(path)
        if not patho.is_dir():
            raise ValueError(f"The directory {path} does not exist")
        if patho.resolve() < Path(os.getcwd()).resolve():
            raise ValueError("You can cd into subdirs but not above the directory where we started.")
        self._logshell(f"cd {path}")
        system.cwd = str(patho)
        return f"Changed directory to: {path}"
