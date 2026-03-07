import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectDetailPage from "./Pages/ProjectDetailPage";
import Footer from "./components/Footer";
import ProgressiveBlur from "./components/ProgressiveBlur";
import Preloader from "./components/Preloader";

const App = () => {
  const [preloaderDone, setPreloaderDone] = useState(
    typeof window !== "undefined" ? window.location.pathname !== "/" : false
  );

  useEffect(() => {
    document.body.style.overflow = preloaderDone ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [preloaderDone]);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-bg-primary text-text-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
        </Routes>
        <ProgressiveBlur
          position="bottom"
          className="fixed bottom-0 z-40"
          backgroundColor="var(--color-bg-primary)"
          height="120px"
          blurAmount="6px"
        />
        <Footer />
      </div>

      {!preloaderDone ? <Preloader onComplete={() => setPreloaderDone(true)} /> : null}
    </ThemeProvider>
  );
};

export default App;
