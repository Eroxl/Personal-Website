import React from 'react';
import Image from 'next/image';

interface Props {
  name: string,
  description: string,
  imageURL: string,
  projectURL: string,
}

// TODO: Support Mobile
const ProjectsPortion = (props: Props) => {
  const {
    name,
    description,
    imageURL,
    projectURL,
  } = props;

  return (
    <a
      href={projectURL}
      className="w-full lg:w-5/12 h-auto bg-gray-800 rounded p-5 text-gray-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="pb-2s">
        <Image src={imageURL} width="1280" height="640" className="rounded-sm object-cover" />
      </div>
      <h1 className="text-xl">{name.replace(new RegExp('-', 'g'), ' ')}</h1>
      <h1 className="text-sm">{description}</h1>
    </a>
  );
};

export default ProjectsPortion;
