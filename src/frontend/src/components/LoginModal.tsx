import React, { useState, useEffect } from 'react';

const LoginModal = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.addEventListener('activateLoginModal', () => { setIsActive(true); });
  });

  if (!isActive) return null;

  return (
    <div
      className="bg-black bg-opacity-25 min-w-full min-h-full fixed top-0 left-0 flex justify-center items-center"
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
        className="w-96 h-max bg-gray-800 cursor-default"
      >
        <h1
          className="text-gray-50 font-black text-2xl"
        >
          Account Menu
        </h1>
        <h1
          className="text-gray-50 font-black text-md"
        >
          Login using Github to access extra features on the website.
        </h1>
      </div>
    </div>
  );
};

export default LoginModal;
