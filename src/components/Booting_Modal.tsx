"use client";

import { useEffect, useState } from "react";

const bootText = [
  "Initializing system...",
  "Loading projects...",
  "Checking for bugs... (crossing fingers)!",
  "Starting services.",
  "Hire me? Haha, just kidding... unless...",
  "Boot complete. Welcome!",
];

export default function BootingModal({ onFinish }: { onFinish?: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < bootText.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, bootText[index]]);
        setIndex(index + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      if (onFinish) {
        const finishTimer = setTimeout(() => onFinish(), 1200);
        return () => clearTimeout(finishTimer);
      }
    }
  }, [index, onFinish]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="w-full h-full lg:w-xl flex flex-col justify-center px-3 py-4 text-green-400 font-mono text-lg bg-[var(--midnight)]">
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
      <p className={showCursor ? "" : "pt-7"}>{showCursor ? "_" : ""}</p>
    </div>
  );
}
