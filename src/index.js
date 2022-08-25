require('dotenv').config();
require('express-async-errors');

const { jobsController, charactersController, episodesController } = require('./controllers');
const { errorMiddleware } = require('./middlewares');

const express = require('express');
const app = express();

app.use(express.json());
app.get('/jobs', jobsController.getAll);
app.get('/characters', charactersController.getAll);
app.post('/characters', charactersController.create);
app.get('/episodes', episodesController.getAll)
app.use(errorMiddleware);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Listening on ${PORT}...`));