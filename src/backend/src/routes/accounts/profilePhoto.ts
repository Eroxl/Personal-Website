import express from 'express';
import axios from 'axios';

// -=- Models -=-
import Users from '../../models/user';

const router = express.Router();

router.get(
  '/',
  async (req, res) => {
    const { code } = req.query;

    // -=- Check If The Code Exists -=-
    if (code === undefined) {
      // ~ 400 Bad Request
      res.statusCode = 400;
      return;
    }

    const user = await Users.findById(code, 'accessToken');
    if (user === null) {
      // ~ 404 Not Found
      res.statusCode = 404;
      return;
    }

    axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${user.accessToken}`,
      },
    })
      .then((userRequest) => {
        const avatarURL = userRequest.data.avatar_url;

        if (avatarURL === undefined) {
          // ~ 404 Not Found
          res.statusCode = 404;
          return;
        }

        // ~ 200 Ok
        res.statusCode = 200;
        res.jsonp({
          avatarURL,
        });
      })
      .catch((err) => {
        res.statusCode = err.toJSON().code;
      });
  },
);

export default router;
