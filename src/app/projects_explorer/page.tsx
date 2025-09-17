"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Folder from "@/components/Folder";

export default function ProjectsExplorer() {
  const router = useRouter();

  interface Project {
    name: string;
    slug: string;
    icon: string;
    description: string;
    infos?: string;
    screenshots: string[];
    videolink?: string;
    repolink?: string;
    technologies: string[];
  }
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Folder title="projects" icon="🗂️">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-2 my-6">
        {projects.map((p) => (
          <button
            key={p.slug}
            className="group items-center flex flex-col rounded-lg hover:shadow-lg hover:bg-[var(--midnight)]/25 focus:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] focus:bg-[var(--midnight)]/30"
            onClick={() => router.push(`/projects_explorer/${p.slug}`)}
          >
            <Image
              src={p.icon}
              alt={`${p.name} icon`}
              width={100}
              height={100}
              className="group-hover:animate-pulse duration-75 ease-in-out"
            />
            <p className="pt-1 font-mono text-[var(--midnight)] py-1 mt-1">
              {p.name}
            </p>
          </button>
        ))}
      </div>
    </Folder>
  );
}
