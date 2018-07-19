const env = process.env.NODE_ENV || 'development',
  config = require('./config')[env],
  mongoose = require('mongoose');

module.exports = function() {
  mongoose.Promise = global.Promise;
  const db = mongoose.connect(config.db, { useNewUrlParser: true });
  const connect_db = mongoose.connection;
  connect_db.on('error', function(err) {
    console.log(
      'Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red
    );
  });
  connect_db.once('open', function() {
    console.log('Yayy 👻  Connection establised with MongoDB');
  });
  return db;
};
