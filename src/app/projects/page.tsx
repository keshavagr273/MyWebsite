import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/helpers/constants";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Projects | Keshav Agrawal",
  description: "All my Proof of Work at one place — Full-Stack web apps, distributed systems, and AI solutions.",
};

const ProjectsPage = () => {
  return (
    <div className="bg-[#09090B] min-h-screen">
      <Container>
        <main id="main-content" className="w-full px-4 md:px-8">
          <div className="text-white px-[2%]">
            <div className="text-lg gap-2 items-center font-semibold mt-8 mb-4">
              <Button asChild variant="primary" size="lg">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  aria-label="Go back to home page"
                >
                  <Undo2 className="h-4 w-4" aria-hidden="true" /> Back
                </Link>
              </Button>
            </div>
            <div className="flex flex-col gap-4 mb-8">
              <h1 className="text-6xl pt-10 font-semibold font-space-grotesk">
                Projects
              </h1>
              <p className="text-xl text-neutral-500">
                All my Proof of Work at one place
              </p>
            </div>
            <hr className="border-0.5 border-[#424244]" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  title={project.name}
                  description={project.description}
                  liveLink={project.link}
                  githubLink={project.github}
                  status={project.status}
                  projectBg={project.projectBg}
                />
              ))}
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default ProjectsPage;
