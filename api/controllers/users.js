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
console.log("I'm trying to create the user");

  const userId = req.params.id



}

//grab username where id === req.params.id
function createUser(req, res) {
    console.log('add user');

    bcrypt.hash(req.body.password, 12)
        .then((hashed_password) => {
            return knex('users')
                .then((user) => {
                    return knex('users')
                        .insert({
                            user_name: req.body.username,
                            hashed_password: hashed_password
                        }, '*');
                })
                .then((user) => {
                    const newUser = result[0];
                    const claim = {
                        userId: newUser.id,
                        // permissions: newUser.permissions
                        //NOTE: this will be useful for the superuser.
                    };
                    const token = jwt.sign(claim, process.env.JWT_KEY);
                    res.cookie('token', token, {
                        httpOnly: true
                    });
                })
                .then((users) => {
                    const user = users[0];
                    delete user.hashed_password;
                    res.send(camelizeKeys(user));
                })
                .catch((err) => {
                    next(err);
                });
        });
};
////


module.export ={
    createUser : createUser,
    
}







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


        module.exports.createUser = function(args, res, next) {
            /**
             * Creates a new user in the users list.
             *
             * newUser Adduser Adds new user to database.
             * returns adduser
             **/
            var examples = {};
            examples['application/json'] = {
                "password": "aeiou",
                "group_name": "aeiou",
                "user_name": "aeiou"
            };
            if (Object.keys(examples).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        }


        /////createnewUserfrom mifit app

        //make sure to add token functionality and send token to user
        function addNewUser(req, res) {
            console.log('add user');
            // console.log(req.swagger.params.user.value.email);
            // const newUser = req.swagger.newUser;

            bcrypt.hash(req.body.password, 12)
                .then((hashed_password) => {
                    return Users.forge({
                            first_name: req.body.first_name,
                            hashed_password: hashed_password,
                        })
                        .save()
                        .then((user) => {
                            let u = JSON.parse(JSON.stringify(user));
                            delete u.hashed_password;
                            // console.log(u);
                            res.setHeader('Content-Type', 'application/json');
                            res.end(u);

                        })
                        .catch(function(err) {
                            res.setHeader("Content-Type", "application/json")
                            res.status(400)

                            res.end(JSON.stringify({
                                code: 400,
                                message: "foo"
                            }));
                        });
                });
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

        module.exports.userSignIn = function(args, res, next) {
            /**
             * User authentication via sign-in.
             *
             * user_name User_name Username of user trying to log-in
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
