// Express App
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { databaseUrl } = require('./config');
const { usersRouter} = require('./controllers/users');
const { blogsRouter } = require('./controllers/blogs');
const { loginRouter } = require('./controllers/login'); 
const middleware = require('./utils/middleware');

mongoose.connect(databaseUrl);

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', middleware.tokenExtractor, usersRouter);
app.use('/api/blogs', middleware.tokenExtractor, middleware.userExtractor, blogsRouter);
app.use('/api/login', loginRouter);
app.use(middleware.uknownEndPoint);
app.use(middleware.errorHandler);

module.exports = { app };
