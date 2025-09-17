"use client";

import { useState, useRef } from "react";

type Target = "projects" | "about" | "links";

export function useLongPressTrash() {
  const [trashConfirm, setTrashConfirm] = useState(false);
  const [trashMessage, setTrashMessage] = useState<{
    text: string;
    img: string;
  } | null>(null);
  const [currentTarget, setCurrentTarget] = useState<Target | null>(null);
  const [progress, setProgress] = useState<{ [key in Target]: number }>({
    projects: 0,
    about: 0,
    links: 0,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startPress = (target: Target, duration = 1000) => {
    let currentStep = 0;
    const stepTime = 20;
    const steps = duration / stepTime;

    intervalRef.current = setInterval(() => {
      currentStep++;
      setProgress((prev) => ({
        ...prev,
        [target]: (currentStep / steps) * 100,
      }));
    }, stepTime);

    timeoutRef.current = setTimeout(() => {
      setCurrentTarget(target);
      setTrashConfirm(true);
      clearInterval(intervalRef.current!);
      setProgress((prev) => ({ ...prev, [target]: 0 }));
    }, duration);
  };

  const endPress = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress({ projects: 0, about: 0, links: 0 });
    timeoutRef.current = null;
    intervalRef.current = null;
  };

  const handleTrashChoice = (choice: "yes" | "no") => {
    setTrashConfirm(false);

    if (choice === "yes") {
      setTrashMessage({
        text: "Well, that's not very polite... Also, unfortunately for you, I have not implemented this feature.",
        img: "/reactions/cry.gif",
      });
    } else {
      setTrashMessage({
        text: "So... are you looking for employees?",
        img: "/reactions/happy.gif",
      });
    }

    setTimeout(() => setTrashMessage(null), 5000);
  };

  return {
    trashConfirm,
    trashMessage,
    currentTarget,
    progress,
    startPress,
    endPress,
    handleTrashChoice,
  };
}
