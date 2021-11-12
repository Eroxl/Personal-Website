import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { APIURL } from '../../constants/Constants';
import downIcon from '../../public/svgs/down_icon.svg';

const HelloMessage = () => {
  const [isProgrammingState, setIsProgrammingState] = useState(true);
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`${APIURL}status/`)
      .then((status) => status.json())
      .then((jsonStatus) => {
        setDescription(jsonStatus.description);
        setIsProgrammingState(jsonStatus.status === 'Programming');
      })
      .catch(() => {
        setIsProgrammingState(false);
        setDescription('Just Sleeping');
      });
  }, []);

  // TODO: Support Mobile
  return (
    <div className="h-full">
      <div className="px-10 table w-full h-screen absolute top-0 left-0">
        <div className="table-cell font-bold text-3xl sm:text-4xl md:text-6xl text-center align-middle h-full text-gray-800">
          <span>Hi, I&rsquo;m </span>
          <a href="https://github.com/Eroxl" title="Github" target="_blank" rel="noopener noreferrer" className="underline text-green-400">{'<Eroxl/>'}</a>
          <br />
          <span>I&rsquo;m currently </span>
          <a href="https://wakatime.com/@Eroxl" title={description} target="_blank" rel="noopener noreferrer" className={`underline ${isProgrammingState ? 'text-cyan-400' : 'text-violet-400'}`}>{isProgrammingState ? '<programming/>' : '<sleeping/>'}</a>
          <a href="#aboutMessage" className="absolute bottom-0 left-1/2 block -ml-6">
            <Image src={downIcon} height="48" width="48" className="text-gray-800 fill-current animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelloMessage;
