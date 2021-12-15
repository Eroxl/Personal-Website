/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Image from 'next/image';

import aboutIcon from '../images/svgs/about_icon.svg';
import projectsIcon from '../images/svgs/projects_icon.svg';

interface Props {
  isActive: boolean
}

const NavigationSidebar = (props: Props) => {
  const { isActive } = props;

  return (
    <div className={`fixed w-52 h-screen bg-gray-800 text-gray-50 p-3 ${isActive ? 'right-0' : '-right-52'} top-16 text-3xl font-black duration-200 transition-all ease-in-out`}>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <img src={aboutIcon} alt="About Icon" />
        <a href="/#aboutMessage" className="w-10/12">About</a>
      </div>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <img src={projectsIcon} alt="Projects Icon" />
        <a href="/#projects" className="w-10/12">Projects</a>
      </div>
    </div>
  );
};

export default NavigationSidebar;
