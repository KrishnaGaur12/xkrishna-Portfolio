import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = [
  "Hello",            
  "Konnichiwa",           
  "Hola",                    
  "Bonjour"         
];
const CURVE_PX = 400; // Larger curve for more dramatic "liquid" effect

// Advanced Easing for that "heavy" slide
const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
const easeInOutQuart = (x) => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;

const Preloader = ({ onComplete }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("words");
  const [translateY, setTranslateY] = useState(0);
  const [curveValue, setCurveValue] = useState(0);
  const rafRef = useRef(null);

  // 1. Word Cycling Logic
  useEffect(() => {
    if (phase !== "words") return;

    if (wordIndex < WORDS.length - 1) {
      const timeoutId = setTimeout(() => setWordIndex(i => i + 1), 800);
      return () => clearTimeout(timeoutId);
    }

    const exitTimeout = setTimeout(() => setPhase("exit"), 850);
    return () => clearTimeout(exitTimeout);
  }, [wordIndex, phase]);

  // 2. Liquid Exit Animation (GSAP-style logic using RAF)
  useEffect(() => {
    if (phase !== "exit") return;

    const duration = 1100; // Snappy exit
    const startAt = performance.now();
    const viewportHeight = window.innerHeight;

    const tick = (now) => {
      const progress = Math.min((now - startAt) / duration, 1);
      
      // Slide up logic
      const slideProgress = easeInOutQuart(progress);
      setTranslateY(-slideProgress * (viewportHeight + CURVE_PX));

      // Curve logic: Bends out as it starts, snaps back as it finishes
      // Math.sin creates the "bulge" that peaks at 50% progress
      const curveIntensity = Math.sin(progress * Math.PI) * CURVE_PX;
      setCurveValue(curveIntensity);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onComplete();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [phase, onComplete]);

  // The Secret Sauce: Path morphing
  // We draw a rectangle but the bottom edge is a Quadratic Bézier curve (Q)
  const svgPath = `M 0 0 L 100 0 L 100 100 Q 50 ${100 + (curveValue / viewportHeight() * 100)} 0 100 Z`;

  function viewportHeight() {
      return typeof window !== 'undefined' ? window.innerHeight : 800;
  }

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, overflow: "hidden", pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `calc(100% + ${CURVE_PX}px)`,
          transform: `translate3d(0, ${translateY}px, 0)`,
          background: "#0a0a0a", // Dark Mode
          willChange: "transform",
        }}
      >
        {/* Content Centering */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: `${CURVE_PX}px`
        }}>
          <div style={{ position: "relative", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AnimatePresence>
              <motion.div
                key={wordIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  color: "#ffffff",
                  fontSize: "clamp(1.8rem, 5.2vw, 3.6rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  whiteSpace: "nowrap"
                }}
              >
                <span style={{ marginRight: "12px", opacity: 0.2 }}>•</span>
                {WORDS[wordIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimalist Progress Indicator */}
          <div style={{ display: "flex", gap: "8px", marginTop: "24px" }}>
            {WORDS.map((_, i) => (
              <div key={i} style={{
                width: i === wordIndex ? "24px" : "4px",
                height: "4px",
                background: i <= wordIndex ? "#ffffff" : "#333",
                borderRadius: "2px",
                transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
              }} />
            ))}
          </div>
        </div>

        {/* The Liquid Curve SVG */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: `${CURVE_PX}px`,
            fill: "#0a0a0a",
            transform: "translateY(99%)" // Overlap to prevent thin lines
          }}
        >
          <path d={`M 0 0 L 100 0 L 100 0 Q 50 ${curveValue / 2} 0 0 Z`} />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;