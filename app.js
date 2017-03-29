'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
const auth = require('./validations/verifytoken.js');




var config = {
  appRoot: __dirname // required config
};

// app.use('/api/controllers/groups', auth.verify);
//
// app.use('/api/controllers/users', auth.verify);

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
