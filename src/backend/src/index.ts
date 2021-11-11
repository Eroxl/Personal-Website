import express from 'express';
import cors from 'cors';

import accounts from './accounts'

const app = express();
const port = 8080;

app.use(cors());

app.use(
  '/accounts/', 
  accounts
)

// -=- Start The Express Server -=- 
app.listen(port);