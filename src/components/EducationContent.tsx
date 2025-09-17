"use client";

import { useState } from "react";

export default function EducationContent() {
  const [page, setPage] = useState(1);

  const contentPage1 = (
    <p className="pb-2">
      ▹I’m a creative and eclectic person with a growth-oriented mindset.
      Digital tools have always been my ideal medium to channel my passion for
      video games and the web. My journey began at{" "}
      <span className="text-[var(--jasmine)]">AIV</span>, where I studied
      <span className="text-[var(--jasmine)]"> Game Design</span>. There, I
      discovered the excitement of crafting interactive and customizable
      experiences... a passion that naturally led me deeper into programming.
    </p>
  );

  const contentPage2 = (
    <p className="pb-2">
      ▹I later completed an intensive course at{" "}
      <span className="text-[var(--jasmine)]">Boolean</span>, becoming a{" "}
      <span className="text-[var(--jasmine)]">Jr Full Stack Web Developer</span>
      . This allowed me to combine creativity with technical skills, delivering
      functional projects while strengthening key abilities in time management,
      problem solving, and teamwork. It taught me to work efficiently and stay
      results-driven.
    </p>
  );

  const contentPage3 = (
    <p>
      ▹After my studies at Boolean, I continued exploring new{" "}
      <span className="text-[var(--jasmine)]">frameworks </span>
      and <span className="text-[var(--jasmine)]">libraries</span>, motivated by
      the desire to refine my coding style and bring ideas to life.
    </p>
  );

  const handleNext = () => {
    if (page < 3) setPage(page + 1);
    else setPage(1);
  };

  return (
    <div className="text-[var(--midnight)] font-mono text-center lg:h-[315px] pe-3 scrollbar-thin lg:overflow-y-auto lg:text-justify">
      <div className="hidden md:block">
        {contentPage1}
        {contentPage2}
        {contentPage3}
      </div>

      <div className="block md:hidden">
        {page === 1 && contentPage1}
        {page === 2 && contentPage2}
        {page === 3 && contentPage3}

        <button
          className="mt-4 bg-gradient-to-b from-gray-100 to-gray-500 border border-gray-600 rounded-xl px-4 py-2 font-semibold text-gray-800 hover:text-[var(--jasmine)] active:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]"
          onClick={handleNext}
        >
          {page < 3 ? "Next →" : "← Back"}
        </button>
      </div>
    </div>
  );
}
