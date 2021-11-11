import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

import NavigationBar from '../components/NavigationBar';
import LoginModal from '../components/LoginModal';

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 font-mono">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Eroxl&rsquo;s Personal Website</title>
      </Head>
      <NavigationBar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <LoginModal />
    </div>
  );
}

export default MainApp;
