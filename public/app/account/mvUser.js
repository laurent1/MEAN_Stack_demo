/**
 * Created by laurentMac on 1/29/15.
 */
angular.module('app').factory('mvUser', function($resource) {
  // TO DO: implement this route
  var UserResource = $resource('/api/users/:id', {_id: "@id"});

  UserResource.prototype.isAdmin = function() {
    return this.roles && this.roles.indexOf('admin') > -1;
  }

  return UserResource;
});