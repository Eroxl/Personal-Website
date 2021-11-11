import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// -=- Routes -=-
import accounts from './routes/accounts';
import status from './routes/status';
// -=- Secrets -=-
import secrets from './secrets';

mongoose.connect(secrets.readAndWriteMongoCreds);

const app = express();
const port = 8080;

app.use(cors());

app.use(
  '/accounts/',
  accounts,
);
app.use(
  '/status/',
  status,
);

// -=- Start The Express Server -=-
app.listen(port);
