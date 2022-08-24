require('dotenv').config();
require('express-async-errors');

const {} = require('./controllers');
const {} = require('./services');
const {} = require('./middlewares');

const express = require('express');
const app = express();

app.use(express.json());

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Listening on ${PORT}...`));