import React from "react";

const PageHero = ({ title, desc, next }) => {
  return (
    <div className="py-16 lg:py-32 px-4 lg:px-12 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        {title}
      </h1>
      <p className="text-base sm:text-lg text-gray-800 dark:text-gray-400 mb-8 p-20">
        {desc}
      </p>
      <a
        href={next.link}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-cyan-900 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        {next.title} →
      </a>
    </div>
  );
};

export default PageHero;