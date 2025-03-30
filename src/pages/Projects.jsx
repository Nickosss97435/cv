import React from "react";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-slate-600 dark:from-cyan-900 dark:to-slate-800 p-20">
      {/* <h2 className="text-3xl font-bold mb-8">Mes Projets</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;