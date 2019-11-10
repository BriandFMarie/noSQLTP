/////////////////////
// External imports
////////////////////

const winston = require('winston');
const Elasticsearch = require('winston-elasticsearch');


/////////////////////
// Configuration
////////////////////

const esTransportOpts = {
    level: 'info',
    clientOpts: { node: 'http://localhost:9200' }
};

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.align(),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console({ colorize: true }),
        new Elasticsearch(esTransportOpts)
    ]
});

/////////////////////
// Modules to export
////////////////////

module.exports = logger;
