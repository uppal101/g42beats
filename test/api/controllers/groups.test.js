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
        .get('/api/groups/1/group_members/playlist')
        .set('Accept', 'application/json')
        .expect(200, [ "https://p.scdn.co/mp3-preview/6ece6ef8b0c879c99b97901c7897f32b0dd54fbd?cid=null",
         "https://p.scdn.co/mp3-preview/177e9f1ac16201637073d95584df1883efe9d18d?cid=null",
         "https://p.scdn.co/mp3-preview/fc933abfb501eb58d5efa54d0ce86f3746dc7ffc?cid=null",
        "https://p.scdn.co/mp3-preview/8edfb217d198d54899ee5f8cedc743b1547dc20e?cid=null",
        "https://p.scdn.co/mp3-preview/4f92a6f5c14c970cb1dad3706391edf5c436eadf?cid=null",
        "https://p.scdn.co/mp3-preview/8226164717312bc411f8635580562d67e191a754?cid=null",
        "https://p.scdn.co/mp3-preview/783a56a664ac7062a8148bcd273ae33ff4ac060d?cid=null",
        "https://p.scdn.co/mp3-preview/b11fc4f1e72171c243511238a81df814a141ebab?cid=null",
        "https://p.scdn.co/mp3-preview/5e89358725e4ec0308fe0dba93acd6ad57b36056?cid=null",
        "https://p.scdn.co/mp3-preview/94cef3092bd7a59ebcb0a8acb1193a96753e0f92?cid=null",
        "https://p.scdn.co/mp3-preview/246880641a5104b9a900f71bc2b2ab9ac523129b?cid=null",
        "https://p.scdn.co/mp3-preview/69d99b19f6557ff8cf42b354316ae883d7900347?cid=null",
        "https://p.scdn.co/mp3-preview/b1fd8a813f603c8be43e05f023801036672d6d41?cid=null",
        "preview url not found",
        "https://p.scdn.co/mp3-preview/a4efa1b584efd2077c680cc92b62553fdeee976d?cid=null",
        "preview url not found",
        "preview url not found",
        "https://p.scdn.co/mp3-preview/b432e5ba629ea90530dcbe98b92cdced60c404f6?cid=null",
        "https://p.scdn.co/mp3-preview/fbf970f6ee1e7d849de08017d3688406107c751a?cid=null",
        "https://p.scdn.co/mp3-preview/afea47bb56d67c325c86dc14fc9c4095ad6aed5d?cid=null",
        "https://p.scdn.co/mp3-preview/99851e2c05c4c7cc10bcb8cee1f670463e45cdfe?cid=null",
        "preview url not found",
        "preview url not found",
        "https://p.scdn.co/mp3-preview/712a269bd8e02fffff415710c7a462684bdf2881?cid=null",
        "https://p.scdn.co/mp3-preview/320766cb9483ef72966ebaa0369034246a100b63?cid=null",
        "https://p.scdn.co/mp3-preview/26095f5c9ef40000289eaf3a951569e7deaaf708?cid=null",
        "https://p.scdn.co/mp3-preview/569d58b1766589a280183218981a9539bd1583bd?cid=null",
        "https://p.scdn.co/mp3-preview/a9171251b97d5ad0accdb104a234dcbd84df3cdc?cid=null",
        "https://p.scdn.co/mp3-preview/c5047319bdbee4912f9dd602af955c285205835a?cid=null",
        "https://p.scdn.co/mp3-preview/a79451427b7f90720a717153886210ce22aa5075?cid=null",
        "https://p.scdn.co/mp3-preview/946c06b8f73695ac28e8ba6bdce8200573208c65?cid=null",
        "https://p.scdn.co/mp3-preview/3f413c1849a7aea68a324d0982b5661fe366f758?cid=null",
        "preview url not found",
        "preview url not found",
         "https://p.scdn.co/mp3-preview/e5865b21276af54c826748af4111744122e45bad?cid=null",
        "preview url not found",
        "preview url not found",
        "preview url not found",
        "https://p.scdn.co/mp3-preview/90e41778392f27b6f7dd82db4c90916b3727aa6a?cid=null",
        "https://p.scdn.co/mp3-preview/0f980d0fac59f77123d0272b78bce97f1374d9e9?cid=null",
        "https://p.scdn.co/mp3-preview/be90ea559554e7aa15a60ddf9ccf020047a0e7f1?cid=null",
        "https://p.scdn.co/mp3-preview/3297471656482bda146255299b759eafc3b37ca9?cid=null",
        "https://p.scdn.co/mp3-preview/36ade9974fa85079e996dd9aca93af62c4e88711?cid=null",
        "preview url not found",
        "preview url not found",
        "preview url not found",
        "preview url not found",
        "preview url not found",
        "https://p.scdn.co/mp3-preview/4ef9d2a2962d5060c6d8bd7542229a6f8004755c?cid=null",
        "https://p.scdn.co/mp3-preview/5e1b7a006811af736aef47e8fe15484c88f124a3?cid=null",
        "https://p.scdn.co/mp3-preview/99732f8c33242f6b8d45e87ff76b804fce348e73?cid=null",
        "https://p.scdn.co/mp3-preview/0a9daa053e2f30dfb681adb57e39c7c3e6fd57e8?cid=null",
        "https://p.scdn.co/mp3-preview/1c98a07d5749dc2d08af38ccc187200362725371?cid=null",
        "https://p.scdn.co/mp3-preview/c5e90d8d93467fc4aeda29c2cbefaa494081232a?cid=null",
        "preview url not found",
        "https://p.scdn.co/mp3-preview/bbe7383a24d4c09cf7a587c969aa7494062982b9?cid=null",
        "preview url not found",
        "https://p.scdn.co/mp3-preview/87ee8d6680a271e44e1130dbdf9901c4ccd47002?cid=null",
        "https://p.scdn.co/mp3-preview/0fc026a5f10f8a5cad99a9a3e2048d6bcbb5d6b2?cid=null",
        "https://p.scdn.co/mp3-preview/8fc45290a9ef265ec54478dfc47ba9b87618f1fe?cid=null",
        "https://p.scdn.co/mp3-preview/16dc4df229f1584a961cfb5734eb1d330a1e4697?cid=null",
        "https://p.scdn.co/mp3-preview/9790adad316ad5866c91f42065e6da51abe8c990?cid=null",
        "https://p.scdn.co/mp3-preview/f2be12897a2f783f471b932a29192ab7997ab515?cid=null",
         "https://p.scdn.co/mp3-preview/62a435847d2e365f0567753b15ce01643cf912d9?cid=null",
        "preview url not found",
        "https://p.scdn.co/mp3-preview/658627c1c2fb5f9a89ce556ead028b7cebd297c6?cid=null",
        "https://p.scdn.co/mp3-preview/eb915a99b9a21b82071d3e7f3a0b9cd02105b215?cid=null",
        "https://p.scdn.co/mp3-preview/88a0db2aa409cd7299e0168228ed0836f0479ce7?cid=null"
      ], done);
    });
    it('should respond with 404 if user enters incorrect parameter', (done) => {
      supertest(app)
      .get('groups/fakbgb/group_members/playlist')
      .set('Accept', 'Application/json')
      .expect(404, JSON.stringify({code:404, message: "please enter valid information"}, done));
    });
});
