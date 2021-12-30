import React from 'react';

import ProjectsPortion from './ProjectsPortion';

const ProjectsPage = (props: { projectsJSON: any[], name: string }) => {
  const { projectsJSON, name } = props;

  return (
    <div className="font-bold text-gray-800 dark:text-gray-50">
      <h1 className="sm:text-6xl text-5xl break-all">{name}</h1>
      <div className="h-max flex gap-5 justify-evenly sm:justify-between flex-wrap mt-5 mx-5">
        {
          projectsJSON.map(
            (project: any) => (
              <ProjectsPortion
                name={project.name}
                key={project.name}
                description={project.description}
                imageURL={project.imageURL}
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
