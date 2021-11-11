import express from 'express';
const router = express.Router();

import login from './login';
import profilePhoto from './profilePhoto';

router.use(
  '/login/', 
  login
)

router.use(
  '/profile-photo/', 
  profilePhoto
)

export default router