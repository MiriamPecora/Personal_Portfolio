"use client";

import ProjectsExplorer from "@/app/projects_explorer/page";
import AboutModal from "./About";
import LinksModal from "./Links";
import { useLongPressTrash } from "@/custom_hooks/useLongPressTrash";
import Image from "next/image";

export default function Viewport() {
  const {
    trashConfirm,
    trashMessage,
    currentTarget,
    progress,
    startPress,
    endPress,
    handleTrashChoice,
  } = useLongPressTrash();

  return (
    <>
      <div>
        <div className="py-6 px-4 flex gap-5">
          <div
            className="relative"
            onMouseDown={() => startPress("projects")}
            onMouseUp={endPress}
            onMouseLeave={endPress}
            onTouchStart={() => startPress("projects")}
            onTouchEnd={endPress}
            onTouchCancel={endPress}
          >
            <ProjectsExplorer />

            {progress.projects > 0 && (
              <div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-blue-100/50 to-gray-500/50 rounded-2xl"
                style={{
                  height: `${progress.projects}%`,
                  transition: "height 0.01s linear",
                }}
              />
            )}
          </div>

          <div
            className="relative"
            onMouseDown={() => startPress("about")}
            onMouseUp={endPress}
            onMouseLeave={endPress}
            onTouchStart={() => startPress("about")}
            onTouchEnd={endPress}
            onTouchCancel={endPress}
          >
            <AboutModal />
            {progress.about > 0 && (
              <div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-blue-100/50 to-gray-500/50 rounded-2xl"
                style={{
                  height: `${progress.about}%`,
                  transition: "height 0.01s linear",
                }}
              />
            )}
          </div>
        </div>

        <div className="px-3 flex">
          <div
            className="relative"
            onMouseDown={() => startPress("links")}
            onMouseUp={endPress}
            onMouseLeave={endPress}
            onTouchStart={() => startPress("links")}
            onTouchEnd={endPress}
            onTouchCancel={endPress}
          >
            <LinksModal />
            {progress.links > 0 && (
              <div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-blue-100/50  to-gray-500/50 rounded-2xl"
                style={{
                  height: `${progress.links}%`,
                  transition: "height 0.01s linear",
                }}
              />
            )}
          </div>
        </div>

        <div className="absolute bottom-4 right-3">
          <button className="cursor-pointer font-mono px-4 z-0 py-1 rounded-2xl focus:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] focus:bg-[var(--midnight)]/30">
            <span className="text-4xl">🗑️</span>
            <p className="pt-1">Trash</p>
          </button>
        </div>

        {trashConfirm && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-t from-gray-500/20 via-[var(--taskbar)]/80 to-black/20">
            <div className="bg-gray-800/70 rounded-xl border border-gray-300/70 shadow-2xl p-6 max-w-sm w-full text-center">
              <p className="text-white shadow-inner shadow-gray-200/20 bg-gray-200/10 rounded-xl border-gray-300/20 border font-mono text-xl mb-6 py-1 px-2">
                Do you want to move &quot;{currentTarget}&quot; to trash?
              </p>
              <div className="flex justify-around gap-4">
                <button
                  className="bg-gradient-to-b from-gray-100 to-gray-500 border border-gray-600 rounded-xl px-4 py-2 font-semibold text-gray-800 hover:text-[var(--jasmine)] hover:from-green-200 hover:to-gray-600"
                  onClick={() => handleTrashChoice("no")}
                >
                  No
                </button>
                <button
                  className="bg-gradient-to-b from-gray-100 to-gray-500 border border-gray-600 rounded-xl px-4 py-2 font-semibold text-gray-800 hover:text-[var(--jasmine)] hover:from-red-200 hover:to-gray-600"
                  onClick={() => handleTrashChoice("yes")}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}

        {trashMessage && (
          <div className="flex justify-center items-center flex-col bg-gray-200 rounded-lg border bg-gradient-to-b from-gray-100 to-gray-500 border-gray-800/60 font-semibold text-[var(--midnight)] shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] py-2 mt-2 mx-3">
            <div className="relative">
              <p className="text-lg font-semibold text-center text-pretty wrap-break-word">
                {trashMessage.text}
              </p>
            </div>
            <Image
              src={trashMessage.img}
              alt="reaction"
              width={200}
              height={65}
              className="object-contain absolute lg:bottom-16 bottom-9 ms-9"
            />
          </div>
        )}
      </div>
    </>
  );
}
