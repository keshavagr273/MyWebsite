import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#09090B] text-gray-300">
      <div className="px-[3%] py-10 md:py-15">
        <p className="mb-4 sm:mb-4 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          Hey! I’m a <span className="text-neutral-300">Software Engineer</span> and a <span className="text-neutral-300">Full Stack Web Developer</span>.
        </p>
        <p></p>
        <p className="mb-4 sm:mb-1 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I specialize in building scalable web architectures, distributed systems, and AI/ML-powered solutions with React, Next.js, Node.js, and TypeScript.
        </p>
        <p className="mb-4 sm:mb-1 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          Recently, I built
          <a
            href="https://class-matefrontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 inline-flex"
          >
            <span className="inline-flex items-center gap-2 bg-[#09090B] border border-neutral-700 px-2  rounded-lg hover:text-white md:text-lg font-sans shadow-[inset_0_0_12px_rgba(115,115,115,0.6)] hover:shadow-[inset_0_0_12px_rgba(139,92,246,0.6)] transition-all duration-200 font-semibold hover:border-purple-800 ml-1 mr-1">
              ClassMate
            </span>
          </a>
          and
          <a
            href="https://github.com/keshavagr273/HydraCache"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 inline-flex"
          >
            <span className="inline-flex items-center gap-2 bg-[#09090B] border border-neutral-700 px-2  rounded-lg hover:text-white md:text-lg font-sans shadow-[inset_0_0_12px_rgba(115,115,115,0.6)] hover:shadow-[inset_0_0_12px_rgba(139,92,246,0.6)] transition-all duration-200 font-semibold hover:border-purple-800 ml-1 mr-1">
              HydraCache
            </span>
          </a>
          — a decentralized, self-healing distributed key-value store.
        </p>
        <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I’m passionate about high performance, clean software engineering, and turning complex ideas into impactful products.
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-6 py-2 sm:py-4">
          <a
            href="https://github.com/keshavagr273"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/keshav-agrawal-02b4861b0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
