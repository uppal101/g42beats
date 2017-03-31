const assert = require('chai').assert;
const supertest = require('supertest');
const knex = require('../../../knex');
const app = require('../../../app');
const bcrypt = require('bcrypt');

process.env.NODE_ENV = 'test';

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

describe('GET groups/{gid}/group_members/playlist', () => {
    it('should get compiled playlist associated with group', (done) => {
      supertest(app)
        .get('groups/1/group_members/playlist')
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
          artist: 'Eddy Current Suppression Ring'
        },
        {
          song_name: 'Snowblind',
          artist: 'Black Sabbath'
        },
        {
          song_name: 'Mt Abraxas',
          artist: 'Uncle Acid And The Deadbeats',
        },
        {
          song_name: 'Stairway to Heaven',
          artist: 'Led Zeppelin',
        },
        {
          song_name: 'Maggot Brain',
          artist: 'Funkadelic'
        },
        {
          song_name: 'Powa',
          artist: 'tune-yards',
        },
        {
          song_name: 'Dollar Bill Blues',
          artist: 'Townes Van Zandt'
        },
        {
          song_name: 'Stranger Song',
          artist: 'Leonard Cohen'
        },
        {
          song_name: 'Cant Let You Go',
          artist: 'Fabolous'
        },
        {
          song_name: 'Dance For You',
          artist: 'Beyonce'
        },
        {
          song_name: 'Acquainted',
          artist: 'Weeknd'
        },
        {
          song_name: ' Falling in Love With You',
          artist: ' UB-40',
        },
        {
          song_name: 'Stay',
          artist: 'Kygo'
        },
        {
          song_name: 'A Finer Way to Die',
          artist: 'Griz'
        },
        {
          song_name: 'Make the Road by Walking',
          artist: 'Menahan Steet Band'
        },
        {
          song_name: 'This Must Be the Place',
          artist: 'Talking Heads'
        },
        {
          song_name: 'Daydreaming',
          artist: 'Radiohead'
        },
        {
          song_name: 'Instant Need',
          artist: 'FKJ'
        },
        {
          song_name: 'Mr. Brown',
          artist: 'Bob Marley'
        },
        {
          song_name: 'Letter from Yokosuka',
          artist: 'Nujabes'
        },
        {
          song_name: 'Make the Road by Walking',
          artist: 'Menahan Steet Band'
        },
        {
          song_name: 'Blow my High',
          artist: 'Kendrick Lamar'
        },
        {
          song_name: 'Someday',
          artist: 'The Strokes'
        },
        {
          song_name: 'Star of the Show',
          artist: 'Wiz Khalifa'
        },
        {
          song_name: 'Lose It',
          artist: 'Austra'
        },
        {
          song_name: 'Wild Horses',
          artist: 'Bishop Briggs'
        },
        {
          song_name: 'When Im Small',
          artist: 'Phantogram'
        },
        {
          song_name: 'The Shade',
          artist: 'Metric'
        },
        {
          song_name: 'Coffee',
          artist: 'Sylvan Esso'
        },
        {
          song_name: 'Return to Air',
          artist: 'Bonobo - Flashlight EP',
        },
        {
          song_name: 'Wolf - Skott',
          artist: 'Porcelain'
        },
        {
          song_name: 'Horizon',
          artist: 'Tyco'
        },
        {
          song_name: 'Rennen',
          artist: 'SOHN'
        },
        {
          song_name: 'Tame Impala',
          artist: 'The Less I Know the Better'
        },
        {
          song_name: 'Mac Dre',
          artist: ' Since 84'
        },
        {
          song_name: 'Lonely Island',
          artist: 'Im on A Boat'
        },
        {
          song_name: 'Under The Bridge',
          artist: 'Red Hot Chili Peppers'
        },
        {
          song_name: 'Take On Me',
          artist: 'Aha'
        },
        {
          song_name: 'Santeria',
          artist: 'Sublime'
        },
        {
          song_name: 'Ice Ice Baby ',
          artist: 'Vanilla Ice'
        },
        {
          song_name: 'Ms. Jackson',
          artist: 'Outkast'
        },
        {
          song_name: 'Slayer',
          artist: 'Reign In Blood'
        },
        {
          song_name: 'Cannibal Corpse',
          artist: 'Hammer Smashed Face',
        },
        {
          song_name: 'Whitesnake',
          artist: 'Still Of The Night'
        },
        {
          song_name: 'Pantera',
          artist: 'Far Beyond Driven'
        },
        {
          song_name: 'Sepultura',
          artist: 'Beneath The Remains'
        },
        {
          song_name: 'Sixteen Saltines',
          artist: 'Jack White'
        },
        {
          song_name: 'Classic',
          artist: 'The Knocks'
        },
        {
          song_name: 'Innerbloom',
          artist: 'Rufus Du Sol'
        },
        {
          song_name: 'Toxic Love Affair',
          artist: 'Kraak & Smaak'
        },
        {
          song_name: 'Hey Ma',
          artist: 'Camron'
        },
        {
          song_name: 'Run the World',
          artist: 'Beyonce'
        },
        {
          song_name: 'Vaccaciones',
          artist: 'Wisin'
        },
        {
          song_name: 'Deja que te Bese ',
          artist: 'Alejandro Sanz'
        },
        {
          song_name: 'Quiet Nights Of Quiet Stars',
          artist: 'Corcodavo'
        },
        {
          song_name: 'Hall of Fame',
          artist: 'The Script'
        },
        {
          song_name: 'In a Sentimental Mood',
          artist: 'Duke Ellington'
        },
        {
          song_name: 'Sicut Cervus',
          artist: 'The Schola Cantorum of St. John XXIII Parish'
        },
        {
          song_name: 'Barcelona',
          artist: 'George Ezra'
        },
        {
          song_name: 'Pulaski at Night',
          artist: 'Andrew Bird'
        },
        {
          song_name: 'Le nozze di Figaro Overture',
          artist: 'Weiner Philharmonic'
        },
        {
          song_name: 'Last Dance',
          artist: 'Rhye'
        },
        {
          song_name: 'Gangnum-Style',
          artist: 'PSY'
        },
        {
          song_name: 'Wonderwall',
          artist: 'Oasis'
        },
        {
          song_name: 'Beautiful Day',
          artist: 'U2'
        },
        {
          song_name: 'เพื่อนรัก',
          artist: 'Parkinson'
        }
      ], done);
    });
});
