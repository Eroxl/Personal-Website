import express from 'express';
import axios from 'axios';

import Projects from '../../models/projects';
import secrets from '../../secrets';

type projectType = {
  fork: boolean,
  name: string,
  description: string,
  html_url: string,
  homepage: string,
}

type formattedProjectTypes = {
  name: string,
  description: string,
  homepage: string,
}

const router = express.Router();

// TODO: Add Error Handling
router.get(
  '/',
  async (req, res) => {
    axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${secrets.githubPersonalAccessToken}`,
      },
    })
      .then((projectData) => projectData.data)
      .then((projectJSON) => {
        const outputRepos: formattedProjectTypes[] = [];

        projectJSON.forEach((element: projectType) => {
          if (!element.fork) {
            outputRepos.push(
              {
                name: element.name,
                description: element.description,
                homepage: element.homepage !== '' ? element.homepage : element.html_url,
              },
            );
          }
        });

        console.log(projectJSON);

        // ~ 200 Ok
        res.statusCode = 200;
        res.jsonp(outputRepos);
      })
      .catch(() => {
        // ~ 500 Internal Server Error
        res.statusCode = 500;
      });
  },
);

export default router;
