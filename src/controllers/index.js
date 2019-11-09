// Imports
const express = require('express');
const UserController = require('./children/UserController');
const VideoGameController = require('./children/VideoGameController');
const AnimalController = require('./children/AnimalController');

const app = express();

// to add all routes

app.use('/api/v1/user', UserController);
app.use('/api/v1/videogame', VideoGameController);
app.use('/api/v1/animal', AnimalController);

// Exports
module.exports = app;
