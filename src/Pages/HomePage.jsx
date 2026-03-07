import InfoCard from "../components/Home Components/InfoCard";
import SectionDivider from "../components/SectionDivider";
import ProjectsSection from "../components/Home Components/ProjectsSection";
import AboutSection from "../components/Home Components/AboutSection";
import Bio from "../components/Home Components/Bio";
import ProfessionalExperienceSection from "../components/Home Components/ProfessionalExperienceSection";
import AchievementsSection from "../components/Home Components/AchievementsSection";
import { FileText, Send, Play } from "lucide-react";

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
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-bg-secondary px-4 py-2.5 font-display text-sm font-semibold text-text-primary transition hover:bg-hover-bg"
              >
                <FileText size={16} />
                Resume / CV
              </a>
              <a
                href="mailto:krishnagaur0033@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-text-primary bg-text-primary px-4 py-2.5 font-display text-sm font-semibold text-bg-primary transition opacity-95 hover:opacity-100"
              >
                <Send size={16} />
                Get in touch
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-border bg-bg-secondary/60 p-3 sm:mt-5 sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src="https://i.scdn.co/image/ab67616d0000b273f6f5f8bdcf3b58d66e325808"
                    alt="Ishq artwork"
                    className="h-14 w-14 rounded-lg border border-border object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-text-muted">Last played</p>
                    <p className="truncate font-display text-base font-semibold text-text-primary">
                      Ishq
                    </p>
                    <p className="truncate text-sm text-text-secondary">
                      Faheem Abdullah, Rauhan Malik, Amir Ameer
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Play last played track"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-card text-text-primary transition hover:bg-hover-bg"
                >
                  <Play size={16} />
                </button>
              </div>
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
