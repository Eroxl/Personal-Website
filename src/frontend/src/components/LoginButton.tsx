import React from 'react';
import Image from 'next/image';

import defaultProfilePicture from '../assets/github_default_profile.png';

const isLoggedIn = false;

const LoginButton = () => {
  if (!isLoggedIn) {
    return (
      <button
        type="button"
        className="text-gray-800 font-black text-xl bg-gray-50 p-1 pr-2 pl-2 rounded tracking-wide"
      >
        Login
      </button>
    );
  }

  return (
    <button
      type="button"
      className="flex items-center h-full bg-transparent"
    >
      <Image
        src={defaultProfilePicture}
        width={40}
        height={40}
        className="text-gray-800 font-black text-xl bg-gray-50 p-1 pr-2 pl-2 rounded-full tracking-wide"
      />
    </button>
  );
};

export default LoginButton;
