/**
 * Created by laurentMac on 1/27/15.
 */
var auth = require('./auth'),
  users = require('../controllers/users'),
  courses = require('../controllers/courses'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {

  // if requiresRole call next(), the second (next) function is called
  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);
  app.get('/api/courses', courses.getCourses);
  app.get('/api/courses/:id', courses.getCourseById);

  // This would. And the files were moved to /public/app/ as well
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout(); // logout() is from passport module
    res.end();
  });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  // * matches all routes
  app.get('*', function(req, res) {
    res.render('index', { bootstrappedUser: req.user});
  });
};