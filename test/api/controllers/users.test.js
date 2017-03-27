'use strict';

process.env.NODE_ENV = 'test';

// const { describe, it } = require('mocha');
const assert = require('chai').assert;
const supertest = require('supertest');
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

    //get a userByID
    it('should respond with user information with the specified id', (done) => {
      supertest(app)
        .get('/users/1')
        .set('Accept', 'application/json')
        .expect(200,{
          "id": 1,
          "user_name": 'AlexKrawiec'
        }, done);
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
        .expect({
          id: 4,
          user_name: 'SanjeetUppal'
        }, done);
    });

    //createUser
    it('should send response to POST /users', (done) => {
    const password = 'thegivenbySanjeet';

    supertest(app)
      .post('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        user_name: 'Carolina',
        password: password,
        group_name: 'g42'
      })
      .expect( (user) => {
        delete user.body.created_at;
        delete user.body.updated_at;
      })
      .expect(200, {
        id: 15,
        user_name: 'Carolina',

      })
      .expect('Content-Type', /json/)
      .end((httpErr, _res) => {

        if (httpErr) {
          return done(httpErr);
        }

        knex('users')
          .where('id', 15)
          .first()
          .then((user) => {

            const hashed_password = user.hashed_password;

            delete user.hashed_password;
            delete user.created_at;
            delete user.updated_at;

            assert.deepEqual(user,
              {
                id: 15,
                user_name: 'Carolina'
              });

            // Synchronous password comparison
            const isMatch = bcrypt.compareSync(password, hashed_password);

            assert.isTrue(isMatch, "passwords don't match");
            done();
          })
          .catch((dbErr) => {
            done(dbErr);
          });
      });
  });
});

// userSignIn

// need to test for token
it('should send response to POST /users/login', (done) => {
const password = 'thegivenbySanjeet';

supertest(app)
  .post('/users')
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .send({
    user_name: 'Carolina',
    password: password,
    group_name: 'g42'
  })
  .expect( (user) => {
    delete user.body.created_at;
    delete user.body.updated_at;
  })
  .expect(200, {
    id: 15,
    user_name: 'Carolina',

  })
  .expect('Content-Type', /json/)
  .end((httpErr, _res) => {

    if (httpErr) {
      return done(httpErr);
    }

    knex('users')
      .where('id', 15)
      .first()
      .then((user) => {

        const hashed_password = user.hashed_password;

        delete user.hashed_password;
        delete user.created_at;
        delete user.updated_at;

        assert.deepEqual(user,
          {
            id: 15,
            user_name: 'Carolina'
          });

        // Synchronous password comparison
        const isMatch = bcrypt.compareSync(password, hashed_password);

        assert.isTrue(isMatch, "passwords don't match");
        done();
      })
      .catch((dbErr) => {
        done(dbErr);
      });
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
