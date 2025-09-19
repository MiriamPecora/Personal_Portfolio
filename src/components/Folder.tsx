"use client";

import { useState, ReactNode } from "react";

interface FolderProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  onFolderClose?: () => void;
}

export default function Folder({
  title,
  icon,
  children,
  onFolderClose,
}: FolderProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    if (onFolderClose) onFolderClose();
  };

  return (
    <>
      <button
        className="cursor-pointer text-[var(--midnight)] hover:text-white hover:bg-[var(--taskbar)]/40 rounded-lg font-mono focus:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] py-1 px-2 focus:bg-[var(--midnight)]/30"
        onClick={() => setOpen(true)}
      >
        {icon && <span className="text-4xl">{icon}</span>}
        {title && <p className="pt-1">{title}</p>}
      </button>

      {open && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-gradient-to-t from-gray-500/20 via-[var(--taskbar)]/80 to-black/20"
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-b from-[var(--sage)] to-[var(--custom-gray)]/80 rounded-lg shadow-2xl shadow-black/40 max-w-sm lg:max-w-xl w-full border-gray-300/70 border">
            <div className="flex justify-between items-center bg-gradient-to-r from-[var(--taskbar)] to-[var(--sage)]/80 border-b border-dotted border-[var(--midnight)] rounded-t-lg">
              <h2 className="bg-gradient-to-b font-mono text-lg lg:text-base from-gray-100 to-gray-500 border-r border-gray-800/80 rounded-tl-lg rounded-r-lg px-4 py-2 font-semibold text-black">
                {title}
              </h2>
              <button
                className="lg:bg-[var(--barn)]/60 bg-[var(--barn)] hover:bg-[var(--barn)] px-2 text-white rounded border-white/40 border me-1"
                onClick={handleClose}
              >
                X
              </button>
            </div>

            <div className="text-[var(--jasmine)] my-6 px-4 text-justify">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
