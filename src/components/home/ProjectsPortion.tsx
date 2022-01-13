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
  const [ currentImageURL, setCurrentImageURL ] = useState(imageURLs[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = imageURLs.indexOf(currentImageURL);
      const futureIndex = currentIndex < imageURLs.length - 1 ? currentIndex + 1 : 0;
      setCurrentImageURL(imageURLs[futureIndex]);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImageURL, imageURLs]);

  return (
    <a
      href={projectURL}
      className="w-full lg:w-5/12 h-auto bg-gray-800 dark:bg-gray-50 rounded sm:p-5 p-3 text-gray-50 dark:text-gray-800 hover:animate-projects group transition-colors"
      title="Open Website In New Tab"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="pb-2s">
        <img src={currentImageURL} className="rounded-sm object-cover aspect-video" alt={`Projects Tab For ${name}`} />
      </div>
      <h1 className="text-xl group-hover:underline">{name.replace(new RegExp('-', 'g'), ' ')}</h1>
      <h1 className="text-sm">{description}</h1>
    </a>
  );
};

export default ProjectsPortion;
