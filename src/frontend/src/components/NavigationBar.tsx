import React from 'react';
import Image from 'next/image';

import logoIcon from '../public/logo.png';
import shopIcon from '../public/svgs/store_icon.svg';
import menuIcon from '../public/svgs/menu_icon.svg';
import LoginButton from './LoginButton';

const NavigationBar = () => (
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
      className="pr-3 flex items-center h-full w-max gap-x-3 float-right"
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
          // Tailwind h-12
          width={48}
          height={48}
        />
      </a>
      <button
        type="button"
        id="Menu Navigation Button"
        className="w-max h-full flex items-center active:opacity-90"
      >
        <Image
          src={menuIcon}
          id="Menu Navigation Button Icon"
          alt="Menu Navigation Button Icon"
          // Tailwind h-12
          width={48}
          height={48}
        />
      </button>
      <LoginButton />
    </div>
  </div>
);

export default NavigationBar;
