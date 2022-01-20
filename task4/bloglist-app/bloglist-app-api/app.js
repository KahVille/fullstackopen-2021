// Express App
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { databaseUrl } = require('./config');
const {blogsRouter} = require('./controllers/blogs');

const mongoUrl = databaseUrl;
mongoose.connect(mongoUrl);

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogsRouter);


module.exports = { app };