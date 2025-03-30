import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./theme";
import { TiAdjustBrightness, TiAdjustContrast } from "react-icons/ti";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

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
        {/* Contenu principal */}
        <main className={`transition-all duration-300 `}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/languages" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;