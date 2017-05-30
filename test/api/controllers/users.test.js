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


describe('GET users/{id}', () => {
    it('should respond with user information with the specified id', (done) => {
      supertest(app)
        .get('/api/users/1')
        .set('Accept', 'application/json')
        .expect(200, [{
          id: 1,
          user_name: 'AlexKrawiec'
        }], done);
    });

    it('should respond with 404 if user enters incorrect parameter', (done) => {
      supertest(app)
      .get('/api/users/hkhjk')
      .set('Accept', 'Application/json')
      .expect(404, JSON.stringify({code:404, message: "please enter valid information"}, done));
    });

    it('should respond with user information with the specified id', (done) => {
      supertest(app)
        .get('/api/users/4')
        .set('Accept', 'application/json')
        .expect([{
          id: 4,
          user_name: 'SanjeetUppal'
        }], done);
    });
});

describe('GET /users/{id}/playlist', () => {
    it("should respond with user's personal playlist that is associated with the specified id", (done) => {
      supertest(app)
        .get('/api/users/1/playlist')
        .set('Accept', 'application/json')
        .expect(200, [ "https://p.scdn.co/mp3-preview/6ece6ef8b0c879c99b97901c7897f32b0dd54fbd?cid=null",
        "https://p.scdn.co/mp3-preview/177e9f1ac16201637073d95584df1883efe9d18d?cid=null",
        "https://p.scdn.co/mp3-preview/fc933abfb501eb58d5efa54d0ce86f3746dc7ffc?cid=null",
        "https://p.scdn.co/mp3-preview/8edfb217d198d54899ee5f8cedc743b1547dc20e?cid=null",
        "https://p.scdn.co/mp3-preview/4f92a6f5c14c970cb1dad3706391edf5c436eadf?cid=null"
      ], done);
    });

    it('should respond with 404 if song enters incorrect parameter', (done) => {
      supertest(app)
      .get('/api/users/hkhjk')
      .set('Accept', 'Application/json')
      .expect(404, JSON.stringify({code:404, message: "please enter valid information"}, done));
    });
});

describe('GET /users/{id}/groups_members', () => {
    it('should get all groups that belong to a certain user', (done) => {
      supertest(app)
        .get('/api/users/5/groups_members')
        .set('Accept', 'application/json')
        .expect(200, [{
          group_name: 'g42'
        }], done);
    });
    it('should respond with 404 if user enters incorrect parameter', (done) => {
      supertest(app)
      .get('/api/users/hkhjk/groups_members')
      .set('Accept', 'Application/json')
      .expect(404, JSON.stringify({code:404, message: "please enter valid information"}, done));
    });
});


describe('POST /users/{id}/playlist/songs', () => {
    it('allows authorized user to add song to their personal playlist', (done) => {
      supertest(app)
        .post('/api/users/4/playlist/songs')
        .set('Accept', 'application/json')
        .send({
          song: '21 Questions',
          artist: '50 Cent'
        })
        .expect((song) => {
          delete song.body.created_at;
          delete song.body.updated_at;
        })
        .expect(200, {
          song: {
            id: 69,
            song_name: '21 Questions',
            artist: '50 Cent'
          },
          playlist: {
            id: 69,
            user_id: 4,
            song_id: 69
          }
        },done)
        .expect('Content-Type', /json/)
    });
});


describe('DELETE /users/{id}/playlist/songs/{sid}', () => {
    it('should allow authorized user to delete a song off their personal playlist', (done) => {
      supertest(app)
        .delete('/api/users/4/playlist/songs/14')
        .set('Accept', 'application/json')
        .expect(200, {
          song: {
            song_name: ' Falling in Love With You',
            artist: ' UB-40'
          },
          playlist: {
            user_id: 4,
            song_id: 14
          }
        }, done);
    });
});
