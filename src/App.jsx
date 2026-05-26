import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ReactLenis } from 'lenis/react';
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectDetailPage from "./Pages/ProjectDetailPage";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const App = () => {
  const [preloaderDone, setPreloaderDone] = useState(
    typeof window !== "undefined" ? window.location.pathname !== "/" : false
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringContent, setIsHoveringContent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = preloaderDone ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [preloaderDone]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      // Fade out the plus signs when hovering over text and interactive elements
      const isContent = target.closest('p, h1, h2, h3, h4, h5, h6, span, a, button, img, svg');
      setIsHoveringContent(!!isContent);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <ReactLenis
        root
        options={{
          lerp: 0.1, // Smooth factor
          duration: 1.2, // Animation duration
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false, // Keep mobile touch normal
          touchMultiplier: 2,
        }}
      >
        <div className="relative min-h-screen bg-bg-primary text-text-primary">
          
          {/* Red Plus Sign Mask Tracking Cursor */}
        <div
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: isHoveringContent ? 0 : 1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 25V35M25 30H35' stroke='%23b31942' stroke-width='2' stroke-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
            backgroundPosition: "center center",
            WebkitMaskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          }}
        />

        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<ProjectsPage />} />
            <Route path="/project/:slug" element={<ProjectDetailPage />} />
          </Routes>
          <Footer />
        </div>
        </div>
      </ReactLenis>

      {!preloaderDone ? <Preloader onComplete={() => setPreloaderDone(true)} /> : null}
    </ThemeProvider>
  );
};

export default App;
