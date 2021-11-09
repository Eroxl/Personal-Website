import React from 'react';
import Image from 'next/image';

import logoIcon from '../assets/logo.png';
import shopIcon from '../assets/svgs/store_icon.svg';
import menuIcon from '../assets/svgs/menu_icon.svg';

function NavigationBar() {
  return (
    <div
      id="Navigation Bar"
      className="bg-gray-800 w-full h-16"
    >
      <a
        id="Logo Bar"
        href="/"
        className="pl-2 flex items-center h-full w-max gap-x-2 float-left"
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
        className="pr-2 flex items-center h-full w-max gap-x-2 float-right"
      >
        {/* TODO: Login State */}
        <a
          id="Marketplace Button"
          href="/marketplace/"
          className="w-max h-full flex items-center"
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
          className="w-max h-full flex items-center"
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
      </div>
    </div>
  );
}

export default NavigationBar;
