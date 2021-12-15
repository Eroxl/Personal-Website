/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import logoIcon from '../images/logo.svg';
import menuIcon from '../images/svgs/menu_icon.svg';
import closeIcon from '../images/svgs/close_icon.svg';
import NavigationSidebar from './NavigationSidebar';

const NavigationBar = () => {
  const [isNavigationMenuActive, setIsNavigationMenuActive] = useState(false);

  const navigationMenu: React.MutableRefObject<any> = useRef(null);
  const clickHandle = (mouseEvent: Event) => {
    if (navigationMenu.current && !navigationMenu.current.contains(mouseEvent.target)) {
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
        href="/#"
        className="pl-3 flex items-center h-full w-max gap-x-3 float-left active:opacity-90"
      >
        <img src={logoIcon} id="Logo" alt="Eroxl's Logo"/>
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
        <a href="/blog" className="text-gray-50 font-black text-lg">Blog</a>
        <div
          ref={navigationMenu}
        >
          <button
            type="button"
            id="Menu Navigation Button"
            className="w-max h-full flex items-center active:opacity-90"
            onClick={() => { setIsNavigationMenuActive(!isNavigationMenuActive); }}
          >
            <img src={isNavigationMenuActive ? closeIcon : menuIcon}
              id="Menu Navigation Button Icon"
              alt="Menu Navigation Button Icon"
              className="transition duration-500"
              width={48}
              height={48}
            />
          </button>
          <NavigationSidebar isActive={isNavigationMenuActive} />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
