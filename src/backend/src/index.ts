import express from 'express';
import cors from 'cors';

import login from './accounts/login';

const app = express();
const port = 8080;

app.use(cors());

app.use(
  '/accounts/login/', 
  login
)

// -=- Start The Express Server -=- 
app.listen(port);