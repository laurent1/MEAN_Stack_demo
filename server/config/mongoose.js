/**
 * Created by laurentMac on 1/27/15.
 */
var mongoose = require('mongoose'),
   userModel = require('../models/User');

module.exports = function (config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'db connection error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });

  userModel.createDefaukltUsers();
};
