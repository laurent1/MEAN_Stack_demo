/**
 * Created by laurentMac on 1/31/15.
 */
var Course = require('mongoose').model('Course');

exports.getCourses = function(req, res) {
  Course.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};