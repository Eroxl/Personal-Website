import React from 'react';

import ProjectsPortion from './ProjectsPortion';

const ProjectsPage = (props: { projectsJSON: any[] }) => {
  const { projectsJSON } = props;

  const projects: any[] = [];
  projectsJSON.forEach((project: any) => {
    projects.push(
      <ProjectsPortion
        name={project.name}
        description={project.description}
        imageURL={project.imageURL}
        projectURL={project.homepage}
      />,
    );
  });

  return (
    <div className="font-bold text-gray-800">
      <h1 className="sm:text-6xl text-5xl">Projects</h1>
      <div className="h-max flex gap-5 justify-evenly sm:justify-between flex-wrap mt-5 mx-5">
        { projects }
      </div>
    </div>
  );
};

export default ProjectsPage;
