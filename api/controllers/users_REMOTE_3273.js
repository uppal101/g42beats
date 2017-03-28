'use strict';

//users
//songs
//playlist
//goups_users table
const knex = require('../../knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');

 function userById(req, res) {
   let paramId = req.swagger.params.id.value
  //  console.log(id);
   knex('users')
   .where('id', paramId)
   .then((user)=> {
     if(!user) {
       res.status(404).json('Not Found');
     } else {
       delete user[0].hashed_password;
       delete user[0].created_at;
       delete user[0].updated_at;
       console.log(user);

     }
     res.status(200).json(user);
   })
   .catch((err) => {
     console.error(err);
   })
  //  .finally(()=> {
   //
  //  })
}

function getUserPlaylistByUserId(req, res){
  let userId = req.swagger.params.id.value;
  knex('users')
  .join('playlist','users.id', '=', 'playlist.user_id')
  .join('songs', 'playlist.song_id', '=', 'songs.id')
  .select()
  .where('user_id', userId)
    .then((usersongs) => {
      console.log(usersongs);
      if(!usersongs){
      //   // console.log(userssongs);
        res.status(404).json('Not Found');
      } else {
        usersongs.map(function(object){
          delete object.hashed_password;
          delete object.song_id;
          delete object.updated_at;
          delete object.created_at;
          delete object.hashed_password;
          delete object.user_id;
        });
      }
      res.status(200).json(usersongs);
    })
    .catch((err) => {
      console.error(err);
    })




        module.exports.getGroupsPerUser = function(args, res, next) {
            /**
             * Gets all groups that belong to a certain user.
             *
             * id Long Returns a user associated with that id
             * returns List
             **/
            var examples = {};
            examples['application/json'] = [{
                "group_name": "aeiou"
            }];
            if (Object.keys(examples).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        }
        //BREAK WEEK : how to better organize relationship database to include user from
        // multiple groups. eg: instructor in multiple groups.

        module.exports.addSong = function(args, res, next) {
            /**
             * Add a song to authorized user's personal playlist.
             *
             * id Long Return an individual associated with that id
             * song Addsong Name of song with artist user wants to add
             * returns addsong
             **/
            var examples = {};
            examples['application/json'] = {
                "song": "aeiou",
                "userid": 123456789
            };
            if (Object.keys(examples).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        }

        module.exports.deleteSong = function(args, res, next) {
            /**
             * Delete a song to authorized user's personal playlist.
             *
             * id Long Return an individual associated with that id
             * sid Long Id associated with song selected
             * returns song
             **/
            var examples = {};
            examples['application/json'] = {
                "artistname": "aeiou",
                "songid": 123456789,
                "userid": 123456789,
                "songname": "aeiou"
            };
            if (Object.keys(examples).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        }




//
//         module.exports.getUserById = function(args, res, next) {
//             /**
//              * Returns a user name based on the specific id. The user must be authorized to access.
//              *
//              * id Long user name with given id to fetch
//              * returns user_name
//              **/
//             var examples = {};
//             examples['application/json'] = {
//                 "username": "aeiou"
//             };
//             if (Object.keys(examples).length > 0) {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//             } else {
//                 res.end();
//             }
//         }
//
//
//         //**********************************************************end of newUser in mifit
//         module.exports.getUserPlaylistByUserId = function(args, res, next) {
//             /**
//              * Returns the list of songs that belong to a user with the specified id.
//              *
//              * id Long Fetch playlist with songs associated with signed in user id.
//              * returns playlist
//              **/
//
//
//
//             var examples = {};
//             examples['application/json'] = {
//                 "songs": [{
//                     "artistname": "aeiou",
//                     "songid": 123456789,
//                     "userid": 123456789,
//                     "songname": "aeiou"
//                 }]
//             };
//             if (Object.keys(examples).length > 0) {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//             } else {
//                 res.end();
//             }
//         }
//
//         module.exports.getGroupsPerUser = function(args, res, next) {
//             /**
//              * Gets all groups that belong to a certain user.
//              *
//              * id Long Returns a user associated with that id
//              * returns List
//              **/
//             var examples = {};
//             examples['application/json'] = [{
//                 "group_name": "aeiou"
//             }];
//             if (Object.keys(examples).length > 0) {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//             } else {
//                 res.end();
//             }
//         }
//         //BREAK WEEK : how to better organize relationship database to include user from
//         // multiple groups. eg: instructor in multiple groups.
//
//         module.exports.addSong = function(args, res, next) {
//             /**
//              * Add a song to authorized user's personal playlist.
//              *
//              * id Long Return an individual associated with that id
//              * song Addsong Name of song with artist user wants to add
//              * returns addsong
//              **/
//             var examples = {};
//             examples['application/json'] = {
//                 "song": "aeiou",
//                 "userid": 123456789
//             };
//             if (Object.keys(examples).length > 0) {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//             } else {
//                 res.end();
//             }
//         }
//
//         module.exports.deleteSong = function(args, res, next) {
//             /**
//              * Delete a song to authorized user's personal playlist.
//              *
//              * id Long Return an individual associated with that id
//              * sid Long Id associated with song selected
//              * returns song
//              **/
//             var examples = {};
//             examples['application/json'] = {
//                 "artistname": "aeiou",
//                 "songid": 123456789,
//                 "userid": 123456789,
//                 "songname": "aeiou"
//             };
//             if (Object.keys(examples).length > 0) {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//             } else {
//                 res.end();
//             }
//         }
//
//         module.exports.userSignIn = function(args, res, next) {
//             /**
//              * User authentication via sign-in.
//              *
//              * user_name User_name Username of user trying to log-in
//              * returns user_name
//              **/
//             var examples = {};
//             examples['application/json'] = {
//                 "username": "aeiou"
//             };
//             if (Object.keys(examples).length > 0) {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//             } else {
//                 res.end();
//             }
//         }
//
//
//         exports.deleteSingleUserInGroup = function(args, res, next) {
//             /**
//              * Delete an individual user that belongs to a certain group.
//              *
//              * gid Long Return a group associated with that id
//              * id Long Return an individual associated with that id
//              * returns user
//              **/
//             var examples = {};
//             examples['application/json'] = {
//                 "password": "aeiou",
//                 "updated_at": "aeiou",
//                 "user_id": 123,
//                 "user_name": "aeiou",
//                 "created_at": "aeiou"
//             };
//             if (Object.keys(examples).length > 0) {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//             } else {
//                 res.end();
//             }
//         }



        module.exports ={
            userById: userById,
            getUserPlaylistByUserId: getUserPlaylistByUserId
            // getGroupCompiledPlaylist: getGroupCompiledPlaylist
        }
