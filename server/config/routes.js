/**
 * Created by laurentMac on 1/27/15.
 */
var auth = require('./auth'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {

  // if requiresRole call next(), the second (next) function is called
  app.get('/api/users', auth.requiresRole('admin'), function(req, res) {
    User.find({}).exec(function(err, collection) {
      res.send(collection);
    })
  });

  // This would. And the files were moved to /public/app/ as well
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout(); // logout() is from passport module
    res.end();
  });

  // * matches all routes
  app.get('*', function(req, res) {
    res.render('index', { bootstrappedUser: req.user});
  });
};