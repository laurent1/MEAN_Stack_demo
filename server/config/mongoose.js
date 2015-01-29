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
    hashed_pwd: String
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
      hash = hashPwd(salt, 'laurent1');
      User.create({firstName:'Laurent',lastName:'Jacquot',username:'laurent1', salt: salt, hashed_pwd: hash});
      salt = createSalt();
      hash = hashPwd(salt, 'lfabius');
      User.create({firstName:'Laurent',lastName:'Fabius',username:'lfabius', salt: salt, hashed_pwd: hash});
      salt = createSalt();
      hash = hashPwd(salt, 'dave');
      User.create({firstName:'David',lastName:'Jacquot',username:'dave', salt: salt, hashed_pwd: hash});
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