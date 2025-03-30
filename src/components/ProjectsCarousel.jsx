import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { MdNavigateNext, MdNavigateBefore, MdOpenInNew } from "react-icons/md";
import EPLogo from "../assets/E+.png";
import vtcSLogo from "../assets/VTC_Stephanie.png";

function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const data = [
    {
      title: "Electric Plus Réunion",
      subtitle: "Site Vitrine pour le compte de la société Électric Plus Réunion",
      link: "https://mondistri.re",
      status: "En production",
      logo: EPLogo,
      tags: ["OpenCV", "React"],
    },
    {
      title: "VTC Stéphanie",
      subtitle: "Site web vitrine pour le compte de la société VTC Stéphanie",
      link: "https://b2nservices.com",
      status: "Manuscrit en préparation",
      logo: vtcSLogo,
      tags: ["JavaScript", "React", "Vite", "Tailwind"],
    },
  ];

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      nextIcon={<MdNavigateNext />}
      prevIcon={<MdNavigateBefore />}
      interval={1900} // Intervalle entre les diapositives (en millisecondes)
      controls // Affiche les boutons précédent/suivant
      indicators // Affiche les indicateurs de diapositive
    >
      {data.map((project, index) => (
        <Carousel.Item key={index}>
          <div className="flex flex-col mx-4 mb-4 min-h-sm">
            <div className="flex flex-row justify-center items-center gap-2 mb-6 mt-2">
              <img className="w-12 bg-white rounded-full h-12 p-1" src={project.logo} alt={project.title} />
              <h3 className="text-2xl">{project.title}</h3>
            </div>
            <p className="mx-2 text-center">
              {project.subtitle}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <MdOpenInNew className="inline" />
                </a>
              )}
            </p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;