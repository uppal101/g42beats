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


//test for right association in group members table as well
describe('POST /users', () => {
  it('should create new user in database', (done) => {
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
describe('POST users/login', () => {
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
});
