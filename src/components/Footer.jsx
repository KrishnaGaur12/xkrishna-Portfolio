import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const year = 2026;

  return (
    <footer className="w-full border-y border-border">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="border-x border-border bg-bg-card">
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 border-b border-border py-5">
            <a
              href="https://github.com/KrishnaGaur12"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-btn-bg p-2.5 text-text-muted transition hover:bg-hover-bg hover:text-text-primary"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/gaurkrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-btn-bg p-2.5 text-text-muted transition hover:bg-hover-bg hover:text-text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/2m_next"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-btn-bg p-2.5 text-text-muted transition hover:bg-hover-bg hover:text-text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="mailto:krishnagaur0033@gmail.com"
              className="rounded-full bg-btn-bg p-2.5 text-text-muted transition hover:bg-hover-bg hover:text-text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="relative z-10 pb-16 pt-4 text-center">
            <p className="font-display text-sm font-semibold text-text-primary">
              From India 🇮🇳 to the World 🌍 • Crafting Scalable Digital Products
            </p>
            <p className="mt-3 font-medium text-text-secondary">© 2026 Krishna Gaur</p>
            <p className="mt-2 text-sm text-text-muted">Designed & Engineered by Krishna Gaur</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
