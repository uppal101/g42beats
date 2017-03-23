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

// `beforeEach` is run before each test in a describe
beforeEach((done) => {
    knex.seed.run()
        .then(() => {
            return Promise.all([
                knex('users').insert(
                  {
                    id: 1,
                    user_name: 'Hamid',
                    hashed_password: '$2a$12$Zkvv0auYrrIpd3uMx0IaieYN1rZwyYGmvKMUqZHuefeh7uwY5VAlm'
                }),
                knex('users').insert(
                  {
                    id: 2,
                    user_name: 'Josh',
                    hashed_password: '$2a$12$Zkvv0auYrrIpd3uMx0IaieYN1rZwyYGmvKMUqZHuefeh7uwY5VAlm'
                  })
            ])
        })
        .then(function() {
          return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
        })
        .then(function() {
            return Promise.all([
              knex('songs').insert(
                { id: 1,
                  song_name: 'Shape Of You',
                  artist: 'Ed Sheeran'
                },
                { id: 2,
                  song_name: 'Rockabye',
                  artist: 'Clean Candid'
                },
                { id: 3,
                  song_name: 'Papers',
                  artist: 'Usher'
                },
                { id: 4,
                  song_name: 'Mercy',
                  artist: 'Shawn Mendes'
                }
              )
            ])
        })
        .then(function() {
          return knex.raw(`SELECT setval('songs_id_seq', (SELECT MAX(id) FROM songs))`)
        })
        .then(function() {
          return Promise.all([
            knex('group_members').insert(
                { id: 1,
                  group_id: 1,
                  user_id: 1
                },
                { id: 2,
                  group_id: 1,
                  user_id: 2
                }
              )
          ])
        })
        .then(function() {
          return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
        })
        .then(function(){
          return Promise.all([
            knex('playlist').insert(
              { id: 1
                user_id: 2,
                song_id: 1
              },
              { id: 2
                user_id: 2,
                song_id: 2
              },
              { id: 3
                user_id: 1,
                song_id: 3
              },
              { id: 4
                user_id: 1,
                song_id: 4
              }
            )
          ])
        })
        .then(function() {
          return knex.raw(`SELECT setval('playlist_id_seq', (SELECT MAX(id) FROM playlist))`)
        })
        .then(()=> done());
});

afterEach((done)=> {
  knex.migrate.rollback()
  .then(()=> {
    done(err)
  });
});


describe('GET /users/:id', function() {

    it('should welcome the authorized user', function(done) {
        request(app)
            .get('/:id')
            .expect(200)
            .expect(`Welcome, ${username}`, done)
    })
})

// it('should respond with application/json', function(done) {
//   request(app)
//     .get('/users page')
//     .expect('Content-Type', /application\json/, done)
// })

// it('should respond with a paragraph containing :word', function(done) {
//   request(app)
//     .get('/word')
//     .expect('<p>word</p>')
//
//   request(app)
//     .get('/anotherword')
//     .expect('<p>anotherword</p>', done)
// })
// });
// });
