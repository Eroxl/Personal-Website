import React from 'react';

import ProjectsPortion from './ProjectsPortion';

const ProjectsPage = (props: { projectsJSON: any[] }) => {
  const { projectsJSON } = props;

  return (
    <div className="font-bold text-gray-800">
      <h1 className="sm:text-6xl text-5xl">Projects</h1>
      <div className="h-max flex gap-5 justify-evenly sm:justify-between flex-wrap mt-5 mx-5">
        {
          Array.prototype.map(
            (project: any, _) => (
              <ProjectsPortion
                name={project.name}
                description={project.description}
                imageURL={project.imageURL}
                projectURL={project.homepage}
              />
            ),
            projectsJSON,
          )
        }
      </div>
    </div>
  );
};

export default ProjectsPage;
