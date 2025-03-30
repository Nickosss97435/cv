import React from "react";

const LogoSection = ({ title, logoArray }) => {
  return (
    <div className="pt-16 lg:pt-32 px-4 lg:px-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-8">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {logoArray.map((icon, index) => (
          <div key={index} className="w-24 h-24 p-4">
            <img
              src={`/assets/logo/${icon}.svg`}
              alt={icon}
              title={icon}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;