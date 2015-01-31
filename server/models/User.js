/**
 * Created by laurentMac on 1/31/15.
 */
var mongoose = require('mongoose'),
     encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  salt: String,
  hashed_pwd: String,
  roles: [String]
});
userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  }
};
var User = mongoose.model('User', userSchema);

function createDefaukltUsers() {
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      username = 'lj';
      hash = encrypt.hashPwd(salt, username);
      User.create({
        firstName: 'Laurent',
        lastName: 'Jacquot',
        username: username,
        salt: salt,
        hashed_pwd: hash,
        roles: ['admin']
      });
      salt = encrypt.createSalt();
      username = 'nj';
      hash = encrypt.hashPwd(salt, username);
      User.create({
        firstName: 'Nicolas',
        lastName: 'Jacquot',
        username: username,
        salt: salt,
        hashed_pwd: hash,
        roles: []
      });
      salt = encrypt.createSalt();
      username = 'dj';
      hash = encrypt.hashPwd(salt, username);
      User.create({
        firstName: 'David',
        lastName: 'Jacquot',
        username: username,
        salt: salt,
        hashed_pwd: hash
      });
    }
  });
}

exports.createDefaukltUsers = createDefaukltUsers;