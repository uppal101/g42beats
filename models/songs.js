let bookshelf = require('./bookshelf')

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimeStamps: true
});
