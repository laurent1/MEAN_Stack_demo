/**
 * Created by laurentMac on 1/26/15.
 */
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
  return stylus(str).set('filename', path);
}
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));
// So, the views in server/ can access the content of public/ from the path "/"
app.use(express.static(__dirname + '/public'));

/** mongoose has a schema
 * multivision is the database name
 */
if(env === 'development') {
  mongoose.connect('mongodb://localhost/multivision');
}
else {
  mongoose.connect('mongodb://Laurent1:multivision@ds053658.mongolab.com:53658/multivision');
}


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error...'));
db.once('open', function callback() {
  console.log('multivision db opened');
});
var messageSchema = mongoose.Schema({message: String}); // Creates a schema
var Message = mongoose.model('Message', messageSchema); // Creates a model based on that schema
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
  mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
});

// * matches all routes
app.get('*', function(req, res) {
  res.render('index', {
    mongoMessage: mongoMessage
  });
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port);
