'use strict';

const knex = require('../../knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');
//Ivonne
 function userById(req, res) {
   let paramId = req.swagger.params.id.value;
   knex('users')
   .where('id', paramId)
   .then(user=> {
     if(!user) {
       console.log("this is the user i see first", user);
       res.status(404).json('Not Found');
     } else {
       delete user[0].hashed_password;
       delete user[0].created_at;
       delete user[0].updated_at;
       delete user[0].id;
       delete user[0].user_name;
       console.log(user);
     }
     res.status(200).json(user);
   })
   .catch(err => {
     console.error(err);
   });
}

// grab user playlist Ivonne
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
        res.status(404).json('Not Found');
      } else {
        usersongs.map(function(object){
          delete object.hashed_password;
          delete object.song_id;
          delete object.updated_at;
          delete object.created_at;
          delete object.hashed_password;
          delete object.user_id;
          delete object.id;
          delete object.user_name;
        });
      }
      res.status(200).json(usersongs);
    })
    .catch((err) => {
      console.error(err);
    })
}

// function getUserPlaylistByGroupIdandUserId(req, res) {
//   let gid = req.swagger.params.id.value;
//   knex('oups')
// }

function getGroupsPerUser(req, res){
  let userId = req.swagger.params.id.value;
  knex('groups')
  .join('group_members','groups.id', '=', 'group_members.group_id')
  .select()
  .where('user_id', userId)
    .then((userGroups) => {
      if(!userGroups){
        res.status(404).json('Not Found');
      } else {
        delete userGroups[0].created_at;
        delete userGroups[0].updated_at;
        delete userGroups[0].group_id;
        delete userGroups[0].user_id;
        delete userGroups[0].id;
      }
      res.status(200).json(userGroups);
    })
    .catch((err) => {
      console.error(err);
    })
}
//Partly working. need to also insert the songId into the dt and playlist.
function addSong(req, res) {
  let userName = req.body.user_name;
  let songName = req.body.song;
  let artistName = req.body.artist;
  let userId = req.swagger.params.id.value;

  knex('songs')
  .select()
  .where('song_name', songName)
  .where('artist', artistName)
  .first()
  .then((song) => {
    if(song){
      let data =    {
         song_id: song.id,
         user_id: userId
        }
      knex('playlist')
     .insert(data,'*')
      .then(()=> {
        res.send(200, data);
      })
    } else {
      knex('songs')
      .insert({
        song_name: songName,
        artist: artistName
      }, '*')
      .then((songToAdd) => {
        knex('playlist')
        .insert({
          user_id: userId,
          song_id: songToAdd[0].id
        }, '*')
        return songToAdd;
      })
        .then((songToAdd)=> {
            res.send(200, songToAdd);
        })
    }
  })
  .then((addedSong) => {
    console.log(addedSong);
    // res.send(addedSong);
  })
  .catch((err) => {
    console.error(err);
  })
}



function deleteSong(){

}




//example of Delete User Try this for my user.

// function deleteUser(req, res) {
//   let knex = require('../../knex.js');
//   let paramId = req.swagger.params.user_id.value;
//   if (req.body.userId !== paramId){
//     res.status(401).json('Unauthorized: The ID you are attempting to delete belongs to another user');
//   } else {
//     knex('users')
//     .del()
//     .where('id', paramId)
//     .then((user) => {
//       res.send(user[0]);
//     })
//     .catch((err) => {
//       console.error(err);
//     })
//     .finally(() => {
//       // knex.destroy();
//     });
//   };
// }

        module.exports ={
            userById: userById,
            getUserPlaylistByUserId: getUserPlaylistByUserId,
            getGroupsPerUser: getGroupsPerUser,
            addSong: addSong
            // getGroupCompiledPlaylist: getGroupCompiledPlaylist
        }
