import React from 'react';
import Image from 'next/image';

interface Props {
  name: string,
  description: string,
  imageURL: string,
  projectURL: string,
}

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
      className="w-full lg:w-5/12 h-auto bg-gray-800 rounded sm:p-5 p-3 text-gray-50 hover:animate-projects group"
      title="Open Website In New Tab"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="pb-2s">
        <Image src={imageURL} width="1280" height="640" className="rounded-sm object-cover " alt={`Projects Tab For ${name}`} />
      </div>
      <h1 className="text-xl group-hover:underline">{name.replace(new RegExp('-', 'g'), ' ')}</h1>
      <h1 className="text-sm">{description}</h1>
    </a>
  );
};

export default ProjectsPortion;
