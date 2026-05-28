const achievements = [
  {
    id: 1,
    title: "Google The Big Code",
    subtitle: "Advanced to Round 1",
    description: "Top 15,000 nationally from the Qualifier Round (2026).",
    stat: "Top 15k",
  },
  {
    id: 2,
    title: "Tata Imagination",
    subtitle: "National Semi-Finalist",
    description: "Top 2.27% among 312,000+ participants (2024).",
    stat: "Top 2%",
  },
  {
    id: 3,
    title: "Paranox 2.0",
    subtitle: "Finalist",
    description: "Selected from 20,000+ national participants (2025).",
    stat: "#40",
  },
  {
    id: 4,
    title: "Ardethon Hackathon",
    subtitle: "3rd Place Winner",
    description: "Built an AI-based solution beating 100+ teams (ABESEC, 2024).",
    stat: "3rd",
  },
  {
    id: 5,
    title: "Google Cloud",
    subtitle: "Arcade Legend",
    description: "Mastered GCP, BigQuery, Kubernetes, Cloud Functions & AI/ML.",
    stat: "Legend",
  },
  {
    id: 6,
    title: "LeetCode",
    subtitle: "Rating 1600+",
    description: "450+ problems solved.",
    stat: "1600+",
  },
  {
    id: 7,
    title: "CodeChef",
    subtitle: "Rating 1616",
    description: "Global Rank 74 (Starters 211).",
    stat: "1616",
  },
  {
    id: 8,
    title: "Naukri Young Turks",
    subtitle: "AIR 1391 (AI Track)",
    description: "Distinction among 500,000+ national participants (2025).",
    stat: "AIR 1391",
  },
];

const AchievementsSection = () => {
  return (
    <section className="w-full border-b border-border">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="border-x border-border bg-bg-card">
          <div className="border-b border-border px-4 py-4 sm:px-5 sm:py-5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-text-muted sm:text-xs">
              Milestones
            </span>
            <h2 className="mt-2 font-display text-lg font-bold text-text-primary sm:text-xl">
              Achievements
            </h2>
          </div>

          <div className="divide-y divide-border">
            {achievements.map((achievement) => (
              <article key={achievement.id} className="px-4 py-3 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-sm font-semibold text-text-primary sm:text-base">
                    {achievement.title}
                  </h3>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted sm:text-xs">
                    {achievement.stat}
                  </p>
                </div>

                <p className="mt-0.2 text-xs font-medium text-text-secondary sm:text-sm">
                  {achievement.subtitle}
                </p>
                <p className="mt-0.3 text-xs leading-relaxed text-text-secondary sm:text-sm">
                  {achievement.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
