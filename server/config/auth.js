/**
 * Created by laurentMac on 1/28/15.
 */
var passport = require('passport');

exports.authenticate =  function (req, res, next) {
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
};

exports.requiresApiLogin = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.status(403);
    res.end();
  } else {
    next();
  }
};

exports.requiresRole = function(role) {
  return function(req, res, next) {
    if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
      res.status(403);
      res.end();
    } else {
      next();
    }
  }
}