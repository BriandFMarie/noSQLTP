# noSQL - TP

## Description

TP for a School's project to explore noSQL (with mongodb, elasticsearch, kibana).

## Technologies & Libs

### Libs & Frameworks && others
    . Node JS (version 12.13.0)
    . Express JS
    . Winston (logs)
    . Body-parser
    . Helmet (security)
    . Cors
    . mongoose (MongoDB)

### Tests & Good practices
    . Eslint (best practices)
    . Mocha (unit tests)
    . Chai/Sinon-chai/Sinon (assertions)

## Database
    . MongoDB


## Running Server
Run `npm start` for a dev server. Navigate to `http://localhost:3000`.
You will have to add 'nodemon' in global if you want that application change automatically new changes.


## Running unit tests
Run `npm test`.


## API Documentation
To see API Documentation, you have to navigate to `http://localhost:3000/api-docs`.


## Project

To develop an API REST with a database MongoDB :
- API have to create logs sending to ElasticSearch.
- API's logs have to be displayed to a Dashboard Kibana.
- You have to have 3 collections Mongo
- To have for each collection : GET/all, GET/by ID, POST, PUT, DELETE.
- To have unit tests (optional)


## Rappel ELK

You have to install ElasticSearch, Kibana and logstash to see logs.

After that, you have to add a `kibana.yml` and to uncommented `elasticsearch.hosts: ["http://localhost:9200"]`.
You have to create a `logstash.conf` in root to and to add some configuration.

**WARNING**: If you're on windows you have to configure yours variables environments.
 
To finished, you have to run application, elasticsearch (port: 9200), kibana (port: 5601) and logstash (for logstash you need to say what config file you want like that: `logstash.bat -f logstash.conf`).
