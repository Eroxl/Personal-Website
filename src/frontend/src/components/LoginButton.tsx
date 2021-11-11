import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { APIURL } from '../constants/Constants';

// FIXME: Re-Write Better
// EROXL: 10/11/2021 (dd/mm/YYYY)

const LoginButton = () => {
  const [code, setCode] = useState('');
  const [profileURL, setProfileURL] = useState('');

  useEffect(() => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i += 1) {
      const [cookieKey, cookieVal] = cookies[i].split('=');
      if (cookieKey === 'githubCode') {
        setCode(cookieVal);

        fetch(`${APIURL}accounts/profile-photo?code=${cookieVal}`)
          .then((profileURLData) => profileURLData.json())
          .then((profileURLJSON) => setProfileURL(profileURLJSON.avatarURL));
      }
    }
  }, []);

  const activateLoginModal = () => {
    const activateLoginModalEvent = new CustomEvent('activateLoginModal', { detail: { isLoggedIn: code !== '' } });
    document.dispatchEvent(activateLoginModalEvent);
  };

  if (code === '') {
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

  if (profileURL !== '') {
    return (
      <button
        type="button"
        className="flex items-center h-full bg-transparent"
        onClick={activateLoginModal}
      >
        <Image
          src={profileURL}
          // TODO: Add Placeholder Instead Of Returning Null
          width={40}
          height={40}
          className="text-gray-800 font-black text-xl active:opacity-90 py-1 px-2 rounded-full tracking-wide"
        />
      </button>
    );
  }

  return null;
};

export default LoginButton;
