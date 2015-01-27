/**
 * Created by laurentMac on 1/27/15.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/multivision',
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://Laurent1:multivision@ds053658.mongolab.com:53658/multivision',
    port: process.env.PORT || 80
  }
};