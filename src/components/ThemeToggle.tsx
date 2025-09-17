"use client";
import { useTheme } from "../custom_hooks/useTheme";

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="py-2 px-3 rounded-full font-mono text-xl bg-[var(--sage)]/60 text-[var(--jasmine)]"
    >
      {dark ? "🌻" : "🦉"}
    </button>
  );
}
