import React from 'react';

// TODO: Convert This Whole Page Into A Custom Markdown Renderer
const AboutMessage = () => (
  <h1 className="font-bold text-gray-800">
    <h1 className="sm:text-6xl text-5xl">About</h1>
    <h1 className="sm:text-3xl text-2xl sm:px-5 px-0 pl-5">
      <h1 className="sm:text-2xl text-xl">
        This is my personal website to show off some of the projects I&rsquo;m working on and to
        test out ideas that I have
        <br />
        <br />
        Speaking of testing out ideas while your exloring this page you should see some of them.
        Heres a list of them with a bit of explanation about them.
        <br />
        <br />
      </h1>
      - Signing This Page
      <br />
      <h1 className="sm:text-2xl text-xl sm:px-5 px-0 pl-5">
        If you scroll down to the bottom while you&rsquo;re logged in you&rsquo;ll be able to sign
        this website by following the instructions at the bottom. This will add your profile picture
        to the footer forever.
      </h1>
      <br />
      - Activity Monitor
      <br />
      <h1 className="sm:text-2xl text-xl sm:px-5 px-0 pl-5">
        If you scroll back up to the top of the page you&rsquo;ll see either&ensp;
        <a href="#top" title="Editing A Python File" className="underline text-cyan-400">&lt;programming/&gt;</a>
        &ensp;or&ensp;
        <a href="#top" title="Just Sleeping" className="underline text-violet-400">&lt;sleeping/&gt;</a>
        &ensp;if you hover over those they&rsquo;ll show a little description of my status
        &ensp;gathered from a&ensp;
        <a href="https://github.com/Eroxl/Portfolio-Website" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">vscode plugin</a>
        &ensp;I coded for instance &ldquo;Editing A
        Python File&rdquo; or &ldquo;Just Sleeping&rdquo;
      </h1>
    </h1>
  </h1>
);

export default AboutMessage;
