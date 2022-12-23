/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react';

interface Props {
  name: string,
  description: string,
  imageURLs: string[],
  projectURL: string,
}

const ProjectsPortion = (props: Props) => {
  const {
    name,
    description,
    imageURLs,
    projectURL,
  } = props;
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
  const [ altImageIndex, setAltImageIndex ] = useState(0);
  const [ altImageOpacity, setAltImageOpacity ] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const futureIndex = currentImageIndex < imageURLs.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(futureIndex);
      setAltImageIndex(currentImageIndex);

      setAltImageOpacity(100);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, altImageOpacity, altImageIndex, imageURLs]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (altImageOpacity > 0) {
        setAltImageOpacity(altImageOpacity - 5);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [altImageOpacity]);

  return (
    <a
      href={projectURL}
      className="w-full h-auto p-3 transition-colors bg-gray-800 rounded lg:w-5/12 dark:bg-gray-50 sm:p-5 text-gray-50 dark:text-gray-800 hover:animate-projects group"
      title="Open Website In New Tab"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative pb-2s">
        <img src={imageURLs[currentImageIndex]} className={`elative object-cover rounded-sm aspect-video`} alt={`Projects Tab For ${name}`} />
        <img src={imageURLs[altImageIndex]} style={{opacity: altImageOpacity / 100}} className={`z-10 absolute top-0 object-cover rounded-sm aspect-video`} alt={`Projects Tab Fade For ${name}`} />
      </div>
      <h1 className="text-xl group-hover:underline">{name.replace(new RegExp('-', 'g'), ' ')}</h1>
      <h1 className="text-sm">{description}</h1>
    </a>
  );
};

export default ProjectsPortion;
