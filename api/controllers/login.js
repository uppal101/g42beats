const knex = require("../../knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const {
  camelizeKeys,
  decamelizeKeys
} = require("humps");

//Gives a user a token upon successful sign in
function userSignIn(req, res, next) {
  let user;
  knex("users")
    .where("user_name", req.body.username)
    .then((result) => {
      user = result[0];
      if (!user) {
        res.set("Content-type", "plain/text");
        res.status(400).send("Bad username or password");
      } else {
        return bcrypt.compare(req.body.password, user.hashed_password);
      }
    })
    .then((signedIn) => {
      const claim = {
        userId: user.id
      };
      const token = jwt.sign(claim, process.env.JWT_KEY);
      user.token = token;

      delete user.hashed_password;

      const authorizedUser = {
        id: user.id,
        user_name: user.user_name,
        token: user.token
      };
      res.status(200).send(authorizedUser);
    })
    .catch((err) => {
      console.error(err);
    });
}

//Allows a user to sign up and creates their association in the group members table
function createUser(req, res, next) {
  let newUser;
  bcrypt.hash(req.body.password, 12)
    .then(hashed_password => knex("users")
        .insert({
          user_name: req.body.user_name,
          hashed_password
        }, "*"))
    .then((user) => {
      newUser = user[0];

      delete newUser.hashed_password;
      delete newUser.created_at;
      delete newUser.updated_at;
      //grab group id for group name entered during sign up to create group member association in next then block
      return knex("groups").where("group_name", req.body.group_name).select("id").first();
    })
    .then(group => knex("group_members").insert({
      group_id: group.id,
      user_id: newUser.id
    }, "*"))
    .then((groupMember) => {
      const newGroupMember = groupMember[0];

      delete newGroupMember.created_at;
      delete newGroupMember.updated_at;

      res.status(200).send({
        newUser,
        newGroupMember
      });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  createUser,
  userSignIn

};
