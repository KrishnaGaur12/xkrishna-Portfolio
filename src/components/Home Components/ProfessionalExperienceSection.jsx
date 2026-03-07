const experiences = [
  {
    title: "Lead",
    company: "Enigma Programming Club",
    duration: "Aug 2024 – Aug 2025",
    highlights: [
      "Led a programming community of 100+ members, increasing active participation by ~60% through coding contests, hackathons, and technical workshops.",
      "Conducted and mentored sessions on Data Structures & Algorithms, Java, and System Design.",
      "Guided juniors through 200+ algorithmic problems on platforms like LeetCode and Codeforces.",
      "Introduced standardized Git/GitHub workflows, improving collaboration and code quality across team projects.",
    ],
    skills: ["Leadership", "DSA", "System Design", "Git/GitHub"],
  },
];

const ProfessionalExperienceSection = () => {
  return (
    <section className="w-full border-b border-border">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="border-x border-border bg-bg-card">
          <div className="border-b border-border px-4 py-4 sm:px-5 sm:py-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Career
            </span>
            <h2 className="mt-2 font-display text-xl font-bold text-text-primary sm:text-2xl">
              Professional Experience
            </h2>
          </div>

          <div className="divide-y divide-border">
            {experiences.map((experience) => (
              <article key={experience.title} className="px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-text-primary sm:text-lg">
                    {experience.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted sm:text-sm">
                    {experience.duration}
                  </p>
                </div>

                <p className="mt-1 text-sm font-medium text-text-secondary">
                  {experience.company}
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {experience.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-bg-secondary px-2.5 py-1.5 text-xs font-medium text-text-secondary sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperienceSection;
