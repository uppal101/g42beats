// 'use strict';
// const knex = require('../../knex');
// const bookshelf = require('../../bookshelf');
// const bcrypt = require('bcrypt-as-promised');
// const jwt = require('jsonwebtoken');
//
// module.exports = {
//     postToken
// }


// function postToken(req, res) {
//     knex('clients')
//         .where('email', req.swagger.params.credentials.value.email)
//         .first()
//         .then((client) => {
//             return bcrypt.compare(
//                 req.swagger.params.credentials.value.password,
//                 client.hashed_password
//             );
//         })
//         .catch((err) => {
//             res.set('Content-Type', 'match/plain')
//             res.status(400).send('Bad email or password');
//         })
//         .then((result) => {
//             return knex('clients')
//                 .where('email', req.swagger.params.credentials.value.email)
//                 .first();
//         })
//         .then((client) => {
//             const claim = {
//                 userId: client.id
//             };
//
//             const token = jwt.sign(claim, process.env.JWT_KEY, {
//                 expiresIn: '7 days'
//             });
//
//             // res.cookie('token', token, {
//             //     httpOnly: true,
//             //     expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
//             //     secure: process.env.NODE_ENV === 'production'
//             // });
//             client.token = token;
//
//             delete client.first_name;
//             delete client.last_name;
//             delete client.hashed_password;
//             delete client.created_at;
//             delete client.updated_at;
//
//             res.set('Token', token);
//             res.set('Content-Type', 'application/json');
//             res.status(200).json(client);
//         })
//         .catch((err) => {
//             res.set('Content-Type', 'text/plain');
//             res.status(400).send('Bad email or password');
//         })
//         .catch(bcrypt.MISMATCH_ERROR, () => {
//             res.set('Content-Type', 'text/plain');
//             res.status(400).send('Bad email or password');
//         });
// }
