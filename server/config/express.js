/**
 * Created by laurentMac on 1/27/15.
 */
var express = require('express'),
  stylus = require('stylus'),
  logger = require('morgan'),
  bodyParser = require('body-parser');

module.exports = function (app, config) {
  function compile(str, path){
    return stylus(str).set('filename', path);
  }

  app.set('views', config.rootPath  + '/server/views');
  app.set('view engine', 'jade');
  app.use(logger('dev'));
  app.use(bodyParser());
  app.use(stylus.middleware(
    {
      src: config.rootPath + '/public',
      compile: compile
    }
  ));
  // So, the views in server/ can access the content of public/ from the path "/"
  app.use(express.static(config.rootPath + '/public'));
};