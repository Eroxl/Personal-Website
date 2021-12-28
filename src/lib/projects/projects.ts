/* eslint-disable camelcase */
import axios from 'axios';

import icons from './icons';
import secrets from './secrets';
import { formattedProjectTypes, githubAccessToken, projectType } from './types';

const getAllProjects = async (githubPersonalAccessTokens: githubAccessToken[]) => {
  const outputRepos: formattedProjectTypes[] = [];

  for (const githubPersonalAccessToken of githubPersonalAccessTokens) {
    let url;

    const tokenType = githubPersonalAccessToken.type;
    if (tokenType === 'personal') {
      url = 'https://api.github.com/user/repos';
    } else if (tokenType === 'org') {
      url = `https://api.github.com/orgs/${githubPersonalAccessToken.name}/repos`;
    } else {
      url = `https://api.github.com/repos/${githubPersonalAccessToken.name}/${githubPersonalAccessToken.key}`;
    }

    const projectData = tokenType !== 'repo'
      ? await axios.get(url, {
        headers: {
          Authorization: `token ${githubPersonalAccessToken.key}`,
        },
      })
      : await axios.get(url);

    const projectJSON = projectData.data;


    if (tokenType !== 'repo') {
      projectJSON.forEach((element: projectType) => {
        if (!element.fork && !element.name.startsWith('.')) {
          outputRepos.push(
            {
              name: element.name,
              description: element.description,
              homepage: element.homepage !== '' ? element.homepage : element.html_url,
              imageURL: icons[element.id] ?? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
              contrib: githubPersonalAccessToken.contrib,
            },
          );
        }
      });
    } else {
      outputRepos.push(
        {
          name: projectJSON.name,
          description: projectJSON.description,
          homepage: projectJSON.homepage !== '' ? projectJSON.homepage : projectJSON.html_url,
          imageURL: icons[projectJSON.id] ?? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
          contrib: githubPersonalAccessToken.contrib,
        },
      );
    }
  }

  return outputRepos;
};

const getContributions = async () => {
  const projects = await getAllProjects(secrets.githubPersonalAccessTokens.filter((project) => project.contrib));
  return (projects);
};

const getProjects = async () => {
  const projects = await getAllProjects(secrets.githubPersonalAccessTokens.filter((project) => !project.contrib));
  return (projects);
};


export { getProjects, getContributions };
