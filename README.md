# g42beats

Deployed site: https://ivonneq21-g42beats.herokuapp.com/api-docs/


### About g42beats
g42 beats is a backend API(that extends on the Spotify API) built in order to cut out the middle man, the DJ. The application allows users to sign up with a group and then their personal playlist is accessible to the group in order to create a compiled group playlist. This is so that when a group gathers together everyone's music choice is present to make a more memorable event.

### Technology
The server for g42beats is built with Node.js and Express with a PostgreSQL database. For security of user's accounts bcrypt is utilized and the routes have been documented with Swagger. Additional technologies used include Knex, SQL, body-parser, and Supertest for testing.

### To Get Started
1. Please fork and clone this repo.
2. `npm install` Install dependencies
3. `touch .env` Example .env file:
```
JWT_KEY= xxxxxx
```
4. Create the database locally. From the command line run the following commands:
`
createdb g42beats_dev  //For running development environment locally
createdb g42beats_test  //To run all of the tests
`
5. Seed the database. From the command line run the following commands:
`
knex migrate:rollback //Only if dropping the database and reseeding
knex migrate:latest
knex seed:run
`
6. `npm start` To run locally


### Testing

1. `npm test`
