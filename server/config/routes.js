/**
 * Created by laurentMac on 1/27/15.
 */
var auth = require('./auth');

module.exports = function (app) {
  // This would. And the files were moved to /public/app/ as well
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  // * matches all routes
  app.get('*', function(req, res) {
    res.render('index');
  });
};