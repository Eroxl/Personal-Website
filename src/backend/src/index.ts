import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors());

// -=- Start The Express Server -=- 
app.listen(port);