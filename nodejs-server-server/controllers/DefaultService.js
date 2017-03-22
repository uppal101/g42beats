'use strict';

exports.addSong = function(args, res, next) {
  /**
   * Add a song to authorized user's personal playlist.
   *
   * id Long Return an individual associated with that id
   * song Addsong Name of song with artist user wants to add
   * returns addsong
   **/
  var examples = {};
  examples['application/json'] = {
  "song" : "aeiou",
  "userid" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.createUser = function(args, res, next) {
  /**
   * Creates a new user in the users list.
   *
   * newUser Adduser Adds new user to database.
   * returns adduser
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "group_name" : "aeiou",
  "user_name" : "aeiou"
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

exports.deleteSong = function(args, res, next) {
  /**
   * Delete a song to authorized user's personal playlist.
   *
   * id Long Return an individual associated with that id
   * sid Long Id associated with song selected
   * returns song
   **/
  var examples = {};
  examples['application/json'] = {
  "artistname" : "aeiou",
  "songid" : 123456789,
  "userid" : 123456789,
  "songname" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getGroupCompiledPlaylist = function(args, res, next) {
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

exports.getGroupsPerUser = function(args, res, next) {
  /**
   * Gets all groups that belong to a certain user.
   *
   * id Long Returns a user associated with that id
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "group_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getSingleUserInGroup = function(args, res, next) {
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

exports.getUserById = function(args, res, next) {
  /**
   * Returns a user name based on the specific id. The user must be authorized to access.
   *
   * id Long user name with given id to fetch
   * returns user_name
   **/
  var examples = {};
  examples['application/json'] = {
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getUserPlaylistByGroupIdandUserId = function(args, res, next) {
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

exports.getUserPlaylistByUserId = function(args, res, next) {
  /**
   * Returns the list of songs that belong to a user with the specified id.
   *
   * id Long Fetch playlist with songs associated with signed in user id.
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

exports.getUsersInGroup = function(args, res, next) {
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

exports.userSignIn = function(args, res, next) {
  /**
   * User authentication via sign-in.
   *
   * user_name User_name Username of user trying to log-in
   * returns user_name
   **/
  var examples = {};
  examples['application/json'] = {
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

