/**
 * Created by laurentMac on 1/28/15.
 */

angular.module('app').factory('mvAuth', function($http, mvIdentity, $q) {
  return {
    authenticateUser: function (username, password) {
      var dfd = $q.defer();
      $http.post('/login', {username: username, password: password}).then(function (response) {
        if (response.data.success) {
          mvIdentity.currentUser = response.data.user;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },
    logoutUser: function() {
      var dfd = $q.defer();
      // {logout:true} to give a body, otherwise Angular will turn this post into a get
      $http.post('/logout', {logout:true}).then(function() {
        mvIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    }
  }
});