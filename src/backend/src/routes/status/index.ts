import express from 'express';
// import axios from 'axios';

// -=- Models -=-
import Status from '../../models/status';

const router = express.Router();

router.get(
  '/',
  async (req, res) => {
    const status = await Status.findById('currentStatus', ['status', 'description']);

    if (status === null) {
      res.statusCode = 404;
      return;
    }

    res.statusCode = 200;
    res.jsonp(status);
  },
);

export default router;
