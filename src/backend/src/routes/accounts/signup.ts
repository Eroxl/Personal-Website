import express from 'express';
import axios from 'axios';

import Users from '../../models/user';
import secrets from '../../secrets';

const router = express.Router();

// FIXME: Switch To Post For Production
router.get(
  '/',
  async (req, res) => {
    const { code } = req.query;

    // -=- Check If The Code Is Valid -=-
    if (code === undefined) {
      // ~ 400 Bad Request
      req.statusCode = 400;
    } else {
      // ?client_id=${secrets.githubClientID}&client_secret=${secrets.githubClientSecrets}&code=${}
      // -=- Check If It's A Valid Github Code -=-
      const accessTokenRequest = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: secrets.githubClientID,
        client_secret: secrets.githubClientSecrets,
        code,
      }, {
        headers: {
          Accept: 'application/json',
        },
      });
      const accessToken = accessTokenRequest.data.access_token;

      // -=- Check If It's A Valid Access Token -=-
      if (accessToken !== undefined) {
        const user = new Users({
          _id: code,
          accessToken,
          ownedItems: [],
        });

        user.save(() => {
          res.statusCode = 409;
        });
        req.statusCode = 200;
      } else {
        req.statusCode = 401;
      }
    }
  },
);

export default router;
