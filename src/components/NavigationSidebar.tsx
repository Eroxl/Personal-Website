/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

interface Props {
  isActive: boolean
}

const NavigationSidebar = (props: Props) => {
  const { isActive } = props;

  return (
    <div className={`fixed w-52 h-screen bg-gray-800 text-gray-50 p-3 ${isActive ? 'right-0' : '-right-52'} top-16 text-lg font-black duration-200 transition-all ease-in-out`}>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <img src='/svgs/about_icon.svg' alt="About Icon" />
        <a href="/#aboutMessage" className="w-10/12">About</a>
      </div>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <img src='/svgs/projects_icon.svg' alt="Projects Icon" />
        <a href="/#projects" className="w-10/12">Projects</a>
      </div>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <img src='/svgs/group_icon.svg' alt="Projects Icon" />
        <a href="/#contributions" className="w-10/12">Contributions</a>
      </div>
    </div>
  );
};

export default NavigationSidebar;
