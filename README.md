## How to run this project

1. Start mongodb server and set MONGO_URI
2. Run `npm run seed:countries` to insert initial country documents to countries collection
3. Run `npm run start:dev`
4. `{hostname}/api-document` for swagger API document
5. NOTE: I wrote only 1 unit test for "authentication.service.ts" because I have no time to write it all

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
