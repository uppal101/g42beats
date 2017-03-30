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
    it('should respond with song information with the specified id', (done) => {
      supertest(app)
        .get('/users/1')
        .set('Accept', 'application/json')
        .expect(200, [{
          "id": 1,
          "user_name": 'AlexKrawiec'
        }], done);
    });

    it('should respond with 404 if song enters incorrect parameter', (done) => {
      supertest(app)
      .get('/users/hkhjk')
      .set('Accept', 'Application/json')
      .expect(404, JSON.stringify({code:404, message: "please enter valid information"}, done));
    });

    it('should respond with song information with the specified id', (done) => {
      supertest(app)
        .get('/users/4')
        .set('Accept', 'application/json')
        .expect([{
          id: 4,
          user_name: 'SanjeetUppal'
        }], done);
    });
});

describe('GET /users/{id}/playlist', () => {
    it("should respond with song's personal playlist that is associated with the specified id", (done) => {
      supertest(app)
        .get('/users/1/playlist')
        .set('Accept', 'application/json')
        .expect(200, [{
          song_name: 'Ode to Viceroy',
          artist: 'Mac DeMarco'
        },
        {
          song_name: 'Apocalypse Dreams',
          artist: 'Tame Impala'
        },
        {
          song_name: 'Which Way to Go',
          artist: 'Eddy Current Suppression Ring',
        },
        {
          song_name: 'Snowblind',
          artist: 'Black Sabbath'
        },
        {
          song_name: 'Mt Abraxas',
          artist: 'Uncle Acid And The Deadbeats',
        }
      ], done);
    });

    it('should respond with 404 if song enters incorrect parameter', (done) => {
      supertest(app)
      .get('/users/hkhjk')
      .set('Accept', 'Application/json')
      .expect(404, JSON.stringify({code:404, message: "please enter valid information"}, done));
    });
});

describe('GET /users/{id}/groups_members', () => {
    it('should get all groups that belong to a certain song', (done) => {
      supertest(app)
        .get('/users/5/group_members')
        .set('Accept', 'application/json')
        .expect(200, [{
          group_name: 'g42'
        }], done);
    });
    it('should respond with 404 if song enters incorrect parameter', (done) => {
      supertest(app)
      .get('/users/hkhjk')
      .set('Accept', 'Application/json')
      .expect(404, JSON.stringify({code:404, message: "please enter valid information"}, done));
    });
});
// create association in playlist
describe('POST /users/{id}/playlist/songs', () => {
    it('allows authorized song to add song to their personal playlist', (done) => {
      supertest(app)
        .post('/users/4/playlist/songs')
        .set('Accept', 'application/json')
        .send({
          user_name: 'SanjeetUppal',
          song_name: '21 Questions',
          artist: '50 Cent'
        })
        .expect((song) => {
          delete song.body.created_at;
          delete song.body.updated_at;
        })
        .expect(200,{
          id: 69,
          song_name: '21 Questions',
          artist: '50 Cent'
        })
        .expect('Content-Type', /json/)
        .end((httpErr, _res) => {

        if (httpErr) {
          return done(httpErr);
        }

        knex('songs')
          .where('id', 69)
          .first()
          .then((song) => {

            delete song.created_at;
            delete song.updated_at;

            assert.deepEqual(song,
              {
                id: 69,
                song_name: '21 Questions',
                artist: '50 Cent'
              });
            done();
          })
        });
  });
});
