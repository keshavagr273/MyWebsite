"use client";

import Image from "next/image"
import React, { useEffect } from "react"
import StatusDot from "./BlinkingDot"
import RingButton from "./RingButton"
import { GitHubIcon } from "@/app/icons/Githubicon"
import { CircleArrowRight } from "lucide-react"

type ProjectStatus = "live" | "building" | "discontinued"

export type ProjectCardProps = {
  image: string
  title: string
  description: string
  status?: ProjectStatus
  liveLink?: string
  githubLink?: string
  projectBg?: string
}

const statusColorMap: Record<ProjectStatus, "green" | "yellow" | "red"> = {
  live: "green",
  building: "yellow",
  discontinued: "red",
}

const ProjectCard = ({
  image,
  title,
  description,
  status = "live",
  liveLink,
  githubLink,
  projectBg,
}: ProjectCardProps) => {
  const color = statusColorMap[status]
  const [githubStar, setGithubStar] = React.useState<number>(0);

  const fetchStars = async (repo: string): Promise<number> => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`);
      if (!res.ok) return 0;
      const data = await res.json();
      return typeof data.stargazers_count === "number" ? data.stargazers_count : 0;
    } catch (err) {
      console.error("Error fetching stars:", err);
      return 0;
    }
  };

  useEffect(() => {
    if (githubLink) {
      fetchStars(githubLink.replace("https://github.com/", "")).then(setGithubStar);
    }
  }, [githubLink])

  return (
    <div className="h-full group bg-[#09090B] border border-neutral-800 ring-1 rounded-lg ring-neutral-900 hover:ring-neutral-800 transition duration-300 ring-offset-4 ring-offset-black flex flex-col">
      <div className="relative w-full h-48 sm:h-52 md:h-56 rounded-t-lg overflow-hidden bg-neutral-900">
        {githubStar > 0 && (
          <div className="absolute top-2.5 right-2.5 z-20">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/60 text-xs text-white shadow-md">
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>{githubStar}</span>
            </span>
          </div>
        )}

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-40 pointer-events-none" />
      </div>

      <div className="p-2 flex flex-1 flex-col">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-base md:text-xl font-semibold font-space-grotesk mb-2">
            {title}
          </h3>

          <div className="flex gap-2 items-center">
            <StatusDot color={color} />
            {status}
          </div>
        </div>

        <p className="text-[14px] md:text-base text-gray-400 mb-4 px-2 flex-1">
          {description}
        </p>

        <div className={`grid ${githubLink ? "grid-cols-2" : "grid-cols-1"} gap-4 p-2 mt-auto`}>
          {liveLink && (
            <RingButton
              text="View Live"
              ariaLabel={`View live demo of ${title}`}
              icon={CircleArrowRight}
              href={liveLink}
              size="md"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}

          {githubLink && (
            <RingButton
              text="Github"
              ariaLabel={`View ${title} on GitHub`}
              icon={GitHubIcon}
              href={githubLink}
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
