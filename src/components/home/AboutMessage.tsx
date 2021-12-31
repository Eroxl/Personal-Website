import React from 'react';

const AboutMessage = () => (
  <h1 className="font-bold text-gray-800 dark:text-gray-50 transition-colors">
    <h1 className="sm:text-6xl text-5xl">About</h1>
    <h1 className="sm:text-3xl text-2xl sm:px-5 px-0 pl-5">
      <p className="sm:text-2xl text-xl">
        This is my personal website to show off some of the projects I&rsquo;m working on and to
        test out ideas that I have!
        <br />
        <br />
        This site was created using NextJS and Typescript you can see the source code{' '}
        <a className="underline text-cyan-400" href="https://github.com/Eroxl/Personal-Website">here</a>.
        <br />
      </p>
    </h1>
  </h1>
);

export default AboutMessage;
