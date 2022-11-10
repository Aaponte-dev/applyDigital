
## Description

Work to apply to Apply Digital.

The internal chron service will be executed every hour and it is necessary to wait for that time to populate the BD.

The Challenge Apply Digital Archive.postman_collection.json contains postman information

## Pre conditions

* Possess Docker/Docker compose, npm installed on the equipment

* Create .env file in the project with the .env.example file and replace the values associated with the IP of the database

    ``` bash
    docker ps
    docker inspect <container_name/container_id>
    ```

* Copy the value of PORTS and replace it in the .env file in the MONGO_PORT variable

* Copy the value of the IP Address option in Networks and replace it in the .env file in the Mongo_Host variable

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running db

```bash
docker compose up -d
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
