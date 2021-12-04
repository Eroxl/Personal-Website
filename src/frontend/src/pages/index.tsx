import React from 'react';
import { GetStaticProps } from 'next';

import HelloMessage from '../components/home/HelloMessage';
import AboutMessage from '../components/home/AboutMessage';
import ProjectsPage from '../components/home/Projects';
// import SigningPage from '../components/home/Signing';
import Spacer from '../components/home/Spacer';
import { APIURL } from '../constants/Constants';

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
  const projectsData = await fetch(`${APIURL}projects`);
  const projectsJSON = await projectsData.json();

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
