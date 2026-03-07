import { FlipWords } from "../ui/flip-words";

const InfoCard = () => {
  const words = ["Software Engineer.", "AI Engineer.", "ML engineer."];
  const isOnlineInVSCode = false;

  return (
    <section className="w-full border-b border-border">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="border-x border-border bg-bg-card">
          <div className="grid grid-cols-[auto_1fr] items-stretch">
            <div className="flex items-center border-r border-border p-3 sm:p-4">
              <div className="group relative">
                <img
                  src="/images/pfp.jpg"
                  alt="Krishna Gaur"
                  className="h-24 w-24 shrink-0 rounded-full border border-border object-cover sm:h-36 sm:w-36"
                />

                <span
                  className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-bg-card ${
                    isOnlineInVSCode ? "bg-emerald-500" : "bg-zinc-400"
                  }`}
                />

                <div className="pointer-events-none absolute left-full top-full z-20 hidden w-51 rounded-2xl border border-border bg-bg-card px-4 py-3 text-left shadow-sm sm:ml-3 sm:mt-2 sm:group-hover:block">
                  <p className="flex items-center gap-2 text-sm font-medium text-text-primary">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isOnlineInVSCode ? "bg-emerald-500" : "bg-zinc-400"
                      }`}
                    />
                    {isOnlineInVSCode ? "Online in VS Code" : "Offline in VS Code"}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    Yesterday worked for 2h 34m
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center py-2 sm:py-3">
              <div className="border-y border-border px-4 py-2 sm:px-5 sm:py-2.5">
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-text-primary sm:text-4xl">
                    Krishna Gaur
                  </h2>
                </div>
              </div>

              <p className="px-4 pt-2 text-base leading-relaxed text-text-secondary sm:px-5 sm:text-lg">
                Aspiring <FlipWords words={words} className="mx-1" /> 
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
