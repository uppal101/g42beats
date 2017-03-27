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

function userbyId() {
console.log("I'm trying to grab the user byID number the user");

  const userId = req.params.id;

  //



}

//grab username where id === req.params.id
function createUser(req, res, next) {
  let userId
    bcrypt.hash(req.body.password, 12)
        .then((hashed_password) => {
                    return knex('users')
                        .insert({
                            user_name: req.body.user_name,
                            hashed_password: hashed_password,
                            // group_name: req.body.groupname
                        }, '*');
        })
        .then((user) => {
            let newUser = user[0];
            const claim = {
                userId: newUser.id,
                // permissions: newUser.permissions
                //NOTE: this will be useful for the superuser.
            }

            const token = jwt.sign(claim, process.env.JWT_KEY);
            newUser.token = token
            delete newUser.hashed_password;
            res.status(200).send(camelizeKeys(newUser));
            return newUser;
        })
        .then((checkingGroup) => {
           const id = knex('groups').where('group_name', req.body.groupname).select('id');
           return id;
        })
        .then((insertingGroupMember) => {
          console.log(checkingGroup);
          knex('group_members').insert({group_id: insertingGroupMember, user_id: userId})
        })
        .catch((err) => {
            next(err);
        });
      }

////




        module.exports.getUserById = function(args, res, next) {
            /**
             * Returns a user name based on the specific id. The user must be authorized to access.
             *
             * id Long user name with given id to fetch
             * returns user_name
             **/
            var examples = {};
            examples['application/json'] = {
                "username": "aeiou"
            };
            if (Object.keys(examples).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        }



        //**********************************************************end of newUser in mifit
        module.exports.getUserPlaylistByUserId = function(args, res, next) {
            /**
             * Returns the list of songs that belong to a user with the specified id.
             *
             * id Long Fetch playlist with songs associated with signed in user id.
             * returns playlist
             **/



            var examples = {};
            examples['application/json'] = {
                "songs": [{
                    "artistname": "aeiou",
                    "songid": 123456789,
                    "userid": 123456789,
                    "songname": "aeiou"
                }]
            };
            if (Object.keys(examples).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        }

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

        module.exports.userSignIn = function(req, res, next) {
        //   console.log(req);
        //   let tokenID
        //   knex('users')
        //   .where('user_name', req.body.user_name)
        //   .then(result => {
        //     const user = result[0];
        //     if (!user) {
        //         res.set('Content-type', 'plain/text');
        //         res.status(400).send('Bad username or password');
        //     } else {
        //       const user = result[0];
        //       return bcrypt.compare(req.body.password, user.hashed_password);
        //     }
        //   })
        //   .then((loggedInUser) => {
        //     console.log("hello");
        //     jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, payload) => {
        //       if (err) {
        //         res.set("Content-Type", "text/plain");
        //         return res.status(401).send('Unauthorized');
        //       } else {
        //       tokenID = claim.userId;
        //        next();
        //      }
        //   })
        //   .then((authOK) => {
        //     const authorizedUser = {
        //       id: user.id,
        //       user_name: user.user_name
        //     }
        //     res.status(200).send(camelizeKeys(authorizedUser));
        //   })
        //   .catch((err) => {
        //     console.error(err)
        //   })
        // })
      }


        exports.deleteSingleUserInGroup = function(args, res, next) {
            /**
             * Delete an individual user that belongs to a certain group.
             *
             * gid Long Return a group associated with that id
             * id Long Return an individual associated with that id
             * returns user
             **/
            var examples = {};
            examples['application/json'] = {
                "password": "aeiou",
                "updated_at": "aeiou",
                "user_id": 123,
                "user_name": "aeiou",
                "created_at": "aeiou"
            };
            if (Object.keys(examples).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        }


        module.exports ={
            createUser : createUser,


        }
