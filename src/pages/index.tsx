import React from 'react';
import { GetStaticProps } from 'next';

import HelloMessage from '../components/home/HelloMessage';
import AboutMessage from '../components/home/AboutMessage';
import ProjectsPage from '../components/home/Projects';
import WorkPage from '../components/home/WorkPage';
import Spacer from '../components/home/Spacer';
import { getProjects, getContributions } from '../lib/projects/projects';

const MainPage = (
  props: { 
    projectsJSON: any[],
    contributionsJSON: any[],
    time: string,
 },
) => {
  const { projectsJSON, contributionsJSON, time } = props;
  return (
    <div className="bg-gray-100 dark:bg-gray-800 h-full px-10">
      <HelloMessage />
      <Spacer id="aboutMessage" />
      <AboutMessage />
      <Spacer id="projects" />
      <ProjectsPage projectsJSON={projectsJSON} name="Projects" />
      <Spacer id="contributions" />
      <ProjectsPage projectsJSON={contributionsJSON} name="Contributions" />
      <Spacer id="work" />
      <WorkPage />
      <Spacer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsJSON = await getProjects();
  const contributionsJSON = await getContributions();

  return {
    props: {
      projectsJSON,
      contributionsJSON,
    },
  };
};

export default MainPage;
