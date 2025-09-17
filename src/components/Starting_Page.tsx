"use client";

import { useState } from "react";
import BootingModal from "./Booting_Modal";

export default function StartingPage({ onFinish }: { onFinish?: () => void }) {
  const [booting, setBooting] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleSkip = () => {
    setVisible(false);
    if (onFinish) onFinish();
  };

  return (
    <div className="fixed inset-0 bg-[var(--midnight)] text-green-600 font-mono flex items-center justify-center z-50">
      {!booting ? (
        <button
          className="px-6 py-3 border border-green-600 rounded hover:bg-green-300/20"
          onClick={() => setBooting(true)}
        >
          Power On
        </button>
      ) : (
        <BootingModal
          onFinish={() => {
            setVisible(false);
            if (onFinish) onFinish();
          }}
        />
      )}
      <button
        className="absolute bottom-4 right-4 px-3 py-1 border border-green-600 rounded hover:bg-green-300/20"
        onClick={handleSkip}
      >
        Skip
      </button>
    </div>
  );
}
