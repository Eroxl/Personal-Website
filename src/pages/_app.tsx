import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

import NavigationBar from '../components/NavigationBar';
import '../styles/globals.css';

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <body className="bg-gray-100 dark:bg-gray-800 font-mono flex flex-col h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Eroxl&rsquo;s Personal Website</title>

        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content="Eroxl's personal website for testing out ideas and sharing projects they are working on." />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Eroxl's Personal Website" />
        <meta property="og:description" content="My personal website for testing out ideas and sharing projects im working on" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Eroxl's Personal Website" />
        <meta name="twitter:description" content="My personal website for testing out ideas and sharing projects im working on" />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <NavigationBar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </body>
  );
}

export default MainApp;
