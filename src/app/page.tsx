import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SectionHeading from "@/components/SectionHeading";
import SkillSection from "@/components/SkillsSection/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection/Experience";
import LoadingScreen from "@/components/InitialLoadShell";
import GithubActivityCard from "@/components/GithubActivityCard";

const page = () => {
  return (
    <LoadingScreen>
      <Container>
        {/* <div className="hidden md:block">
          <SectionIndicator />
        </div> */}
        <div className="w-full md:px-8">
          <div className="text-white bg-[#09090B]">
            <Navbar />
            <main id="main-content">
              <section data-section-label="Hero section" aria-label="Hero">
                <HeroSection />
              </section>
              <section data-section-label="Projects section" aria-label="Featured Projects">
                <SectionHeading title="Projects" />
                <ProjectsSection />
              </section>
              <section data-section-label="Experience section" aria-label="Work Experience">
                <SectionHeading title="Experience" />
                <ExperienceSection />
              </section>
              <section data-section-label="Skills section" aria-label="Technical Skills">
                <SectionHeading title="Skills" />
                <SkillSection />
              </section>
              <section data-section-label="Github section" aria-label="GitHub Activity">
                <SectionHeading title="Github Graph" />
                <GithubActivityCard />
              </section>
              <section data-section-label="About section" aria-label="About Me">
                <SectionHeading title="About Me" />
                <About />
              </section>
              <section data-section-label="Contact section" aria-label="Contact and Social Links">
                <ContactSection />
              </section>
            </main>
          </div>
        </div>
      </Container>

    </LoadingScreen>
  );
};

export default page;