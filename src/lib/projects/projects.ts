/* eslint-disable camelcase */
import axios from 'axios';

import { formattedProjectTypes } from './types';

const projects = [
  {
    name: 'BC Open Legislature',
    description: "Keeping tabs on BC's Legislature | Built using NextJS and Typescript | Based on https://openparliament.ca",
    homepage: 'https://github.com/BC-Open-Legislature/Legislature-Site',
    imageURLs: ['https://raw.githubusercontent.com/BC-Open-Legislature/Legislature-Site-Frontend/main/images/Screenshots/Debates%20Page%20Updated.png'],
    contrib: false,
  },
  {
    name: 'Note Rack',
    description: 'An fullstack inline WYSIWYG markdown editor built for students to manage school work. | Built using NextJS, ExpressJS, and Typescript.',
    homepage: 'https://github.com/eroxl/Note-Rack',
    imageURLs: ['https://raw.githubusercontent.com/Eroxl/Note-Rack/main/images/Desktop_Current_State_Dark.png'],
    contrib: false,
  },
  {
    name: 'Personal Website',
    description: 'My personal website for sharing my projects. | Built using NextJS and Typescript.',
    homepage: 'https://github.com/Eroxl/Personal-Website',
    imageURLs: ['https://repository-images.githubusercontent.com/425653836/781f96f2-4a25-4eb9-86df-93376136428a'],
    contrib: false,
  },
];

const getContributions = (): formattedProjectTypes[] => {
  return projects.filter((project) => project.contrib);
};

const getProjects = (): formattedProjectTypes[] => {
  return projects.filter((project) => !project.contrib);
};


export { getProjects, getContributions };
