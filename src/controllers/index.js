// Imports
const express = require('express');
const UserController = require('./children/UserController');
const VideoGameController = require('./children/VideoGameController');
const AnimalController = require('./children/AnimalController');

const app = express();

// to add all routes
app.use('/api/user', UserController);
app.use('/api/videogame', VideoGameController);
app.use('/api/animal', AnimalController);

// Exports
module.exports = app;
