import React from 'react';
import Image from 'next/image';

import defaultProfilePicture from '../assets/github_default_profile.png';

const isLoggedIn = false;

const LoginButton = () => {
  const activateLoginModal = () => {
    const activateLoginModalEvent = new CustomEvent('activateLoginModal', { detail: { isLoggedIn } });
    document.dispatchEvent(activateLoginModalEvent);
  };

  if (!isLoggedIn) {
    return (
      <button
        type="button"
        className="text-gray-800 font-black text-xl bg-gray-50 active:opacity-90 py-1 px-2 rounded tracking-wide"
        onClick={() => { activateLoginModal(); }}
      >
        Login
      </button>
    );
  }

  return (
    <button
      type="button"
      className="flex items-center h-full bg-transparent"
      onClick={activateLoginModal}
    >
      <Image
        src={defaultProfilePicture}
        width={40}
        height={40}
        className="text-gray-800 font-black text-xl bg-gray-50 active:opacity-90 py-1 px-2 rounded-full tracking-wide"
      />
    </button>
  );
};

export default LoginButton;
