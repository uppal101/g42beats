//DATABASE WE WILL NEED
const knex = require('../../knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');




/// MVP

function getGroupCompiledPlaylist(req, res){
    let groupId = req.swagger.params.gid.value;
    knex('groups')
    .join('group_members', 'groups.id', '=', 'group_members.group_id')
    .join('users', 'group_members.user_id', '=', 'users.id')
    .join('playlist', 'users.id', '=', 'playlist.user_id')
    .join('songs', 'playlist.song_id', '=', 'songs.id')
    .select()
    .where('groups.id', groupId)
    .then(providedGp => {
        console.log(providedGp);
      if(!providedGp){
        res.status(404).json('Not Found');
      } else {
        providedGp.map(function(obj) {
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
        });
      }
        res.status(200).json(providedGp);
    })
    .catch(err => {
      console.error(err);
    })
}

//need to make sure that this function returns an array of users that
//belong to a group.
//so far this returns an empty array.
function getUsersInGroup(req, res){
  let groupId = req.swagger.params.gid.value;

  knex('groups')
  .join('group_members', 'groups.id', '=', 'group_members.group_id')
  .join('users', 'group_members.user_id', '=', 'users.id')
  .select()
  .where('group_name', groupId)
  .then(usersInGroup => {
    // console.log(usersInGroup.id)
    console.log("this is where the groupsId should be");;
    res.status(200).json(usersInGroup);
  })
  .catch(err => {
    console.error(err);
  })
}

// function getSingleUserInGroup(req, res) {
//   let user = req.swagger.params.id.value;
//   //what is the reason for having the         gid and the user id.
//   //how is this supposed to be used in the route.
// }


module.exports ={
    getUsersInGroup: getUsersInGroup,
    getGroupCompiledPlaylist: getGroupCompiledPlaylist
    // getGroupCompiledPlaylist: getGroupCompiledPlaylist
}
