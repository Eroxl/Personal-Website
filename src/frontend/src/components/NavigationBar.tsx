import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import logoIcon from '../public/logo.png';
import shopIcon from '../public/svgs/store_icon.svg';
import menuIcon from '../public/svgs/menu_icon.svg';
import aboutIcon from '../public/svgs/about_icon.svg';
import projectsIcon from '../public/svgs/projects_icon.svg';
import LoginButton from './LoginButton';

const NavigationBar = () => {
  const [isNavigationMenuActive, setIsNavigationMenuActive] = useState(false);

  const navigtationMenu: React.MutableRefObject<any> = useRef(null);
  const navigtationButton: React.MutableRefObject<any> = useRef(null);
  const clickHandle = (mouseEvent: Event) => {
    if (navigtationMenu.current && !navigtationMenu.current.contains(mouseEvent.target)
      && navigtationButton.current && !navigtationButton.current.contains(mouseEvent.target)) {
      setIsNavigationMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandle);
    return () => {
      document.removeEventListener('click', clickHandle);
    };
  });

  return (
    <div
      id="Navigation Bar"
      className="bg-gray-800 w-full h-16 z-50 fixed"
    >
      <a
        id="Logo Bar"
        href="/"
        className="pl-3 flex items-center h-full w-max gap-x-3 float-left active:opacity-90"
      >
        <Image
          src={logoIcon}
          id="Logo"
          alt="Eroxl's Logo"
          // Tailwind h-12
          width={48}
          height={48}
        />
        <h1
          id="Logo Text"
          className="text-gray-50 font-black text-xl"
        >
          Eroxl
        </h1>
      </a>
      <div
        className="pr-3 flex items-center h-full w-max gap-x-3 float-right relative"
      >
        <a
          id="Marketplace Button"
          href="/marketplace/"
          className="w-max h-full flex items-center active:opacity-90"
        >
          <Image
            src={shopIcon}
            id="Marketplace Button Icon"
            alt="Marketplace Button Icon"
            width={48}
            height={48}
          />
        </a>
        <button
          ref={navigtationButton}
          type="button"
          id="Menu Navigation Button"
          className="w-max h-full flex items-center active:opacity-90"
          onClick={() => { setIsNavigationMenuActive(!isNavigationMenuActive); }}
        >
          <Image
            src={menuIcon}
            id="Menu Navigation Button Icon"
            alt="Menu Navigation Button Icon"
            width={48}
            height={48}
          />
        </button>
        <div
          ref={navigtationMenu}
          className={`absolute top-16 right-14 w-full bg-gray-800 text-gray-50 text-2xl sm:text-xl font-bold rounded-b-md ${isNavigationMenuActive ? '' : 'hidden'}`}
        >
          <div className="w-full flex gap-2 pl-1 bg-gray-900 active:opacity-70">
            <Image src={aboutIcon} />
            <a href="/#aboutMessage" className="w-full block">About</a>
          </div>
          <div className="w-full flex gap-2 pl-1 active:opacity-70">
            <Image src={projectsIcon} />
            <a href="/#projects" className="w-full block">Projects</a>
          </div>
        </div>
        <LoginButton />
      </div>
    </div>
  );
};

export default NavigationBar;
