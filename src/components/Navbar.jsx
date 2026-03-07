import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "Portfolio", to: "/" },
  { label: "Project", to: "/project" },
];

const commandItems = [
  { label: "Go to Portfolio", type: "route", value: "/", meta: "Route" },
  { label: "Go to Projects", type: "route", value: "/project", meta: "Route" },
  {
    label: "Contact",
    type: "mailto",
    value: "krishnagaur0033@gmail.com",
    meta: "Mail",
  },
  { label: "Resume", type: "external", value: "/resumesde.pdf", meta: "PDF" },
  {
    label: "GitHub",
    type: "external",
    value: "https://github.com/KrishnaGaur12",
    meta: "External",
  },
  {
    label: "LinkedIn",
    type: "external",
    value: "https://www.linkedin.com/in/gaurkrishna/",
    meta: "External",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isCommandClosing, setIsCommandClosing] = useState(false);
  const [showNavbarLogo, setShowNavbarLogo] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isCommandActive = isCommandOpen || isCommandClosing;

  const openCommandPalette = () => {
    setIsCommandClosing(false);
    setIsCommandOpen(true);
  };

  const closeCommandPalette = () => {
    if (!isCommandOpen) {
      setIsCommandClosing(false);
      return;
    }

    setIsCommandClosing(true);
    setIsCommandOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowNavbarLogo(true);
      return;
    }

    const onScroll = () => {
      setShowNavbarLogo(window.scrollY > 180);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (isCommandActive) {
          closeCommandPalette();
        } else {
          openCommandPalette();
        }
      }

      if (event.key === "Escape") {
        closeCommandPalette();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isCommandActive]);

  useEffect(() => {
    closeCommandPalette();
  }, [location.pathname]);

  const runCommand = (command) => {
    closeCommandPalette();
    setIsOpen(false);

    if (command.type === "route") {
      navigate(command.value);
      return;
    }

    if (command.type === "mailto") {
      window.location.href = `mailto:${command.value}`;
      return;
    }

    window.open(command.value, "_blank", "noopener,noreferrer");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-bg-primary/80 transition-colors duration-300 ${
        isCommandActive ? "backdrop-blur-0" : "backdrop-blur"
      }`}
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="flex h-16 items-center border-x border-border px-4">
          <div
            className={`font-display text-sm font-semibold tracking-[0.18em] text-text-primary transition-all duration-300 md:text-base ${
              showNavbarLogo
                ? "opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 -translate-y-1"
            }`}
          >
            KG
          </div>

          <div className="hidden w-full items-center justify-center gap-7 md:flex">
            <nav className="flex items-center gap-7 text-sm font-medium text-text-secondary">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition ${
                      isActive ? "text-text-primary" : "hover:text-text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="h-5 w-px bg-border" />

            <button
              type="button"
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                isCommandActive
                  ? "border-text-primary bg-hover-bg text-text-primary"
                  : "border-border bg-bg-card text-text-secondary hover:text-text-primary"
              }`}
              aria-label="Open command palette"
              onClick={() => {
                if (isCommandActive) {
                  closeCommandPalette();
                  return;
                }

                openCommandPalette();
              }}
            >
              <Search className="h-4 w-4" />
              <span>Ctrl</span>
              <span className="rounded-md border border-border px-1.5 py-0 text-xs leading-5 text-text-muted">
                K
              </span>
            </button>

            <div className="h-5 w-px bg-border" />

            <button
              type="button"
              className="rounded-full border border-border bg-btn-bg p-2 text-text-secondary transition hover:border-border hover:text-text-primary"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

          </div>

          <div className="flex w-full items-center justify-end gap-2 md:hidden">
            <button
              type="button"
              className="rounded-full border border-border bg-btn-bg p-2 text-text-secondary transition hover:border-border hover:text-text-primary"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              className="flex items-center rounded-full border border-border bg-btn-bg p-2 text-text-secondary transition hover:border-border hover:text-text-primary"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-border bg-bg-secondary/90 p-4 shadow-lg">
            <div className="flex flex-col gap-3 text-sm font-medium text-text-secondary">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 transition ${
                      isActive
                        ? "bg-hover-bg text-text-primary"
                        : "hover:bg-hover-bg hover:text-text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <AnimatePresence onExitComplete={() => setIsCommandClosing(false)}>
        {isCommandOpen ? (
          <motion.div
            key="command-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-60 flex items-center justify-center bg-transparent px-4"
            onClick={closeCommandPalette}
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-xl rounded-2xl border border-border bg-bg-card"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="border-b border-border px-4 py-3 sm:px-5">
                <p className="text-xs uppercase tracking-widest text-text-muted">Command Palette</p>
                <p className="mt-1 text-sm text-text-secondary">Choose a quick action</p>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {commandItems.map((command) => (
                  <button
                    key={command.label}
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-hover-bg"
                    onClick={() => runCommand(command)}
                  >
                    <span className="text-sm font-medium text-text-primary">{command.label}</span>
                    <span className="rounded-md border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-text-muted">
                      {command.meta}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
