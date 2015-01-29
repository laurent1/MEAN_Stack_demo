/**
 * Created by laurentMac on 1/27/15.
 */
var passport = require('passport');

module.exports = function (app) {
  // This would. And the files were moved to /public/app/ as well
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', function (req, res, next) {
    var auth = passport.authenticate('local', function (err, user) {
      if(err) {return next(err);}
      if(!user) { res.send({success:false})}
      // because we are using xhr (and not a server side route, which is a submitted form)
      req.logIn(user, function(err) {
        if(err) {return next(err);}
        res.send({success:true, user: user});
      })
    })
    auth(req, res, next);
  });

  // * matches all routes
  app.get('*', function(req, res) {
    res.render('index');
  });
};