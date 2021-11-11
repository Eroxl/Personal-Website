import React from 'react';

import HelloMessage from '../components/home/HelloMessage';
import AboutMessage from '../components/home/AboutMessage';
import Spacer from '../components/home/Spacer';

const MainPage = () => (
  <div className="bg-gray-100 h-full px-10">
    <HelloMessage />
    <Spacer />
    <AboutMessage />
    <Spacer />
  </div>
);

export default MainPage;
