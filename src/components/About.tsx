"use client";

import { useState } from "react";
import Folder from "./Folder";
import ProfileContent from "./ProfileContent";
import EducationContent from "./EducationContent";
import ToolsContent from "./ToolsContent";

export default function AboutModal() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <Folder onFolderClose={() => setActiveTab("")} title="about_me" icon="📝">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="py-1 text-center lg:text-start text-black">
            Hi, I&apos;m{" "}
            <span className="text-[var(--jasmine)]">Miriam Pecora</span>;
          </h3>
          <div className="flex gap-3">
            <button
              className="font-mono text-[var(--midnight)] focus:text-black py-1 px-1 rounded-lg hover:shadow-lg hover:bg-[var(--midnight)]/25 focus:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] focus:bg-[var(--midnight)]/30"
              onClick={() =>
                setActiveTab(activeTab === "profile" ? "" : "profile")
              }
            >
              🧑‍💻 Profile
            </button>
            <button
              className="font-mono text-[var(--midnight)] focus:text-black py-1 px-1 rounded-lg hover:shadow-lg hover:bg-[var(--midnight)]/25 focus:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] focus:bg-[var(--midnight)]/30"
              onClick={() =>
                setActiveTab(activeTab === "education" ? "" : "education")
              }
            >
              🎓 Education
            </button>
            <button
              className="font-mono text-[var(--midnight)] focus:text-black py-1 px-1 rounded-lg hover:shadow-lg hover:bg-[var(--midnight)]/25 focus:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] focus:bg-[var(--midnight)]/30"
              onClick={() => setActiveTab(activeTab === "tools" ? "" : "tools")}
            >
              ⚙️ Tools
            </button>
          </div>
        </div>

        <div>
          {activeTab === "profile" && <ProfileContent />}
          {activeTab === "education" && <EducationContent />}
          {activeTab === "tools" && <ToolsContent />}
        </div>
      </div>
    </Folder>
  );
}
