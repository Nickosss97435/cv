import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import aboutData from "../data/about.json";
import ProjectsCarousel from "../components/ProjectsCarousel";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const birthdate = new Date(aboutData.birthdate);
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear();

// Fonctions pour les interactions
const handleEmailClick = () => {
  window.location.href = `mailto:${aboutData.email}`;
};

const handlePhoneClick = () => {
  window.location.href = `tel:${aboutData.phoneNumber}`;
};

const handleWhatsAppClick = () => {
  window.open(`https://wa.me/${aboutData.phoneNumber.replace(/\s/g, "")}`, "_blank");
};

  const links = [
    {
      id: "Github",
      url: "https://github.com/Nickosss97435",
      icon: <FaGithub />,
    },
    {
      id: "Resume",
      url: "/CV-QUERAT_Nicolas_2025.pdf",
      icon: <FaFilePdf />,
    },
    {
      id: "LinkedIn",
      url: "https://www.linkedin.com/in/nicolas-qu%C3%A9rat-b2858b131/",
      icon: <FaLinkedin />,
    },
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particleOptions = {
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: document.documentElement.classList.contains("dark") ? "#ffffff" : "#000000" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1 } },
      size: { value: 3, random: true, anim: { enable: true, speed: 4, size_min: 0.1 } },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out", bounce: false },
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } },
    },
    retina_detect: true,
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-slate-600 dark:from-cyan-900 dark:to-slate-800 p-8">
      {/* Effet Atome */}
      <Particles className="absolute inset-0 z-0" init={particlesInit} options={particleOptions} />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center gap-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 transform transition-all hover:scale-105 duration-500">
        {/* Image de profil */}
        <img
          className="w-32 sm:w-48 rounded-full border-4 border-white dark:border-gray-700 shadow-lg transform transition-all hover:rotate-6 duration-300"
          src={aboutData.image}
          alt="Profile"
        />

        {/* Informations personnelles */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-slate-600 dark:from-cyan-400 dark:to-slate-400 animate-text">
            {aboutData.name}
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-gray-700 dark:text-gray-300 mt-2 animate-fade-in">
            {aboutData.jobTitle}
          </h3>
          <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
            <p className="text-lg animate-fade-in-delay-1">Âge: {age} ans</p>
             {/* Téléphone */}
             <p
                className="text-lg cursor-pointer hover:text-cyan-600 transition duration-300"
                onClick={handlePhoneClick}
              >
                <span className="font-semibold">Téléphone :</span> {aboutData.phoneNumber}
              </p>

              {/* Email */}
              <p
                className="text-lg cursor-pointer hover:text-cyan-600 transition duration-300"
                onClick={handleEmailClick}
              >
                <span className="font-semibold">Email :</span> {aboutData.email}
              </p>

              {/* Adresse */}
              <p
                className="text-lg cursor-pointer hover:text-cyan-600 transition duration-300"
                onClick={() => {
                  window.open(
                    `https://www.google.com/maps?q=${aboutData.address},${aboutData.CP}+${aboutData.ville},${aboutData.region}`,
                    "_blank"
                  );
                }}
              >
                <span className="font-semibold">Adresse :</span> {aboutData.address}, {aboutData.CP}{" "}
                {aboutData.ville}, {aboutData.region}
              </p>
          </div>
        </div>
      </div>

      {/* Liens sociaux */}
      <div className="flex justify-center mt-6 z-10">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            className="text-3xl text-gray-200 mx-3 hover:text-white z-10"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Carrousel de projets */}
      <div className="mt-6 w-full max-w-2xl">
        <ProjectsCarousel />
      </div>
    </div>
  );
};

export default Home;