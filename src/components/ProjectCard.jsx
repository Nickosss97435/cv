import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold text-cyan-950 dark:text-cyan-500">{project.company}</h3>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4 text-cyan-700  dark:text-slate-50"
      />
      
      <p className="font-bold text-stone-600 dark:text-stone-400">{project.language}</p>
      <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-500 underline mt-2 block"
      >
        Voir le projet
      </a>
    </motion.div>
  );
};

export default ProjectCard;