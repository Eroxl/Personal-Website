import express from 'express';
import axios from 'axios';

// -=- Models -=-
import Users from '../../models/user';
import secrets from '../../secrets';

const router = express.Router();

router.post(
  '/',
  async (req, res) => {
    const { code } = req.query;

    // -=- Check If The Code Exists -=-
    if (code === undefined) {
      // ~ 400 Bad Request
      res.statusCode = 400;
      return;
    }

    // -=- Get The Access Token -=-
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
    if (accessToken === undefined) {
      // ~ 401 Unauthorized
      res.statusCode = 401;
      return;
    }

    const user = new Users({
      _id: code,
      accessToken,
      ownedItems: [],
    });

    // ~ 200 Ok
    res.statusCode = 200;

    user.save(() => {
      // ~ 400 Conflict
      res.statusCode = 409;
    });
  },
);

export default router;
