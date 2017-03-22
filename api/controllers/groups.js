
module.exports.getUserPlaylistByGroupIdandUserId = function(args, res, next) {
  /**
   * Returns the all the songs associated with a user in a group that the signed in user is a part of. The id is associated with the user whose playlist we are seeing.
   *
   * gid Long Produces an a list of users in the given group.
   * id Long Fetches the user associated with given user id.
   * returns playlist
   **/
  var examples = {};
  examples['application/json'] = {
  "songs" : [ {
    "artistname" : "aeiou",
    "songid" : 123456789,
    "userid" : 123456789,
    "songname" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}
module.exports.getUsersInGroup = function(args, res, next) {
  /**
   * Gets all users that belong to a certain group.
   *
   * gid Long Return a group associated with that id
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "password" : "aeiou",
  "updated_at" : "aeiou",
  "user_id" : 123,
  "user_name" : "aeiou",
  "created_at" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

module.exports.getSingleUserInGroup = function(args, res, next) {
  /**
   * Gets an individual user that belongs to a certain group.
   *
   * gid Long Return a group associated with that id
   * id Long Return an individual associated with that id
   * returns user
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "updated_at" : "aeiou",
  "user_id" : 123,
  "user_name" : "aeiou",
  "created_at" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

module.exports.getGroupCompiledPlaylist = function(args, res, next) {
  /**
   * Gets compiled playlist for group selected.
   *
   * gid Long Return a group associated with that id
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "artistname" : "aeiou",
  "songid" : 123456789,
  "userid" : 123456789,
  "songname" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}
