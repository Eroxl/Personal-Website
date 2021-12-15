/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Image from 'next/image';

import downIcon from '../../images/svgs/down_icon.svg';

const HelloMessage = (
  // eslint-disable-next-line camelcase
  props: { codeTimeJSON: {data: {total_seconds_including_other_language: string}} },
) => {
  const { codeTimeJSON } = props;

  return (
    <div className="h-full">
      <div className="px-10 table w-full h-screen absolute top-0 left-0">
        <div className="table-cell font-bold text-3xl sm:text-4xl md:text-6xl text-center align-middle h-full text-gray-800">
          <span>Hi, I&rsquo;m </span>
          <a href="https://github.com/Eroxl" title="Github" target="_blank" rel="noopener noreferrer" className="underline text-green-400">Eroxl</a>
          <br />
          <span>I&rsquo;ve coded over </span>
          <a href="https://wakatime.com/@Eroxl" title="Wakatime" target="_blank" rel="noopener noreferrer" className="underline text-cyan-400">{`${Math.round(+codeTimeJSON.data.total_seconds_including_other_language / 3600)} hours`}</a>
          <span> since August 2021</span>
          <a href="#aboutMessage" className="absolute bottom-0 left-1/2 block -ml-6">
            <img src='/svgs/down_icon.svg' className="animate-bounce w-12 h-12" alt="Down Arrow Button" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelloMessage;
