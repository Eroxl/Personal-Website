import express from 'express';

import signup from './signup';
import profilePhoto from './profilePhoto';

const router = express.Router();

router.use(
  '/signup/',
  signup,
);

router.use(
  '/profile-photo/',
  profilePhoto,
);

export default router;
