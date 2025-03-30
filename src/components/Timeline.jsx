import React from "react";
import PropTypes from "prop-types";

const Timeline = ({ items = [] }) => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Title Section */}
      <div className="text-center mb-12">
        {/* <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-950 to-sky-200 uppercase">
          Chronologie
        </h1> */}
      </div>

      {/* Timeline Content */}
      <div className="relative">
        {items.length > 0 ? (
          <div className="border-l-4 border-cyan-950/30 dark:border-cyan-500/30 pl-4 sm:pl-8">
            {items.map(({ startDate, endDate, title, description, company }, index) => (
              <div 
                key={index} 
                className={`relative pl-8 pb-8 group ${
                  index !== items.length - 1 ? "border-b border-gray-200 dark:border-cyan-500" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full 
                  bg-cyan-950/20 dark:bg-cyan-500/20 group-hover:bg-cyan-950/40 dark:group-hover:bg-cyan-500/40 transition-all duration-300
                  before:absolute before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full 
                  before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"/>
                
                {/* Date Range */}
                <time className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">
                  {startDate} - {endDate}
                </time>
                
                {/* Company */}
                <p className="text-sm font-semibold text-cyan-950 dark:text-cyan-400 mb-1">
                  {company}
                </p>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-gray-600 dark:text-gray-300 
                  group-hover:text-gray-800 dark:group-hover:text-white 
                  transition-colors duration-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 italic">
              Aucune donnée de chronologie disponible.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// PropTypes for type checking
Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired
    })
  )
};

export default Timeline;