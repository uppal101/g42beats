'use strict';

process.env.NODE_ENV = 'test';

// const { describe, it } = require('mocha');
const assert = require('chai').assert;
const request = require('supertest');
const knex = require('../../../knex');
const app = require('../../../app');
const bcrypt = require('bcrypt');



describe('users routes', () => {

  // `before` runs once before all tests in a describe
  before((done) => {
    knex.migrate.rollback()
    .then(function(){
      return knex.migrate.latest()
    })
    .then(() => {
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

    //starting to write tests Ivonne
    it('should respond with user information with the specified id', (done) => {
      request(index)
        .get('/users/1')
        .set('Accept', 'application/json')
        .expect({
          id: 1,
          user_name: 'AlexKrawiec'
        }, done);
    });


    ///this one closes all the usres route tests.
  });
