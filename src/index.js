require('dotenv').config();
require('express-async-errors');

const { jobsController, charactersController } = require('./controllers');
const { errorMiddleware } = require('./middlewares');

const express = require('express');
const app = express();

app.use(express.json());
app.get('/jobs', jobsController.getAll);
app.get('/characters', charactersController.getAll);
app.use(errorMiddleware);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Listening on ${PORT}...`));