"use client";

import { useState } from "react";

export default function ProfileContent() {
  const [page, setPage] = useState(1);

  const contentPage1 = (
    <p className="pb-2">
      <span className="text-[var(--jasmine)]">▹</span> One of my main areas of
      interest is{" "}
      <span className="text-[var(--jasmine)]">nostalgia-driven aesthetics</span>
      , especially those inspired by the 2000s. I love to explore how nostalgia
      motivates people to seek out elements that reflect their past experiences,
      creating a sense of belonging and meaning tied to their formative years.
    </p>
  );

  const contentPage2 = (
    <div>
      <p className="pb-2">
        <span className="text-[var(--jasmine)]">▹</span> As a small “
        <span className="text-[var(--jasmine)]">get to know me</span>” moment:
        outside of work, I&apos;m passionate about writing, reading, video games
        in general and watching a lot of movies.{" "}
      </p>
      <p>
        My favorite book is “A Story of a Prisoner” by Nabokov, I&apos;m a huge
        fan of Metal Gear Solid, and when it comes to movies, I&apos;m also a
        big nerd for the Alien franchise and Lanthimos&apos;s works.
      </p>
    </div>
  );

  return (
    <div className="space-y-3 text-[var(--midnight)] font-mono text-center lg:h-[320px] pe-3 lg:text-lg scrollbar-thin lg:overflow-y-scroll lg:text-justify">
      <div className="hidden md:block">
        {contentPage1}
        {contentPage2}
      </div>

      <div className="block md:hidden">
        {page === 1 && contentPage1}
        {page === 2 && contentPage2}

        <button
          className="mt-4 bg-gradient-to-b from-gray-100 to-gray-500 border border-gray-600 rounded-xl px-4 py-2 font-semibold text-gray-800 hover:text-[var(--jasmine)] active:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]"
          onClick={() => setPage(page === 1 ? 2 : 1)}
        >
          {page === 1 ? "Next →" : "← Back"}
        </button>
      </div>
    </div>
  );
}
