
const knex = require("../../knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const rp = require("request-promise");
const formatSongs = require("./apicallFormat").formatSongs;
const {
    camelizeKeys,
    decamelizeKeys
} = require("humps");

// gets all songs of users that belong in a group
function getGroupCompiledPlaylist(req, res) {
  let formatedSongs;
  const groupId = req.swagger.params.gid.value;
  knex("groups")
    .join("group_members", "groups.id", "=", "group_members.group_id")
    .join("users", "group_members.user_id", "=", "users.id")
    .join("playlist", "users.id", "=", "playlist.user_id")
    .join("songs", "playlist.song_id", "=", "songs.id")
    .select()
    .where("groups.id", groupId)
    .then((providedGp) => {
      if (!providedGp) {
        res.status(404).json("Not Found");
      } else {
        formatedSongs = providedGp.map((obj) => {
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
      const urlReadySongs = formatSongs(formatedSongs);
      return formatedSongs;
    })
    .then((songObjects) => {
      const spotifyRequests = songObjects.map(songObj =>
        // return the request-promise module api call
         rp(`https://api.spotify.com/v1/search?q=${songObj.song_name}%20artist:${songObj.artist}&type=track`));
      return Promise.all(spotifyRequests);
    })
    .then((spotifyResponses) => {
      const parsedResponse = spotifyResponses.map((album) => {
         // include if album not found return "preview url not found" else return url.
        if (!album) {
          return "preview url not found";
        }
        return JSON.parse(album).tracks.items;
      });
      const urlsArr = parsedResponse.map(ele => ele[0].preview_url);
      res.status(200);
      res.send(urlsArr);
    })
    .catch((err) => {
      console.error(err);
    });
}

//grabs all usernames that belong to a group
function getUsersInGroup(req, res) {
  const groupId = req.swagger.params.gid.value;

  knex("groups")
  .join("group_members", "groups.id", "=", "group_members.group_id")
  .join("users", "group_members.user_id", "=", "users.id")
  .select()
  .where("group_name", groupId)
  .then((usersInGroup) => {
    res.status(200).json(usersInGroup);
  })
  .catch((err) => {
    console.error(err);
  });
}


module.exports = {
  getUsersInGroup,
  getGroupCompiledPlaylist
    // getGroupCompiledPlaylist: getGroupCompiledPlaylist
};
