"use client";

import { useState } from "react";
import Link from "next/link";
import StartingPage from "@/components/Starting_Page";

export default function StartModal() {
  const [open, setOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(false);

  return (
    <>
      {isBooting && (
        <StartingPage
          onFinish={() => {
            setIsBooting(false);
            setOpen(false);
          }}
        />
      )}

      <div className="relative inline-block">
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer py-2 px-9 rounded-bl-xl rounded-r-lg bg-gradient-to-b from-gray-100 to-gray-500 border-r border-gray-800/80 font-semibold text-black focus:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]"
        >
          Start
        </div>

        {open && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setOpen(false)}
            />

            <div
              className="absolute bottom-full left-0 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-b from-blue-100 to-gray-500/90 border-r border-y border-gray-800 rounded-tr-lg shadow-2xl w-52">
                <div className="font-mono text-lg bg-gradient-to-r from-[var(--taskbar)] to-[var(--sage)]/80 text-white px-3 py-2 border-b rounded-tr-lg border-gray-500">
                  Start Menu
                </div>

                <div className="flex flex-col">
                  <Link
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 text-left font-mono text-lg hover:bg-[var(--sage)]/80 active:bg-[var(--sage)]/90 hover:text-[var(--midnight)] border-b border-gray-500 active:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]"
                    href={"/"}
                  >
                    <button>🏠︎ Homepage</button>
                  </Link>

                  <button
                    onClick={() => {
                      setIsBooting(true);
                      setOpen(false);
                    }}
                    className="px-3 py-2 text-left font-mono text-lg hover:bg-[var(--sage)]/80 active:bg-[var(--sage)]/90 hover:text-[var(--midnight)] active:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]"
                  >
                    ⏻ Disconnect
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
