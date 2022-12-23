import React from 'react';

import type { formattedProjectTypes } from '../../lib/projects/types';

import ProjectsPortion from './ProjectsPortion';

const ProjectsPage = (props: { projectsJSON: formattedProjectTypes[], name: string }) => {
  const { projectsJSON, name } = props;

  return (
    <div className="font-bold text-gray-800 transition-colors dark:text-gray-50">
      <h1 className="text-5xl break-all sm:text-6xl">{name}</h1>
      <div className="flex flex-wrap gap-5 mx-5 mt-5 h-max justify-evenly sm:justify-between">
        {
          projectsJSON.map(
            (project: any) => (
              <ProjectsPortion
                name={project.name}
                key={project.name}
                description={project.description}
                imageURLs={project.imageURLs}
                projectURL={project.homepage}
              />
            ),
          )
        }
      </div>
    </div>
  );
};

export default ProjectsPage;
