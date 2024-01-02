<!-- @format -->

# REST API using Nest.js and Typescript

An example REST API using Nest.js, gRPC, Camunda, and Typescript.

## Creating a Nest.js Project

- Install Nest.js Command Line Interface

```
npm i -g @nestjs/cli
```

- Install Nest.js Command Line Interface

```
nest new productsapi
```

## Installation

```bash
$ npm install
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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker Image

- Create the docker image

```
docker build -t productsapi .
```

- Test the image locally

```
docker run --rm -p 3000:3000 productsapi
```

- Push to AWS Elastic Container Registry

```

```

## Deploy the image in AWS Elastic Kubernetes Service

```

```

## References

- [Guide to Nest.js - Building a REST API with Nest and Node](https://stackabuse.com/guide-to-nestjs-building-a-rest-api-with-nest-and-node/)
- [Dockerizing NestJS Application](https://medium.com/@sujan.dumaru.official/dockerizing-nestjs-application-c4b25139fe4c)
