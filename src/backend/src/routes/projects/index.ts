import express from 'express';
import axios from 'axios';

import secrets from '../../secrets';
import icons from '../../constants/icons';

type projectType = {
  id: string,
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
  imageURL: string,
}

const router = express.Router();

router.get(
  '/',
  async (req, res) => {
    const outputRepos: Promise<formattedProjectTypes[]>[] = [];

    secrets.githubPersonalAccessTokens.forEach((githubPersonalAccessToken) => {
      const myOutputReposPromise: Promise<formattedProjectTypes[]> = new Promise(
        (resolve, reject) => {
          const myOutputRepos: formattedProjectTypes[] = [];

          let url = '';
          if (githubPersonalAccessToken.type === 'personal') {
            url = 'https://api.github.com/user/repos';
          } else {
            url = `https://api.github.com/orgs/${githubPersonalAccessToken.name}/repos`;
          }
          axios.get(url, {
            headers: {
              Authorization: `token ${githubPersonalAccessToken.key}`,
            },
          })
            .then((projectData) => projectData.data)
            .then((projectJSON) => {
              projectJSON.forEach((element: projectType) => {
                if (!element.fork && !element.name.startsWith('.')) {
                  myOutputRepos.push(
                    {
                      name: element.name,
                      description: element.description,
                      homepage: element.homepage !== '' ? element.homepage : element.html_url,
                      imageURL: icons[element.id] ?? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
                    },
                  );
                }
              });
              resolve(myOutputRepos);
            })
            .catch((err) => { reject(err); });
        },
      );
      outputRepos.push(myOutputReposPromise);
    });

    Promise.all(outputRepos)
      .then((outputReposData) => {
        const outArr: formattedProjectTypes[] = [];
        outputReposData.forEach((outputReposDataBlock) => {
          outputReposDataBlock.forEach((outputReposDataElement) => {
            outArr.push(outputReposDataElement);
          });
        });
        res.jsonp(outArr);
      })
      .catch(() => { res.statusCode = 500; });
  },
);

export default router;
