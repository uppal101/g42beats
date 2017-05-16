'use strict';

var SwaggerExpress = require('swagger-express-mw');
const express = require('express');
var app = require('express');
const cors = require('cors');
const auth = require('./validations/verifytoken.js');



var config = {
  appRoot: __dirname // required config
};
 app.use(express.static(path.join('public')));
 app.use(cors());

 var config = {
   appRoot: __dirname
 };
 
// app.use('/groups', auth.verifyToken);
//
// app.use('/users', auth.verifyToken);

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;


  // app.listen(port);
  app.listen(port, () => {
   if (app.get('env') !== 'test') {
   console.log('Listening on port', port);
   }
 })

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});

module.exports = app; // for testing
