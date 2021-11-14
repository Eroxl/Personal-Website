import React from 'react';

import HelloMessage from '../components/home/HelloMessage';
import AboutMessage from '../components/home/AboutMessage';
import ProjectsPage from '../components/home/Projects';
import SigningPage from '../components/home/Signing';
import Spacer from '../components/home/Spacer';

const MainPage = () => (
  <div className="bg-gray-100 h-full px-10">
    <HelloMessage />
    <Spacer id="aboutMessage" />
    <AboutMessage />
    <Spacer id="projects" />
    <ProjectsPage />
    <Spacer id="signing" />
    <SigningPage />
    <Spacer />
  </div>
);

export default MainPage;
