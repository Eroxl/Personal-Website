import React from 'react';
import Image from 'next/image';

import aboutIcon from '../public/svgs/about_icon.svg';
import projectsIcon from '../public/svgs/projects_icon.svg';
// import signingIcon from '../public/svgs/signing_icon.svg';

interface Props {
  isActive: boolean
}

const NavigationSidebar = (props: Props) => {
  const { isActive } = props;

  return (
    <div className={`fixed w-52 h-screen bg-gray-800 text-gray-50 p-3 ${isActive ? 'right-0' : '-right-52'} top-16 text-3xl font-black duration-200 transition-all ease-in-out`}>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <Image src={aboutIcon} />
        <a href="/#aboutMessage" className="w-10/12">About</a>
      </div>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <Image src={projectsIcon} />
        <a href="/#projects" className="w-10/12">Projects</a>
      </div>
      {/* <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <Image src={signingIcon} />
        <a href="/#signing" className="w-10/12">Signing</a>
      </div> */}
    </div>
  );
};

export default NavigationSidebar;
