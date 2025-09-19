"use client";

import { useState } from "react";

export default function ToolsContent() {
  const [page, setPage] = useState(1);

  const contentPage1 = (
    <div>
      <h2 className="text-lg font-semibold text-[var(--jasmine)] italic">
        Core Languages
      </h2>
      <ul className="list-disc list-inside pb-2">
        <li>HTML / CSS</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>SQL / MySQL</li>
      </ul>
      <h2 className="text-lg font-semibold text-[var(--jasmine)] italic">
        Build Tools
      </h2>
      <ul className="list-disc list-inside pb-2">
        <li>Vite</li>
      </ul>
      <h2 className="text-lg font-semibold text-[var(--jasmine)] italic">
        Spoken Languages
      </h2>
      <ul className="list-disc list-inside">
        <li>Italian (native)</li>
        <li>English (fluent)</li>
      </ul>
    </div>
  );

  const contentPage2 = (
    <div>
      <h2 className="text-lg font-semibold text-[var(--jasmine)] italic">
        Frameworks & Libraries
      </h2>
      <ul className="list-disc list-inside">
        <li>React</li>
        <li>Next.js</li>
        <li>Angular</li>
        <li>Vue.js</li>
        <li>Laravel</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
      </ul>
      <h2 className="text-lg font-semibold text-[var(--jasmine)] italic">
        Version Control
      </h2>
      <ul className="list-disc list-inside">
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    </div>
  );

  return (
    <div className="text-[var(--midnight)] lg:pt-4 font-mono text-center lg:h-[315px] lg:text-lg lg:text-justify">
      <div className="hidden md:block lg:flex lg:justify-between lg:px-6">
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
