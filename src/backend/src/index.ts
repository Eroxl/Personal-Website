import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// -=- Routes -=-
import projects from './routes/projects';
// -=- Secrets -=-
import secrets from './secrets';

mongoose.connect(secrets.readAndWriteMongoCreds);

const app = express();
const port = 8080;

app.use(cors());

app.use(
  '/projects/',
  projects,
);

// -=- Start The Express Server -=-
app.listen(port);
