import React from 'react';
import { GetServerSideProps } from 'next';

import HelloMessage from '../components/home/HelloMessage';
import AboutMessage from '../components/home/AboutMessage';
import ProjectsPage from '../components/home/Projects';
// import SigningPage from '../components/home/Signing';
import Spacer from '../components/home/Spacer';
import { APIURL } from '../constants/Constants';

const MainPage = (props: { projectsJSON: any[] }) => {
  const { projectsJSON } = props;
  return(
    <div className="bg-gray-100 h-full px-10">
      <HelloMessage />
      <Spacer id="aboutMessage" />
      <AboutMessage />
      <Spacer id="projects" />
      <ProjectsPage projectsJSON={projectsJSON} />
      <Spacer id="signing" />
      {/* <SigningPage />
      <Spacer /> */}
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projectsData = await fetch(`${APIURL}projects`);
  const projectsJSON = await projectsData.json();

  return {
    props: {
      projectsJSON,
    },
  };
};

export default MainPage;
