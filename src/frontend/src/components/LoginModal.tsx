import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import githubLogo from '../public/svgs/github_logo.svg';
import { ClientID, GithubOAuthCodeKey } from '../constants/Constants';

const LoginModal = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const activateLoginModal = (activateLoginModalEvent: CustomEvent) => {
    setIsLoggedIn(activateLoginModalEvent.detail.isLoggedIn);
    setIsActive(true);
  };

  useEffect(() => {
    document.addEventListener('activateLoginModal', activateLoginModal);
    return () => {
      document.removeEventListener('activateLoginModal', activateLoginModal);
    };
  });

  if (!isActive) return null;

  return (
    <div
      className="bg-black bg-opacity-10 min-w-full min-h-full fixed top-0 left-0 flex justify-center items-center"
      onClick={() => { setIsActive(false); }}
      onKeyUp={(keyboardEvent: React.KeyboardEvent) => {
        if (keyboardEvent.key === 'Escape' || keyboardEvent.key === 'Enter') {
          setIsActive(false);
        }
      }}
      role="button"
      tabIndex={0}
    >
      {/* I removed the accesability requirements for this portion because
          it's not actually a button and just stops the click event.
      */}
      {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
      <div
        onClick={(clickEvent) => { clickEvent.stopPropagation(); }}
        role="button"
        onKeyUp={() => {}}
        className="w-11/12 sm:w-8/12 md:w-96 h-max bg-gray-800 cursor-default p-4 rounded-md"
      >
        <h1
          className="text-gray-50 font-black text-2xl"
        >
          Account Menu
        </h1>
        <h1
          className="text-gray-50 font-black text-md"
        >
          Login using github to access extra website features!
        </h1>
        {isLoggedIn ? (
          <button
            onClick={() => { document.cookie = `${GithubOAuthCodeKey}=;`; setIsLoggedIn(false); window.location.reload(); }}
            type="button"
            className="bg-gray-50 h-max p-2 flex items-center mt-2 gap-x-3 rounded-lg w-full"
          >
            <Image src={githubLogo} alt="Github Logo" />
            <h1
              className="text-gray-800 font-black text-lg"
            >
              Sign Out Of Github
            </h1>
          </button>
        ) : (
          <a
            href={`https://github.com/login/oauth/authorize/?client_id=${ClientID}`}
            className="bg-gray-50 h-max p-2 flex items-center mt-2 gap-x-3 rounded-lg w-full"
          >
            <Image src={githubLogo} alt="Github Logo" />
            <h1
              className="text-gray-800 font-black text-lg"
            >
              Sign In With Github
            </h1>
          </a>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
