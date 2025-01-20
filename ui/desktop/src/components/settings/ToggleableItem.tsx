import React from 'react';
import { Gear } from '../icons';
import { Extension, Model } from './types';

interface BaseToggleableItemProps {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    onToggle: (id: string) => void;
}

interface ExtensionToggleableItemProps extends BaseToggleableItemProps {
    command: string;
    githubStars: number;
    environmentVariables: Extension['environmentVariables'];
    type: 'extension';
    onConfigure?: () => void;
}

interface ModelToggleableItemProps extends BaseToggleableItemProps {
    type: 'model';
}

type ToggleableItemProps = ExtensionToggleableItemProps | ModelToggleableItemProps;

export function ToggleableItem(props: ToggleableItemProps) {
    const { id, name, description, enabled, onToggle, type } = props;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-2">
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium dark:text-white">{name}</h3>
                        {type === 'extension' && props.githubStars > 0 && (
                            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/>
                                </svg>
                                {props.githubStars}
                            </span>
                        )}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{description}</p>
                    {type === 'extension' && (
                        <>
                            <div className="mt-2 text-xs text-gray-400 dark:text-gray-500 font-mono">{props.command}</div>
                            {props.environmentVariables.length > 0 && (
                                <div className="mt-2">
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Required Environment Variables:</div>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {props.environmentVariables.filter(v => v.required).map(v => (
                                            <span key={v.name} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                                {v.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div className="flex items-center gap-3 ml-4">
                    {type === 'extension' && (
                        <button
                            onClick={props.onConfigure}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        >
                            <Gear className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                    )}
                    <button
                        onClick={() => onToggle(id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                            enabled ? "bg-indigo-500" : "bg-gray-200 dark:bg-gray-600"
                        } transition-colors duration-200 ease-in-out focus:outline-none`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ${
                                enabled ? "translate-x-[22px]" : "translate-x-[2px]"
                            } transition-transform duration-200 ease-in-out`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}