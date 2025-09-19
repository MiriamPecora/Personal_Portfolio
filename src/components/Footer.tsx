"use client";

import { useEffect, useState } from "react";
import StartModal from "./Start";

export default function Footer() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("it-IT", {
        dateStyle: "short",
        timeStyle: "short",
      });
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[var(--taskbar)] to-[var(--sage)]/80 flex justify-between rounded-b-xl w-full">
      <StartModal />
      <div className="flex items-center px-2 rounded-br-xl rounded-l-lg bg-gradient-to-b from-gray-100 to-gray-500 border-l border-gray-800/80 font-semibold text-black">
        <p className="text-sm">{dateTime}</p>
      </div>
    </div>
  );
}
