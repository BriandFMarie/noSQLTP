// Imports
const express = require('express');
const UserController = require('./UserController');
const VideoGameController = require('./VideoGameController');
const AnimalController = require('./AnimalController');

const app = express();

// to add all routes
app.use('/api/user', UserController);
app.use('/api/videogame', VideoGameController);
app.use('/api/animal', AnimalController);

// Exports
module.exports = app;
