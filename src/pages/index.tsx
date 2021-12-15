import React from 'react';
import { GetStaticProps } from 'next';

import HelloMessage from '../components/home/HelloMessage';
import AboutMessage from '../components/home/AboutMessage';
import ProjectsPage from '../components/home/Projects';
import Spacer from '../components/home/Spacer';
import getProjects from '../lib/projects/projects';

const MainPage = (
  props: { projectsJSON: any[],
  // eslint-disable-next-line camelcase
  codeTimeJSON: {data: {total_seconds_including_other_language: string}} },
) => {
  const { projectsJSON, codeTimeJSON } = props;
  return (
    <div className="bg-gray-100 h-full px-10">
      <HelloMessage codeTimeJSON={codeTimeJSON} />
      <Spacer id="aboutMessage" />
      <AboutMessage />
      <Spacer id="projects" />
      <ProjectsPage projectsJSON={projectsJSON} />
      <Spacer id="signing" />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsJSON = await getProjects();

  const codeTimeData = await fetch('https://wakatime.com/api/v1/users/Eroxl/stats/');
  const codeTimeJSON = await codeTimeData.json();

  return {
    props: {
      projectsJSON,
      codeTimeJSON,
    },
  };
};

export default MainPage;
