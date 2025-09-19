"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectsExplorer from "../page";

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

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/projects/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => {
        const found = data.find((p) => p.slug === slug);
        setProject(found || null);
      });
  }, [slug]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="px-2 py-1 bg-[var(--taskbar)]/20 shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] rounded-lg">
          <p className="font-mono text-2xl text-[var(--midnight)]">
            Project not found!
          </p>
        </div>
      </div>
    );
  }

  const openModal = (src: string) => {
    setCurrentImg(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImg(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="py-5 px-4 h-full w-full">
        <div className="py-5 px-4 h-full overflow-y-auto scrollbar-thin bg-[var(--taskbar)]/20 rounded-lg shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]">
          <h1 className="mt-3 mb-5 text-lg font-semibold text-[var(--jasmine)] max-w-fit px-2 py-1 bg-[var(--display-color)]/45 shadow-[inset_2px_2px_3px_rgba(0,0,0,0.6),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] rounded-lg">
            {project.name}
          </h1>

          <div className="text-start text-pretty text-[var(--midnight)] text-lg md:text-xl lg:text-xl">
            <p className="font-mono">{project.description}</p>
            <p className="pt-2 pb-7 font-mono">{project.infos}</p>
          </div>
          <h3 className="text-lg font-semibold text-[var(--jasmine)] max-w-fit px-2 py-1 bg-[var(--display-color)]/45 shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] rounded-lg">
            Technologies used:
          </h3>
          {project.technologies?.length > 0 && (
            <ul className="flex gap-2 flex-wrap pt-3 pb-7">
              {project.technologies.map((tech, i) => (
                <li
                  key={i}
                  className="px-2 py-1 font-mono bg-gray-200 rounded-lg text-base border bg-gradient-to-b from-gray-100 to-gray-500 border-gray-800/60 font-semibold text-black hover:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.6),inset_-2px_-2px_3px_rgba(255,255,255,0.8)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          <h3 className="mb-3 text-lg font-semibold text-[var(--jasmine)] max-w-fit px-2 py-1 bg-[var(--display-color)]/45 shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] rounded-lg">
            Screenshots:
          </h3>

          <div className="bg-gray-200 rounded-lg text-sm border bg-gradient-to-b from-gray-100 to-gray-500 border-gray-800/60 font-semibold text-[var(--midnight)] hover:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.6),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] py-3 px-4">
            {project.screenshots?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.screenshots.map((src, i) => (
                  <div
                    key={i}
                    className="cursor-pointer"
                    onClick={() => openModal(src)}
                  >
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      width={300}
                      height={300}
                      className="rounded-xl object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {slug !== "level-design-projects" && (
            <div className="mt-5 text-sm flex-col flex gap-7 lg:flex-row lg:justify-center lg:gap-5">
              {project.repolink && (
                <button>
                  <Link
                    className=" bg-gray-200 rounded-lg border bg-gradient-to-b from-gray-100 to-gray-500 border-gray-800/60 font-semibold text-black hover:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] py-2 px-3"
                    href={project.repolink}
                    target="_blank"
                  >
                    <span>🐙</span> GitHub Repository
                  </Link>
                </button>
              )}
              {project.videolink && (
                <button>
                  <Link
                    className="bg-gray-200 rounded-lg border bg-gradient-to-b from-gray-100 to-gray-500 border-gray-800/60 font-semibold text-black hover:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_rgba(255,255,255,0.8)] py-2 px-3"
                    href={project.videolink}
                    target="_blank"
                  >
                    <span>▶️</span> Youtube Demo
                  </Link>
                </button>
              )}
            </div>
          )}

          <div className="absolute -top-17 -left-0.5 bg-[var(--sage)] rounded-t-lg border-t-2 border-l-2 border-white">
            <ProjectsExplorer />
          </div>
        </div>
      </div>

      {modalOpen && currentImg && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-5xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-8 right-7 lg:bg-[var(--barn)]/40 bg-[var(--barn)] hover:bg-[var(--barn)] px-2 text-white rounded border-white/40 border me-1"
              onClick={closeModal}
            >
              ×
            </button>
            <Image
              src={currentImg}
              alt="Screenshot"
              width={1400}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
