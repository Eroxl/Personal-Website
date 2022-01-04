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
        if (icons[element.id] !== undefined) {
          outputRepos.push(
            {
              name: element.name,
              description: element.description,
              homepage: element.homepage !== '' ? element.homepage : element.html_url,
              imageURL: icons[element.id],
              contrib: githubPersonalAccessToken.contrib,
            },
          );
        }
      });
    } else {
      if (icons[projectJSON.id] !== undefined) {
        outputRepos.push(
          {
            name: projectJSON.name,
            description: projectJSON.description,
            homepage: projectJSON.homepage !== '' ? projectJSON.homepage : projectJSON.html_url,
            imageURL: icons[projectJSON.id],
            contrib: githubPersonalAccessToken.contrib,
          },
        );
      }
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
