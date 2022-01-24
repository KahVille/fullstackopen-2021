// Express App
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { databaseUrl } = require('./config');
const { usersRouter} = require('./controllers/users');
const { blogsRouter } = require('./controllers/blogs');
const { loginRouter } = require('./controllers/login'); 
const middleware = require('./utils/middleware');
const mongoUrl = databaseUrl;
mongoose.connect(mongoUrl);

const app = express();
app.use(cors());
app.use(express.json());
app.use(middleware.tokenExtractor);
app.use('/api/users', usersRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/login', loginRouter);
app.use(middleware.uknownEndPoint);
app.use(middleware.errorHandler);

module.exports = { app };
