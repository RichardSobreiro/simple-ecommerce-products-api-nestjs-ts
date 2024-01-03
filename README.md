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

## Push to AWS Elastic Container Registry

1. Retrieve an authentication token and authenticate your Docker client to your registry.
   Use the AWS CLI:

```
aws ecr get-login-password --region us-east-1 --profile default | docker login --username AWS --password-stdin 991345343226.dkr.ecr.us-east-1.amazonaws.com
```

Note: If you receive an error using the AWS CLI, make sure that you have the latest version of the AWS CLI and Docker installed.

2. Build your Docker image using the following command:

```
docker build -t productsapi .
```

3. After the build completes, tag your image so you can push the image to this repository:

```
docker tag productsapi:latest 991345343226.dkr.ecr.us-east-1.amazonaws.com/productsapi:latest
```

4. Run the following command to push this image to your newly created AWS repository:

```
docker push 991345343226.dkr.ecr.us-east-1.amazonaws.com/productsapi:latest
```

## Deploy the image in AWS Elastic Kubernetes Service

```

```

## References

- [Guide to Nest.js - Building a REST API with Nest and Node](https://stackabuse.com/guide-to-nestjs-building-a-rest-api-with-nest-and-node/)
- [Dockerizing NestJS Application](https://medium.com/@sujan.dumaru.official/dockerizing-nestjs-application-c4b25139fe4c)
