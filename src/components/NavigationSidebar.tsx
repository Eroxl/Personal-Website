/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

interface Props {
  isActive: boolean
}

const NavigationSidebar = (props: Props) => {
  const { isActive } = props;

  return (
    <div className={`fixed w-52 h-screen bg-gray-800 text-gray-50 p-3 ${isActive ? 'right-0' : '-right-52'} top-16 text-lg font-black duration-200 transition-all ease-in-out`}>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        <a href="/#aboutMessage" className="w-10/12">About</a>
      </div>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M21.67,18.17l-4.72-4.72c-0.48-0.48-0.99-0.59-1.58-0.59l-2.54,2.54c0,0.59,0.11,1.11,0.59,1.58l4.72,4.72 c0.39,0.39,1.02,0.39,1.41,0l2.12-2.12C22.06,19.2,22.06,18.56,21.67,18.17z"/></g><g><path d="M16.63,9.49c0.39,0.39,1.02,0.39,1.41,0l0.71-0.71l2.12,2.12c1.17-1.17,1.17-3.07,0-4.24l-2.83-2.83 c-0.39-0.39-1.02-0.39-1.41,0l-0.71,0.71V2c0-0.62-0.76-0.95-1.21-0.5l-2.54,2.54c-0.45,0.45-0.12,1.21,0.5,1.21h2.54l-0.71,0.71 c-0.39,0.39-0.39,1.02,0,1.41l0.35,0.35l-2.89,2.89L7.85,6.48v-1c0-0.27-0.11-0.52-0.29-0.71L5.54,2.74 c-0.39-0.39-1.02-0.39-1.41,0L2.71,4.16c-0.39,0.39-0.39,1.02,0,1.41L4.73,7.6c0.19,0.19,0.44,0.29,0.71,0.29h1l4.13,4.13 l-0.85,0.85H8.42c-0.53,0-1.04,0.21-1.41,0.59l-4.72,4.72c-0.39,0.39-0.39,1.02,0,1.41l2.12,2.12c0.39,0.39,1.02,0.39,1.41,0 l4.72-4.72c0.38-0.38,0.59-0.88,0.59-1.41v-1.29l5.15-5.15L16.63,9.49z"/></g></g></g></svg>
        <a href="/#projects" className="w-10/12">Projects</a>
      </div>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><rect fill="none" height="24" width="24"/><g><path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"/></g></svg>
        <a href="/#contributions" className="w-10/12">Contributions</a>
      </div>
      <div className="flex align-middle w-full flex-row active:opacity-70 p-1 gap-2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
        <a href="/#work" className="w-10/12">Work</a>
      </div>
    </div>
  );
};

export default NavigationSidebar;
