import React, { useState } from 'react';
import GooseSplashLogo from './GooseSplashLogo';
import SplashPills from './SplashPills';
import SessionPills from './SessionPills';
import { X, HistoryIcon } from 'lucide-react';

export default function Splash({ append }) {
  const [showSessionPills, setShowSessionPills] = useState(false);

  const toggleSessionPills = () => {
    setShowSessionPills(!showSessionPills);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      {/* History/Close Button */}
      <div className="absolute top-4 left-4 cursor-pointer" onClick={toggleSessionPills}>
        {showSessionPills ? (
          <X size={16} />
        ) : (
          <HistoryIcon size={16} />
        )}
      </div>

      {showSessionPills ? (
        <SessionPills />
      ) : (
        <>
          <div className="flex flex-1" />
          <div className="flex items-center">
            <GooseSplashLogo />
            <span className="ask-goose-type ml-[8px]">ask<br />goose</span>
          </div>
          <div className={`mt-[10px] w-[198px] h-[17px] py-2 flex-col justify-center items-start inline-flex`}>
            <div className="self-stretch h-px bg-black/5 rounded-sm" />
          </div>
          <div
            className="w-[312px] px-16 py-4 text-14 text-center text-splash-pills-text whitespace-nowrap cursor-pointer bg-prev-goose-gradient text-prev-goose-text rounded-[14px] inline-block hover:scale-[1.02] transition-all duration-150"
            onClick={async () => {
              const message = {
                content: "What can Goose do?",
                role: "user",
              };
              await append(message);
            }}
          >
            What can goose do?
          </div>
          <div className="flex flex-1" />

          <div className="flex items-center">
            <SplashPills append={append} />
          </div>
        </>
      )}
    </div>
  )
}
