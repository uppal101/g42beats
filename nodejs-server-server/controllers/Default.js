'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.addSong = function addSong (req, res, next) {
  Default.addSong(req.swagger.params, res, next);
};

module.exports.createUser = function createUser (req, res, next) {
  Default.createUser(req.swagger.params, res, next);
};

module.exports.deleteSingleUserInGroup = function deleteSingleUserInGroup (req, res, next) {
  Default.deleteSingleUserInGroup(req.swagger.params, res, next);
};

module.exports.deleteSong = function deleteSong (req, res, next) {
  Default.deleteSong(req.swagger.params, res, next);
};

module.exports.getGroupCompiledPlaylist = function getGroupCompiledPlaylist (req, res, next) {
  Default.getGroupCompiledPlaylist(req.swagger.params, res, next);
};

module.exports.getGroupsPerUser = function getGroupsPerUser (req, res, next) {
  Default.getGroupsPerUser(req.swagger.params, res, next);
};

module.exports.getSingleUserInGroup = function getSingleUserInGroup (req, res, next) {
  Default.getSingleUserInGroup(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  Default.getUserById(req.swagger.params, res, next);
};

module.exports.getUserPlaylistByGroupIdandUserId = function getUserPlaylistByGroupIdandUserId (req, res, next) {
  Default.getUserPlaylistByGroupIdandUserId(req.swagger.params, res, next);
};

module.exports.getUserPlaylistByUserId = function getUserPlaylistByUserId (req, res, next) {
  Default.getUserPlaylistByUserId(req.swagger.params, res, next);
};

module.exports.getUsersInGroup = function getUsersInGroup (req, res, next) {
  Default.getUsersInGroup(req.swagger.params, res, next);
};

module.exports.userSignIn = function userSignIn (req, res, next) {
  Default.userSignIn(req.swagger.params, res, next);
};
