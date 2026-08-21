"use client";
import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { GitHubIcon } from "../icons/Githubicon";
import Link from "next/link";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [stars, setStars] = useState<Record<string, number>>({});

  const categories = [
    { id: "all", name: "All" },
    { id: "fullstack", name: "Full Stack" },
    { id: "distributed", name: "Distributed Systems" },
    { id: "ai-ml", name: "AI / ML" },
  ];

  const projects = [
    {
      id: 1,
      title: "ClassMate",
      description:
        "Full-stack campus management platform with attendance tracking (ClassPulse), P2P skill exchange (SkillSwap), internship aggregator, and carpooling.",
      category: "fullstack",
      technologies: ["React 18", "Node.js", "PostgreSQL", "Sequelize", "Tailwind CSS"],
      year: "2025",
      image: "/Project/ProjectImages/ClassMate.png",
      github: "keshavagr273/ClassMate",
      live: "https://class-matefrontend.vercel.app/",
    },
    {
      id: 2,
      title: "HydraCache",
      description:
        "A decentralized, fault-tolerant in-memory distributed key-value store with 64-bit Murmur3 consistent hashing, SWIM gossip, and HLC timestamps.",
      category: "distributed",
      technologies: ["TypeScript", "Node.js", "SWIM Gossip", "Docker", "HLC Clocks"],
      year: "2026",
      image: "/Project/ProjectImages/hydracache.png",
      github: "keshavagr273/HydraCache",
      live: "https://github.com/keshavagr273/HydraCache",
    },
    {
      id: 3,
      title: "Real-Time Chat App",
      description:
        "Full-stack communication app with direct & group messaging via Socket.IO, WebRTC video/voice calls, typing indicators, and presence.",
      category: "fullstack",
      technologies: ["React", "Node.js", "Socket.IO", "WebRTC", "MongoDB", "Zustand"],
      year: "2026",
      image: "/Project/ProjectImages/chat.png",
      github: "keshavagr273/Chat-App",
      live: "https://chat-app-one-xi-68.vercel.app/",
    },
    {
      id: 4,
      title: "Equity Nest",
      description:
        "Real-time stock trading SaaS delivering live Upstox binary WebSocket feeds, TradingView charts, and in-memory NSE symbol fuzzy search.",
      category: "fullstack",
      technologies: ["Next.js", "Express.js", "Socket.io", "Protobuf", "MongoDB"],
      year: "2025",
      image: "/Project/ProjectImages/equity.png",
      github: "keshavagr273/Equity-Nest",
      live: "https://equity-nest-mjil.vercel.app/",
    },
    {
      id: 5,
      title: "Luminary AI",
      description:
        "AI-powered academic planning platform for university discovery, admissions guidance, document processing, and ROI calculators.",
      category: "ai-ml",
      technologies: ["React", "Node.js", "AI/ML", "Express", "Tailwind CSS"],
      year: "2026",
      image: "/Project/ProjectImages/Luminary.png",
      github: "keshavagr273/Luminary-AI",
      live: "https://luminary-ai-nine.vercel.app/",
    },
    {
      id: 6,
      title: "FreshFinds",
      description:
        "Community marketplace connecting local vendors with nearby customers to resell fresh surplus food at discounted prices.",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "JavaScript", "Tailwind CSS"],
      year: "2025",
      image: "/Project/ProjectImages/FreshFinds.png",
      github: "keshavagr273/FreshFinds",
      live: "https://fresh-finds-beige.vercel.app/",
    },
    {
      id: 7,
      title: "Agricare",
      description:
        "Full-stack agricultural platform with digitalized inventory management, dynamic marketplace, and multi-language support (i18n).",
      category: "fullstack",
      technologies: ["React", "Node.js", "Express", "Redux", "Tailwind CSS", "i18n"],
      year: "2025",
      image: "/Project/ProjectImages/Agricare.png",
      github: "keshavagr273/AgriCare",
      live: "https://agri-care-sage.vercel.app/",
    },
    {
      id: 8,
      title: "Heart Disease Predictor",
      description:
        "Web app predicting heart disease risk using user health data and deep neural network model trained on BRFSS 2015 dataset.",
      category: "ai-ml",
      technologies: ["React", "Next.js", "TensorFlow", "Keras", "Python"],
      year: "2025",
      image: "/Project/ProjectImages/heart1.png",
      github: "keshavagr273/heart-disease-app",
      live: "https://huggingface.co/spaces/keshav273/heart-pred-app",
    },
    {
      id: 9,
      title: "Faculty Project Tracker",
      description:
        "Admin dashboard for supervising faculty to track student project milestones, inactive group alerts, and CSV data export.",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Express"],
      year: "2025",
      image: "/Project/ProjectImages/project.png",
      github: "keshavagr273/MinorProject-Tracker",
      live: "https://minor-project-tracker.vercel.app/",
    },
  ];

  const fetchStars = async (repo: string) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`);
      if (!res.ok) return 0;
      const data = await res.json();
      return data.stargazers_count || 0;
    } catch (err) {
      console.error("Error fetching stars:", err);
      return 0;
    }
  };

  useEffect(() => {
    projects.forEach(async (project) => {
      if (project.github) {
        const starCount = await fetchStars(project.github);
        setStars((prev) => ({ ...prev, [project.github]: starCount }));
      }
    });
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="font-space-grotesk mx-auto bg-[#09090B] bg-[repeating-linear-gradient(45deg,#000_0px,#000_7px,#1C1C1F_7px,#1C1C1F_8px)]">
      <div className="mx-auto w-[80%] border-r-2 border-l-2 border-[#1C1C1F] bg-[#09090B] text-white">
        <div className="border-b border-[#1C1C1F]">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h1 className=" text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
                Projects
              </h1>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-[#494949] px-3 py-2 text-sm text-white transition-colors hover:text-white"
              >
                <ArrowLeft size={18} /> Back
              </Link>
            </div>
            <p className=" max-w-2xl text-base text-[#666] sm:text-xl">
              All my Proof of Work at one place
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-10 sm:max-w-[80%]">
          <div className="mb-12 flex w-fit gap-1 rounded-full border border-[#1C1C1F] p-1  mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={` rounded-full px-2.5 py-1.5 text-xs transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                  selectedCategory === category.id
                    ? "bg-[#1C1C1C] text-white"
                    : "text-[#666] hover:text-[#999]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#1C1C1F] bg-[#0A0A0A] transition-all duration-500 hover:-translate-y-2 hover:transform hover:border-[#333] hover:shadow-2xl hover:shadow-black/50"
              >
                <div className="relative aspect-[4/2] overflow-hidden bg-[#111]">
                  <img
                    src={
                      project.image ||
                      "https://via.placeholder.com/400x300/111111/666666?text=Project"
                    }
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#09090B]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.github && (
                      <a
                        href={`https://github.com/${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                      >
                        <Github size={20} className="text-white" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 rounded-full bg-[#09090B]/70 px-2 py-1 backdrop-blur-sm">
                    <span className=" text-xs text-[#888]">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className=" mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-[#CCC]">
                    {project.title}
                  </h3>
                  <p className=" mb-4 text-sm leading-relaxed text-[#666]">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className=" rounded-full border border-[#1C1C1F] bg-[#111] px-2 py-1 text-xs text-[#888]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex w-full flex-col gap-3 sm:flex-row">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#333] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#444] hover:from-[#2a2a2a] hover:to-[#3a3a3a]"
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={`https://github.com/${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#333] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#444] hover:from-[#2a2a2a] hover:to-[#2a2a2a]"
                      >
                        <GitHubIcon width={16} />
                        <p>Github</p>
                        <span className="flex items-center gap-1">
                          <span className="border-l border-gray-500 pl-2">
                            {stars[project.github] ?? 0}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <polygon
                              points="12,2 15,8.5 22,9.3 17,14 18.5,21 12,17.8 5.5,21 7,14 2,9.3 9,8.5"
                              fill="#888" // gray color
                            />
                          </svg>
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-20">
            <div className="flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-[#333]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
