// Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const bodyParser = require('body-parser');
const logger = require('./src/config/logger');

// Variables
const app = express();

app.use(helmet());
app.use(cors());
