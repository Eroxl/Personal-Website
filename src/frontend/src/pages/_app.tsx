import React from 'react';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

import NavigationBar from '../components/NavigationBar';
import LoginModal from '../components/LoginModal';

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 font-mono">
      <NavigationBar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <LoginModal />
    </div>
  );
}

export default MainApp;
