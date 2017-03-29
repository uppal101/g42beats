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

//need to make sure that this function returns an array of users that
//belong to a group.
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

function getSingleUserInGroup(req, res) {
  let user = req.swagger.params.id.value;
  //what is the reason for having the         gid and the user id.
  //how is this supposed to be used in the route.
}

// module.exports.getUserPlaylistByGroupIdandUserId = function(args, res, next) {
//   /**
//    * Returns the all the songs associated with a user in a group that the signed in user is a part of. The id is associated with the user whose playlist we are seeing.
//    *
//    * gid Long Produces an a list of users in the given group.
//    * id Long Fetches the user associated with given user id.
//    * returns playlist
//    **/
//   var examples = {};
//   examples['application/json'] = {
//   "songs" : [ {
//     "artistname" : "aeiou",
//     "songid" : 123456789,
//     "userid" : 123456789,
//     "songname" : "aeiou"
//   } ]
// };
//   if (Object.keys(examples).length > 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//   } else {
//     res.end();
//   }
// }
//
// module.exports.getSingleUserInGroup = function(args, res, next) {
//   /**
//    * Gets an individual user that belongs to a certain group.
//    *
//    * gid Long Return a group associated with that id
//    * id Long Return an individual associated with that id
//    * returns user
//    **/
//   var examples = {};
//   examples['application/json'] = {
//   "password" : "aeiou",
//   "updated_at" : "aeiou",
//   "user_id" : 123,
//   "user_name" : "aeiou",
//   "created_at" : "aeiou"
// };
//   if (Object.keys(examples).length > 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//   } else {
//     res.end();
//   }
// }
//
// module.exports.getGroupCompiledPlaylist = function(args, res, next) {
//   knex('songs')
// }

module.exports ={
    getUsersInGroup: getUsersInGroup
    // getGroupCompiledPlaylist: getGroupCompiledPlaylist
}
