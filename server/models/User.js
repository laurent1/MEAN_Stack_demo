/**
 * Created by laurentMac on 1/31/15.
 */
var mongoose = require('mongoose'),
     encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type:String, required:'{PATH} is required!'},
  lastName: {type:String, required:'{PATH} is required!'},
  username: {type: String, required: '{PATH} is required!', unique:true},
  salt: {type:String, required:'{PATH} is required!'},
  hashed_pwd: {type:String, required:'{PATH} is required!'},
  roles: [String]
});
userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
    hasRole: function(role) {
    return this.roles.indexOf(role) > -1;
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