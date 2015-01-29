/**
 * Created by laurentMac on 1/28/15.
 */

// Store the current user and its state
angular.module('app').factory('mvIdentity', function($window) {
  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    angular.extend(currentUser, $window.bootstrappedUserObject);
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function() {
      return !!this.currentUser;
    },
    isAuthorized: function(role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  }
})