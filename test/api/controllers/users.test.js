const request = require('supertest');
const app = require('../../../app');
const knex = require('../../../knex');
const expect = require('mocha').expect;

process.env.NODE_ENV = 'test';
// before((done) => {
//     knex.migrate.latest()
//         .then(() => {
//             done();
//         })
//         .catch((err) => {
//             done(err);
//         });
// });

describe('GET /users/:id', () => {
//Do this before every test
    before((done) => {
        knex.migrate.latest()
            .then(function() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    // `beforeEach` is run before each test in a describe
    beforeEach((done) => {
        knex.seed.run()
            .then(() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });
  })
