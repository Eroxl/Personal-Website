import React from 'react';
import { GetStaticProps } from 'next';

import HelloMessage from '../components/home/HelloMessage';
import AboutMessage from '../components/home/AboutMessage';
import ProjectsPage from '../components/home/Projects';
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
    <div className="bg-gray-100 h-full px-10">
      <HelloMessage time={time} />
      <Spacer id="aboutMessage" />
      <AboutMessage />
      <Spacer id="projects" />
      <ProjectsPage projectsJSON={projectsJSON} name="Projects" />
      <Spacer id="contributions" />
      <ProjectsPage projectsJSON={contributionsJSON} name="Contributions" />
      <Spacer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsJSON = await getProjects();
  const contributionsJSON = await getContributions();

  const time = '289';

  return {
    props: {
      projectsJSON,
      contributionsJSON,
      time,
    },
  };
};

export default MainPage;
