import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  
  return (
    <>
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 sm:py-10 space-y-6 sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-2">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-5 text-sm sm:text-base text-indigo-400">
            {tags.map((tag) => (
              <span 
                key={tag.id}
                className="px-2 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 cursor-pointer hover-animation bg-indigo-600/20 hover:bg-indigo-600/30 px-4 py-2 rounded-lg border border-indigo-500/30 transition-all duration-200 self-start sm:self-auto"
        >
          <span className="text-sm sm:text-base">Read More</span>
          <img src="assets/arrow-right.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="Arrow right" />
        </button>
      </div>
      
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
