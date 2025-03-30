import React from "react";
import Timeline from "../components/Timeline";
import educationData from "../data/education.json";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-slate-600 dark:from-cyan-900 dark:to-slate-800 p-8">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="p-8"
    >
      <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-200">
            Formations
          </h1>
        </div>
      <Timeline items={educationData} />
    </motion.div>
    </div>
  );
};

export default Education;