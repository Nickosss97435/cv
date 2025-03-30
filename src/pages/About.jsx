import React from "react";
import PageHero from "../components/PageHero";
import Timeline from "../components/Timeline";
import LogoSection from "../components/LogoSection";

const About = () => {
  const LOGO = ["py", "js", "ts", "node"];
  const DB = [
    "mysql",
    "psql",
    "mongodb",
    "firebase",
    "supabase",
  ];
  const FRONT = [
    "html",
    "css",
    "tailwind",
    "sass",
    "figma",
    "ai",
  ];
  const LIB = ["react", "next", "vite"];
  const TOOL = ["excel", "powerbi", "rvt","dlx", "git"];

  const desc = `Bonjour et bienvenue sur mon portfolio ! Mon parcours en développement 
  web a commencé par une curiosité pour comprendre comment fonctionnent les sites web, 
  puis s'est transformé en une passion pour créer des applications web fonctionnelles 
  et visuellement attrayantes.`;

  const next = {
    title: "Projets",
    link: "/projects",
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-slate-600 dark:from-cyan-900 dark:to-slate-800 p-8">
      {/* Section d'introduction */}
      <PageHero title="À Propos" desc={desc} next={next} />

      {/* Chronologie */}
      {/* <Timeline /> */}

      {/* Sections des logos */}
      <LogoSection title="LANGAGES" logoArray={LOGO} />
      <LogoSection title="BASES DE DONNÉES & REQUÊTES" logoArray={DB} />
      <LogoSection title="FRONTEND & OUTILS" logoArray={FRONT} />
      <LogoSection title="FRAMEWORKS & BIBLIOTHÈQUES" logoArray={LIB} />
      <LogoSection title="LOGICIELS" logoArray={TOOL} />

      {/* Pied de page */}
      <div className="py-16 my-16">
        <div className="text-center w-3/4 mx-auto">
          <div className="px-4 py-8 lg:py-16 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
            <p className="text-gray-800 dark:text-gray-200">
              Ce site est créé par{" "}
              <a
                href="https://github.com/Nickosss97435"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-500 underline"
              >
                Nicolas QUÉRAT
              </a>{" "}
              en utilisant :
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-evenly py-4">
              <div className="w-32 p-4">
                <img
                  src="/assets/logo/vite.svg" // Assurez-vous que les fichiers existent
                  alt="Vite"
                  title="Vite"
                  width="100%"
                />
              </div>
              <div className="w-32 p-4">
                <img
                  src="/assets/logo/react.svg"
                  alt="daisyUI"
                  title="daisyUI"
                  width="100%"
                />
              </div>
              <div className="w-32 p-4">
                <img
                  src="/assets/logo/tailwind.svg"
                  alt="Supabase"
                  title="Supabase"
                  width="100%"
                />
              </div>
            </div>
            <a
              href="https://github.com/Nickosss97435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Code Source
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;