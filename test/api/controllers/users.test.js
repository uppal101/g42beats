'use strict';

process.env.NODE_ENV = 'test';


const assert = require('chai').assert;
const supertest = require('supertest');
const knex = require('../../../knex');
const app = require('../../../app');
const bcrypt = require('bcrypt');





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

  // afterEach(done => {
  //   knex.migrate.rollback()
  //   .then(() => done())
  //   .catch((err) => {
  //     done(err);
  //   });
  // });
  //
  // after(() => {
  //   knex.destroy()
  // })

    //starting to write tests Ivonne

    //get a userByID
describe('GET users/{id}', () => {
    it('should respond with user information with the specified id', (done) => {
      supertest(app)
        .get('/users/1')
        .set('Accept', 'application/json')
        .expect(200, [{
          "id": 1,
          "user_name": 'AlexKrawiec'
        }], done);
    });

    it('should respond with 404 if user enters incorrect parameter', (done) => {
      supertest(app)
      .get('/users/hkhjk')
      .set('Accept', 'Application/json')
      .expect(404, JSON.stringify({code:404, message: "please enter valid information"}, done));
    });

    it('should respond with user information with the specified id', (done) => {
      supertest(app)
        .get('/users/4')
        .set('Accept', 'application/json')
        .expect([{
          id: 4,
          user_name: 'SanjeetUppal'
        }], done);
    });
});
















      /////Randal's code regarding post autentication.
//   function postToken(req, res) {
//     knex('clients')
//         .where('email', req.swagger.params.credentials.value.email)
//         .first()
//         .then((client) => {
//             return bcrypt.compare(
//                 req.swagger.params.credentials.value.password,
//                 client.hashed_password
//             );
//         })
//         .catch((err) => {
//             res.set('Content-Type', 'match/plain')
//             res.status(400).send('Bad email or password');
//         })
//         .then((result) => {
//             return knex('clients')
//                 .where('email', req.swagger.params.credentials.value.email)
//                 .first();
//         })
//         .then((client) => {
//             const claim = {
//                 userId: client.id
//             };
//
//             const token = jwt.sign(claim, process.env.JWT_KEY, {
//                 expiresIn: '7 days'
//             });
//
//             // res.cookie('token', token, {
//             //     httpOnly: true,
//             //     expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
//             //     secure: process.env.NODE_ENV === 'production'
//             // });
//             client.token = token;
//
//             delete client.first_name;
//             delete client.last_name;
//             delete client.hashed_password;
//             delete client.created_at;
//             delete client.updated_at;
//
//             res.set('Token', token);
//             res.set('Content-Type', 'application/json');
//             res.status(200).json(client);
//         })
//         .catch((err) => {
//             res.set('Content-Type', 'text/plain');
//             res.status(400).send('Bad email or password');
//         })
//         .catch(bcrypt.MISMATCH_ERROR, () => {
//             res.set('Content-Type', 'text/plain');
//             res.status(400).send('Bad email or password');
//         });
// }
/////////////////////////////////////////////////////


    ///this one closes all the usres route tests.
  // });
