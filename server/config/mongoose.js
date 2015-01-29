/**
 * Created by laurentMac on 1/27/15.
 */
var mongoose = require('mongoose'),
      crypto = require('crypto');

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
    username: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]
  });
  userSchema.methods = {
    authenticate: function(passwordToMatch) {
      return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  };
  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var salt, hash;
      salt = createSalt();
      username = 'lj';
      hash = hashPwd(salt, username);
      User.create({firstName:'Laurent',lastName:'Jacquot',username:username, salt: salt, hashed_pwd: hash, roles: ['admin']});
      salt = createSalt();
      username = 'nj';
      hash = hashPwd(salt, username);
      User.create({firstName:'Nicolas',lastName:'Jacquot',username:username, salt: salt, hashed_pwd: hash, roles: []});
      salt = createSalt();
      username = 'dj';
      hash = hashPwd(salt, username);
      User.create({firstName:'David',lastName:'Jacquot',username:username, salt: salt, hashed_pwd: hash});
    }
  });
};

function createSalt() {
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
  // Hash Message Authentication Code
  var hmac = crypto.createHmac('sha1', salt);
  return hmac.update(pwd).digest('hex');
}