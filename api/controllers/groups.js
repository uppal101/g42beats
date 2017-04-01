
const knex = require('../../knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const rp = require('request-promise');
const formatSongs = require('./apicallFormat').formatSongs;
const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');

/// MVP

function getGroupCompiledPlaylist(req, res){
  let formatedSongs;
    let groupId = req.swagger.params.gid.value;
    knex('groups')
    .join('group_members', 'groups.id', '=', 'group_members.group_id')
    .join('users', 'group_members.user_id', '=', 'users.id')
    .join('playlist', 'users.id', '=', 'playlist.user_id')
    .join('songs', 'playlist.song_id', '=', 'songs.id')
    .select()
    .where('groups.id', groupId)
    .then(providedGp => {
      if(!providedGp){
        res.status(404).json('Not Found');
      } else {
      formatedSongs =  providedGp.map(function(obj) {
          delete obj.hashed_password;
          delete obj.song_id;
          delete obj.updated_at;
          delete obj.created_at;
          delete obj.hashed_password;
          delete obj.user_id;
          delete obj.id;
          delete obj.group_name;
          delete obj.group_id;
          delete obj.user_name;
          return obj;
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
         //include if album not found return "preview url not found" else return url.
          if(!album){
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

function getUsersInGroup(req, res){
  let groupId = req.swagger.params.gid.value;

  knex('groups')
  .join('group_members', 'groups.id', '=', 'group_members.group_id')
  .join('users', 'group_members.user_id', '=', 'users.id')
  .select()
  .where('group_name', groupId)
  .then(usersInGroup => {
    res.status(200).json(usersInGroup);
  })
  .catch(err => {
    console.error(err);
  })
}



module.exports ={
    getUsersInGroup: getUsersInGroup,
    getGroupCompiledPlaylist: getGroupCompiledPlaylist
    // getGroupCompiledPlaylist: getGroupCompiledPlaylist
}
