import Folder from "./Folder";
import Link from "next/link";

export default function LinksModal() {
  return (
    <Folder title="links.txt" icon="🌐">
      <div className="p-3 text-[var(--midnight)] font-mono bg-[var(--taskbar)]/10 hover:bg-[var(--taskbar)]/30 border border-gray-500 rounded-lg shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]">
        <h3 className="font-bold text-[var(--jasmine)] text-lg">
          Miriam Pecora
        </h3>
        <p className="italic text-sm">Jr Full Stack Web Developer</p>

        <hr className="my-2 border-gray-400" />

        <div className="flex flex-col gap-1">
          <Link
            href="https://github.com/MiriamPecora"
            target="_blank"
            className="flex items-center gap-1 hover:text-[var(--jasmine)] w-fit hover:bg-[var(--sage)]/50 py-1 pe-4 hover:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]"
          >
            <span>🐙</span> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/miriam-pecora-19219924b/"
            target="_blank"
            className="flex items-center gap-1 hover:text-[var(--jasmine)] w-fit hover:bg-[var(--sage)]/50 py-1 pe-4 hover:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]"
          >
            <span>💼</span> LinkedIn
          </Link>
        </div>

        <hr className="my-2 border-gray-400" />

        <p className="text-sm italic text-gray-600 text-center">
          Let’s connect!
        </p>
      </div>
    </Folder>
  );
}
