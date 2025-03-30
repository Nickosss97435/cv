import React from "react";
import Timeline from "../components/Timeline";
import experienceData from "../data/experience.json";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-slate-600 dark:from-cyan-900 dark:to-slate-800 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="p-8 max-w-4xl mx-auto"
      >
        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-200">
            Expériences Professionnelles
          </h1>
        </div>

        {/* Chronologie */}
        <Timeline items={experienceData} />
      </motion.div>
    </div>
  );
};

export default Experience;