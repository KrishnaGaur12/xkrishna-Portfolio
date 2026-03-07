import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const createAnimation = ({ variant = "rectangle", start = "bottom-up", blur = false } = {}) => {
  if (variant === "circle") {
    return {
      name: `circle-${start}${blur ? "-blur" : ""}`,
      css: `
        ::view-transition-group(root) {
          animation-duration: 0.7s;
          animation-timing-function: ease;
        }

        ::view-transition-new(root) {
          animation-name: reveal-light-circle${blur ? "-blur" : ""};
          ${blur ? "filter: blur(2px);" : ""}
        }

        ::view-transition-old(root),
        .dark::view-transition-old(root) {
          animation: none;
          z-index: -1;
        }

        .dark::view-transition-new(root) {
          animation-name: reveal-dark-circle${blur ? "-blur" : ""};
          ${blur ? "filter: blur(2px);" : ""}
        }

        @keyframes reveal-dark-circle${blur ? "-blur" : ""} {
          from {
            clip-path: circle(0% at 50% 50%);
            ${blur ? "filter: blur(8px);" : ""}
          }
          to {
            clip-path: circle(140% at 50% 50%);
            ${blur ? "filter: blur(0px);" : ""}
          }
        }

        @keyframes reveal-light-circle${blur ? "-blur" : ""} {
          from {
            clip-path: circle(0% at 50% 50%);
            ${blur ? "filter: blur(8px);" : ""}
          }
          to {
            clip-path: circle(140% at 50% 50%);
            ${blur ? "filter: blur(0px);" : ""}
          }
        }
      `,
    };
  }

  const getClipPath = () => {
    switch (start) {
      case "top-down":
        return {
          from: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        };
      case "left-right":
        return {
          from: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        };
      case "right-left":
        return {
          from: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        };
      default:
        return {
          from: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        };
    }
  };

  const clipPath = getClipPath();

  return {
    name: `rectangle-${start}${blur ? "-blur" : ""}`,
    css: `
      ::view-transition-group(root) {
        animation-duration: 0.7s;
        animation-timing-function: ease;
      }

      ::view-transition-new(root) {
        animation-name: reveal-light-rect-${start}${blur ? "-blur" : ""};
        ${blur ? "filter: blur(2px);" : ""}
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }

      .dark::view-transition-new(root) {
        animation-name: reveal-dark-rect-${start}${blur ? "-blur" : ""};
        ${blur ? "filter: blur(2px);" : ""}
      }

      @keyframes reveal-dark-rect-${start}${blur ? "-blur" : ""} {
        from {
          clip-path: ${clipPath.from};
          ${blur ? "filter: blur(8px);" : ""}
        }
        to {
          clip-path: ${clipPath.to};
          ${blur ? "filter: blur(0px);" : ""}
        }
      }

      @keyframes reveal-light-rect-${start}${blur ? "-blur" : ""} {
        from {
          clip-path: ${clipPath.from};
          ${blur ? "filter: blur(8px);" : ""}
        }
        to {
          clip-path: ${clipPath.to};
          ${blur ? "filter: blur(0px);" : ""}
        }
      }
    `,
  };
};

const ThemeToggleButton = ({
  className = "",
  variant = "rectangle",
  start = "bottom-up",
  blur = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const updateStyles = useCallback((css) => {
    const styleId = "theme-toggle-transition-styles";
    let styleElement = document.getElementById(styleId);

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const handleToggle = useCallback(() => {
    const animation = createAnimation({ variant, start, blur });
    updateStyles(animation.css);

    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    document.startViewTransition(() => {
      toggleTheme();
    });
  }, [variant, start, blur, toggleTheme, updateStyles]);

  return (
    <button
      type="button"
      className={`size-8 cursor-pointer rounded-full border border-border bg-btn-bg p-0 transition-all duration-300 active:scale-95 ${className}`}
      onClick={handleToggle}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          animate={{ rotate: isDark ? -180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <path
            d="M120 67.5C149.25 67.5 172.5 90.75 172.5 120C172.5 149.25 149.25 172.5 120 172.5"
            fill="currentColor"
            className="text-bg-primary"
          />
          <path
            d="M120 67.5C90.75 67.5 67.5 90.75 67.5 120C67.5 149.25 90.75 172.5 120 172.5"
            fill="currentColor"
            className="text-text-primary"
          />
        </motion.g>
        <motion.path
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          d="M120 3.75C55.5 3.75 3.75 55.5 3.75 120C3.75 184.5 55.5 236.25 120 236.25C184.5 236.25 236.25 184.5 236.25 120C236.25 55.5 184.5 3.75 120 3.75ZM120 214.5V172.5C90.75 172.5 67.5 149.25 67.5 120C67.5 90.75 90.75 67.5 120 67.5V25.5C172.5 25.5 214.5 67.5 214.5 120C214.5 172.5 172.5 214.5 120 214.5Z"
          fill="currentColor"
          className="text-text-primary"
        />
      </svg>
    </button>
  );
};

export default ThemeToggleButton;
