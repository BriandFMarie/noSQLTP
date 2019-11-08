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

## Project

To develop an API REST with a database MongoDB :
- API have to create logs sending to ElasticSearch.
- API's logs have to be displayed to a Dashboard Kibana.
- You have to have 3 collections Mongo
- To have for each collection : GET/all, GET/by ID, POST, PUT, DELETE.
- To have unit tests (optional)
