/**
 * Created by laurentMac on 1/28/15.
 */

// Store the current user and its state
angular.module('app').factory('mvIdentity', function($window) {
  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    currentUser = $window.bootstrappedUserObject;
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function() {
      return !!this.currentUser;
    }
  }
});
