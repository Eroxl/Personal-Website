/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect, useRef } from 'react';

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
      className="bg-gray-800 dark:bg-gray-50 w-full h-16 z-50 fixed"
    >
      <a
        id="Logo Bar"
        href="/#"
        className="pl-3 flex items-center h-full w-max gap-x-3 float-left active:opacity-90"
      >
        <svg className="w-12 h-12" id="Logo" width="790" height="790" viewBox="0 0 790 790" fill="none" xmlns="http://www.w3.org/2000/svg"> <ellipse cx="233.115" cy="239.548" rx="161.885" ry="159.274" fill="#494947"/> <ellipse cx="395" cy="159.274" rx="161.885" ry="159.274" fill="#494947"/> <ellipse cx="556.885" cy="235.725" rx="161.885" ry="159.274" fill="#494947"/> <ellipse cx="395" cy="454.888" rx="161.885" ry="159.274" fill="#494947"/> <ellipse cx="628.115" cy="395.001" rx="161.885" ry="159.274" fill="#494947"/> <ellipse cx="161.885" cy="395.001" rx="161.885" ry="159.274" fill="#494947"/> <ellipse rx="161.885" ry="159.274" transform="matrix(1 0 0 -1 233.115 550.452)" fill="#494947"/> <ellipse rx="161.885" ry="159.274" transform="matrix(1 0 0 -1 395 630.726)" fill="#494947"/> <ellipse rx="161.885" ry="159.274" transform="matrix(1 0 0 -1 556.885 554.275)" fill="#494947"/> <ellipse rx="161.885" ry="159.274" transform="matrix(1 0 0 -1 628.115 394.999)" fill="#494947"/> <ellipse rx="161.885" ry="159.274" transform="matrix(1 0 0 -1 161.885 394.999)" fill="#494947"/> <ellipse cx="247.868" cy="251.355" rx="147.131" ry="147.177" fill="#45733A"/> <ellipse cx="395" cy="177.177" rx="147.131" ry="147.177" fill="#45733A"/> <ellipse cx="542.131" cy="247.822" rx="147.131" ry="147.177" fill="#45733A"/> <ellipse cx="395" cy="450.34" rx="147.131" ry="147.177" fill="#45733A"/> <ellipse cx="606.868" cy="395" rx="147.131" ry="147.177" fill="#45733A"/> <ellipse cx="183.131" cy="395" rx="147.131" ry="147.177" fill="#45733A"/> <ellipse rx="147.131" ry="147.177" transform="matrix(1 0 0 -1 247.868 538.645)" fill="#45733A"/> <ellipse rx="147.131" ry="147.177" transform="matrix(1 0 0 -1 395 612.823)" fill="#45733A"/> <ellipse rx="147.131" ry="147.177" transform="matrix(1 0 0 -1 542.131 542.178)" fill="#45733A"/> <ellipse rx="147.131" ry="147.177" transform="matrix(1 0 0 -1 606.868 395)" fill="#45733A"/> <ellipse rx="147.131" ry="147.177" transform="matrix(1 0 0 -1 183.131 395)" fill="#45733A"/> <ellipse cx="261.803" cy="264.735" rx="133.197" ry="133.468" fill="#3F7930"/> <ellipse cx="394.999" cy="197.468" rx="133.197" ry="133.468" fill="#3F7930"/> <ellipse cx="528.197" cy="261.532" rx="133.197" ry="133.468" fill="#3F7930"/> <ellipse cx="394.999" cy="445.185" rx="133.197" ry="133.468" fill="#3F7930"/> <ellipse cx="586.803" cy="395.001" rx="133.197" ry="133.468" fill="#3F7930"/> <ellipse cx="203.197" cy="395.001" rx="133.197" ry="133.468" fill="#3F7930"/> <ellipse rx="133.197" ry="133.468" transform="matrix(1 0 0 -1 261.803 525.265)" fill="#3F7930"/> <ellipse rx="133.197" ry="133.468" transform="matrix(1 0 0 -1 394.999 592.532)" fill="#3F7930"/> <ellipse rx="133.197" ry="133.468" transform="matrix(1 0 0 -1 528.197 528.468)" fill="#3F7930"/> <ellipse rx="133.197" ry="133.468" transform="matrix(1 0 0 -1 586.803 394.999)" fill="#3F7930"/> <ellipse rx="133.197" ry="133.468" transform="matrix(1 0 0 -1 203.197 394.999)" fill="#3F7930"/> <ellipse cx="294.253" cy="297.109" rx="100.41" ry="100.806" fill="#488C37"/> <ellipse cx="394.662" cy="246.303" rx="100.41" ry="100.806" fill="#488C37"/> <ellipse cx="495.072" cy="294.689" rx="100.41" ry="100.806" fill="#488C37"/> <ellipse cx="394.662" cy="433.4" rx="100.41" ry="100.806" fill="#488C37"/> <ellipse cx="539.253" cy="395.496" rx="100.41" ry="100.806" fill="#488C37"/> <ellipse cx="250.072" cy="395.496" rx="100.41" ry="100.806" fill="#488C37"/> <ellipse rx="100.41" ry="100.806" transform="matrix(1 0 0 -1 294.253 493.883)" fill="#488C37"/> <ellipse rx="100.41" ry="100.806" transform="matrix(1 0 0 -1 394.662 544.69)" fill="#488C37"/> <ellipse rx="100.41" ry="100.806" transform="matrix(1 0 0 -1 495.072 496.303)" fill="#488C37"/> <ellipse rx="100.41" ry="100.806" transform="matrix(1 0 0 -1 539.253 395.496)" fill="#488C37"/> <ellipse rx="100.41" ry="100.806" transform="matrix(1 0 0 -1 250.072 395.496)" fill="#488C37"/> </svg>
        <h1
          id="Logo Text"
          className="text-gray-50 dark:text-gray-800 font-black text-xl"
        >
          Eroxl
        </h1>
      </a>
      <div
        className="pr-3 flex items-center h-full w-max gap-x-3 float-right relative"
      >
        <a href="/blog.html" className="text-gray-50 dark:text-gray-800 font-black text-lg">Blog</a>
        <div
          ref={navigationMenu}
        >
          <button
            type="button"
            id="Menu Navigation Button"
            className="w-max h-full flex items-center active:opacity-90"
            onClick={() => { setIsNavigationMenuActive(!isNavigationMenuActive); }}
          >
            {isNavigationMenuActive 
              ? <svg className="transition duration-500 w-12 h-12 fill-current text-gray-50 dark:text-gray-800" id="Menu Navigation Button Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
              : <svg className="transition duration-500 w-12 h-12 fill-current text-gray-50 dark:text-gray-800" id="Menu Navigation Button Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>
            }
          </button>
          <NavigationSidebar isActive={isNavigationMenuActive} />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
