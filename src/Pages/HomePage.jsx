import InfoCard from "../components/Home Components/InfoCard";
import SectionDivider from "../components/SectionDivider";
import ProjectsSection from "../components/Home Components/ProjectsSection";
import AboutSection from "../components/Home Components/AboutSection";
import Bio from "../components/Home Components/Bio";
import ProfessionalExperienceSection from "../components/Home Components/ProfessionalExperienceSection";
import AchievementsSection from "../components/Home Components/AchievementsSection";
import { FileText, Send } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <InfoCard />
      <AboutSection />

      <section className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-4 py-4 sm:px-6 sm:py-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:max-w-md">
              <a
                href="/resumesde.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-bg-secondary px-5 py-3 font-display text-base font-semibold text-text-primary transition hover:bg-hover-bg"
              >
                <FileText size={16} />
                Resume / CV
              </a>
              <a
                href="mailto:krishnagaur0033@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-text-primary bg-text-primary px-5 py-3 font-display text-base font-semibold text-bg-primary transition opacity-95 hover:opacity-100"
              >
                <Send size={16} />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <Bio />
      <SectionDivider />
      <ProfessionalExperienceSection />
      <SectionDivider />
      <AchievementsSection />
      <SectionDivider />

    </div>
  );
};

export default HomePage;
