import React, { useState, useEffect } from 'react';

import ProjectsPortion from './ProjectsPortion';
import { APIURL } from '../../constants/Constants';

const ProjectsPage = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    fetch(`${APIURL}projects`)
      .then((projectsListData) => projectsListData.json())
      .then((projectsListJSON) => setProjectsList(projectsListJSON));
  }, []);

  const projects: any[] = [];
  projectsList.forEach((project: any) => {
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
      <h1 className="text-6xl">Projects</h1>
      <div className="h-max flex gap-5 justify-evenly sm:justify-between flex-wrap mt-5 mx-5">
        { projects }
      </div>
    </div>
  );
};

export default ProjectsPage;
