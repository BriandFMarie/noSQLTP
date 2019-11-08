// Imports
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('./src/config/logger');

// Variables
const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => logger.info('Connection established successfully'))
    .then(() => new Promise((resolve, reject) => {
        app.listen(3000, resolve).on('error', reject);
    }))
    .then(() => logger.info(`Server is now running in ${process.env.NODE_ENV || 'development'} on port 3000`))
    .catch(err => {
        logger.error(`Error: ${err}`);
        throw err;
    });
