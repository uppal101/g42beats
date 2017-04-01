'use strict';

const knex = require('../../knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const formatSongs = require('./apicallFormat').formatSongs;
const rp = require('request-promise');
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
       res.status(404).json('Not Found');
     } else {
       delete user[0].hashed_password;
       delete user[0].created_at;
       delete user[0].updated_at;
     }
     res.status(200).json(user);
   })
   .catch(err => {
     console.error(err);
   });
}

// grab user playlist Ivonne
function getUserPlaylistByUserId(req, res){
  let formatedSongs;
  let userId = req.swagger.params.id.value;
  knex('users')
  .join('playlist','users.id', '=', 'playlist.user_id')
  .join('songs', 'playlist.song_id', '=', 'songs.id')
  .select()
  .where('user_id', userId)
    .then((usersongs) => {
      if(!usersongs){
        res.status(404).json('Not Found');
      } else {
         formatedSongs = usersongs.map(function(object){
          delete object.hashed_password;
          delete object.song_id;
          delete object.updated_at;
          delete object.created_at;
          delete object.hashed_password;
          delete object.user_id;
          delete object.id;
          delete object.user_name;
          return object;
        });
      }
      let urlReadySongs = formatSongs(formatedSongs)
      return formatedSongs;
    })
    .then(function(songObjects){
      let spotifyRequests = songObjects.map(function(songObj){
        //return the request-promise module api call
        return rp(`https://api.spotify.com/v1/search?q=${songObj.song_name}%20artist:${songObj.artist}&type=track`);
      })
      return Promise.all(spotifyRequests)
    })
    .then(function(spotifyResponses) {
       let parsedResponse = spotifyResponses.map(function(album) {
         if(album === undefined){
           return "preview url not found";
         }
          return JSON.parse(album).tracks.items;
          });
        let urlsArr = parsedResponse.map(function(ele){
          return ele[0].preview_url;
        })
        res.status(200);
        res.send(urlsArr);
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
      // console.log('ENOBDOOW<');
    })
    .catch((err) => {
      console.error(err);
    })
}

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
      let data = {
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
          delete songToAdd.created_at;
          delete songToAdd.updated_at;
            res.send(200, songToAdd);
        })
    }
  })
  .then((addedSong) => {
    console.log(addedSong);

  })
  .catch((err) => {
    console.error(err);
  })
}


//NOT WORKing
function deleteSong(req, res) {
  let userId = req.swagger.params.id.value;
  let songId =req.swagger.params.sid.value;
  let songToDelete;

    knex('playlist')
    .select()
    .where('user_id', userId)
    .where('song_id', songId)
    .first()
    .then((toBeDeleted) => {
      console.log(tobeDeleted);
      songToDelete = tobeDeleted;
    })
    .then(()=> {
      res.send(songToDelete);
    })
    .catch((err)=> {
      console.error(err);
    })
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
            addSong: addSong,
            deleteSong: deleteSong
            // getGroupCompiledPlaylist: getGroupCompiledPlaylist
        }
