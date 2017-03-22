const request = require('supertest');
const app = require('../../../app');
const knex = require('../../../knex');

const expect = require('mocha').expect;

// describe('GET /users/:id', function() {
//
//   it('should return a user based on the specific id', function(done){
//     request(app)
//     .get('/users/id')
//
//
//   })
//
// } )


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
process.env.NODE_ENV = 'test';
