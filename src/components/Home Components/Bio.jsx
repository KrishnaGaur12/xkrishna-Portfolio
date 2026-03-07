import { Code2, Cpu, Database, Terminal } from "lucide-react";

const stackGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C++", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend & Sys",
    icon: Terminal,
    items: ["Spring Boot", "Node.js", "Express", "Docker", "Linux"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "AI / ML (Applied)",
    icon: Cpu,
    items: ["OpenCV", "BERT", "Transformers", "NumPy", "Pandas"],
  },
];

const Bio = () => {
  return (
    <section className="w-full border-b border-border">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="border-x border-border bg-bg-card">
          <div className="border-b border-border px-4 py-4 sm:px-5 sm:py-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              About
            </span>
            <h2 className="mt-2 font-display text-xl font-bold text-text-primary sm:text-2xl">
              About Me
            </h2>
          </div>

          <div className="space-y-7 px-4 py-5 sm:px-5 sm:py-6">
            <div className="space-y-5 text-sm leading-relaxed text-text-secondary sm:text-base sm:leading-relaxed">
              <p>
                I’m a <span className="font-semibold text-text-primary">Bachelor of Technology student in Computer Science and Engineering</span> at <span className="font-semibold text-text-primary">ABES Engineering College</span> (graduating in 2027) who enjoys understanding how software systems work beyond just writing code.
              </p>

              <p>
                I focus on <span className="rounded-sm bg-yellow-200 px-1 font-semibold text-text-primary dark:text-black">Data Structures & Algorithms</span>,{" "}
                <span className="rounded-sm bg-sky-200 px-1 font-semibold text-text-primary dark:text-black">Operating Systems</span>, and{" "}
                <span className="rounded-sm bg-rose-200 px-1 font-semibold text-text-primary dark:text-black">System Design</span>, building full-stack and backend systems with an emphasis on performance and scalability, while also exploring{" "}
                <span className="rounded-sm bg-violet-200 px-1 font-semibold text-text-primary dark:text-black">AI/ML</span> through hands-on projects.
              </p>

              <p>
                I enjoy learning new technologies and keeping up with evolving tech trends, and outside academics, I aspire to be a <span className="font-semibold text-text-primary">tech YouTuber</span> and like listening to Punjabi music to unwind.
              </p>
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex items-end justify-between gap-3 border-t border-border pt-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-primary sm:text-3xl">
                  Technical Arsenal
                </h3>
                <p className="text-right text-xs uppercase tracking-widest text-text-muted">
                  Stack & Tools
                  <br />
                  Updated 2026
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stackGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <article key={group.title} className="border border-border bg-bg-primary p-4">
                      <Icon className="h-5 w-5 text-text-primary" />
                      <h4 className="mt-3 font-display text-lg font-semibold text-text-primary sm:text-xl">
                        {group.title}
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-border bg-bg-secondary px-2.5 py-1.5 text-xs font-medium text-text-secondary sm:text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
