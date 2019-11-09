// Imports
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');

// To add logger
const logger = require('./src/config/logger');

// To add routes queries / Controllers
const queriesControllers = require('./src/controllers/index');

// To add swagger documentation for api
const swaggerDocs = require('./swagger.json');

// Variables
const app = express();

app.use(helmet());
app.use(cors());

// To parse body of queries
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

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
    .then(() => {
        // Controllers models API
        app.use(queriesControllers);

        // swagger documentation
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    })
    .catch(err => {
        logger.error(`Error: ${err}`);
        throw err;
    });
