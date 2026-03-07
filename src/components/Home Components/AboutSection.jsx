import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  Lightbulb,
  Link2,
  Mail,
  MapPin,
} from "lucide-react";

const profileDetails = [
  {
    icon: BriefcaseBusiness,
    label: "Aspiring Software Engineer | AI/ML Engineer",
  },
  {
    icon: Lightbulb,
    label: "C++, Python, React, Typescript",
  },
  {
    icon: MapPin,
    label: "Ghaziabad, India",
  },
  
];

const sideDetails = [
  {
    icon: Clock3,
    label: "IST // GMT+5:30",
  },
  {
    icon: Mail,
    label: "krishnagaur0033@gmail.com",
  },
  {
    icon: Link2,
    label: "xkrishna.domain",
  },
  
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/2m_next",
    logo: "/images/x.jpg",
  },
  {
    label: "GitHub",
    href: "https://github.com/KrishnaGaur12",
    logo: "/images/github.jpg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaurkrishna/",
    logo: "/images/linkedin.jpg",
  },
  {
    label: "daily.dev",
    href: "https://app.daily.dev/xkrishna",
    logo: "/images/dailydotdev.webp",
  },
  {
    label: "Discord",
    href: "https://discord.com",
    logo: "/images/discord.jpg",
  },
  {
    label: "DSA Portfolio",
    href: "https://codolio.com/profile/Krishna15",
    logo: "/images/codolio.jpg",
  },
];

const DetailItem = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2">
    <div className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-bg-secondary text-text-muted">
      <Icon size={14} />
    </div>
    <p className="text-sm leading-tight text-text-primary">{label}</p>
  </div>
);

const AboutSection = ({ showSocialLinks = true }) => {
  return (
    <section className="w-full border-b border-border">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="border-x border-border bg-bg-card">
          <div className="grid grid-cols-1 gap-3 border-b border-border px-4 py-3 md:grid-cols-[1.6fr_1fr] md:gap-4 md:px-5 md:py-4">
            <div className="space-y-2">
              {profileDetails.map((item) => (
                <DetailItem key={item.label} icon={item.icon} label={item.label} />
              ))}
            </div>

            <div className="space-y-2">
              {sideDetails.map((item) => (
                <DetailItem key={item.label} icon={item.icon} label={item.label} />
              ))}
            </div>
          </div>

          {showSocialLinks ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {socialLinks.map((item) => {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-16 items-center justify-between gap-3 border-b border-border px-4 py-3 text-text-primary transition hover:bg-hover-bg sm:min-h-18 sm:py-3.5 md:nth-last-[-n+3]:border-b-0 md:border-r md:nth-[3n]:border-r-0 sm:nth-last-[-n+2]:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-secondary p-1.5">
                        <img
                          src={item.logo}
                          alt={item.label}
                          className="h-full w-full rounded-md object-cover"
                        />
                      </div>
                      <span className="font-display text-sm font-semibold tracking-tight text-text-primary sm:text-base">
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight size={15} className="text-text-muted" />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
