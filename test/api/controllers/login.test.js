process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const supertest = require('supertest');
const knex = require('../../../knex');
const app = require('../../../app');
const bcrypt = require('bcrypt');

// `before` runs once before all tests in a describe
before((done) => {
  knex.migrate.rollback()
    .then(function() {
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
      .post('/api/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        user_name: 'Carolina',
        password: password,
        group_name: 'g42'
      })
      .expect(200, {
        newUser: {
          id: 15,
          user_name: 'Carolina',
        },
        newGroupMember: {
          id: 15,
          group_id: 1,
          user_id: 15
        }
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

            assert.deepEqual(user, {
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


let token = '';
describe('POST users/login', () => {
  it('should create and send a token', (done) => {
    supertest(app)
      .post('/api/users/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        user_name: 'SanjeetUppal',
        password: 'g42beats'
      })
      .end((err, res) => {
        expect(res.body.token)
        token = res.body.token;
      })
    done();
  })
});

// test('DELETE /favorites', (done) => {
//     agent
//       .delete('/favorites')
//       .set('Accept', 'application/json')
//       .set('Content-Type', 'application/json')
//       .send({ bookId: 1 })
//       .expect('Content-Type', /json/)
//       .expect((res) => {
//         delete res.body.createdAt;
//         delete res.body.updatedAt;
//       })
//       .expect(200, { bookId: 1, userId: 1 }, done);
//   });
