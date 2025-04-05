import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./theme";
import { TiAdjustBrightness, TiAdjustContrast } from "react-icons/ti";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation(); // Récupère l'emplacement actuel

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -50 }} // Animation d'entrée
        animate={{ opacity: 1, x: 0 }} // Animation active
        exit={{ opacity: 0, x: 50 }} // Animation de sortie
        transition={{ duration: 0.5 }} // Durée de la transition
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/languages" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="min-h-screen">
        {/* Bouton de basculement du thème */}
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 bg-cyan-900 dark:bg-cyan-500 text-light dark:text-cyan-900 rounded-full shadow-md z-50 hover:scale-110 transition-transform"
        >
          {theme === "dark" ? (
            <TiAdjustBrightness size={24} title="Mode jour" />
          ) : (
            <TiAdjustContrast size={24} title="Mode nuit" />
          )}
        </button>
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Contenu principal avec animations */}
        <main className={`transition-all duration-300 ml-[64px]`}>
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;