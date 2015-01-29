/**
 * Created by laurentMac on 1/27/15.
 */
var mongoose = require('mongoose');

module.exports = function (config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'db connection error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String
  });

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      User.create({firstName:'Laurent',lastName:'Jacquot',username:'laurent1'});
      User.create({firstName:'Laurent',lastName:'Fabius',username:'lfabius'});
      User.create({firstName:'David',lastName:'Jacquot',username:'dave'});
    }
  });
};
