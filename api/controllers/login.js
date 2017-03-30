const knex = require('../../knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');

function userSignIn (req, res, next) {
        //   console.log(req);
  knex('users')
  .where('user_name', req.body.user_name)
  .then(result => {
    const user = result[0];
    if (!user) {
        res.set('Content-type', 'plain/text');
        res.status(400).send('Bad username or password');
    } else {
      const user = result[0];
      return bcrypt.compare(req.body.password, user.hashed_password);
    }
  })
  .then((user) => {
      let newUser = user[0];
      const claim = {
          userId: newUser.id,
      }
      const token = jwt.sign(claim, process.env.JWT_KEY);
      newUser.token = token

      delete newUser.hashed_password;

      const authorizedUser = {
        id: newUser.id,
        user_name: newUser.user_name,
        token: newUser.token
      }
      res.status(200).send(camelizeKeys(authorizedUser));
  })
  .catch((err) => {
    console.error(err)
  })
}

function createUser(req, res, next) {
  let userId
    bcrypt.hash(req.body.password, 12)
        .then((hashed_password) => {
            return knex('users')
                .insert({
                    user_name: req.body.user_name,
                    hashed_password: hashed_password,
                    id: userId
                }, '*');
        })
        .then((user) => {
            let newUser = user[0];

            delete newUser.hashed_password;
            delete newUser.created_at;
            delete newUser.updated_at;
            res.status(200).send(newUser);
            return newUser;
        })
        .then((checkingGroup) => {
           const id = knex('groups').where('group_name', req.body.groupname).select('id');
           return id;
        })
        .then((insertingGroupMember) => {
          console.log(checkingGroup);
          knex('group_members').insert({group_id: insertingGroupMember, user_id: userId}, "*")
        })
        .catch((err) => {
            next(err);
        });
}

module.exports = {
    createUser : createUser,
    userSignIn : userSignIn

}
