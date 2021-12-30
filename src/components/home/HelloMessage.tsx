import React from 'react';

const HelloMessage = (
  props: { time: string },
) => {
  const { time } = props;

  return (
    <div className="h-full">
      <div className="px-10 table w-full h-screen absolute top-0 left-0">
        <div className="table-cell font-bold text-3xl sm:text-4xl md:text-6xl text-center align-middle h-full text-gray-800 dark:text-gray-50">
          <span>Hi, I&rsquo;m </span>
          <a href="https://github.com/Eroxl" title="Github" target="_blank" rel="noopener noreferrer" className="underline text-green-400">Eroxl</a>
          <br />
          <span>I&rsquo;ve coded over </span>
          <a href="https://wakatime.com/@Eroxl" title="Wakatime" target="_blank" rel="noopener noreferrer" className="underline text-cyan-400">{`${time} hours`}</a>
          <span> since August 2021</span>
          <a href="#aboutMessage" className="absolute bottom-0 left-1/2 block -ml-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              enableBackground="new 0 0 24 24" 
              height="24px" 
              viewBox="0 0 24 24" 
              width="24px"
              className="animate-bounce w-12 h-12 fill-current text-gray-800 dark:text-gray-50"
            ><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41"/><polygon points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19"/></g></g></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelloMessage;
