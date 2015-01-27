/**
 * Created by laurentMac on 1/27/15.
 */
// mvIdentity, mvNotifier, mvAuth,
angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, $location) {
  //$scope.identity = mvIdentity;
  $scope.signin = function(username, password) {
    //mvAuth.authenticateUser(username, password).then(function(success) {
    //  if(success) {
    //    mvNotifier.notify('You have successfully signed in!');
    //  } else {
    //    mvNotifier.notify('Username/Password combination incorrect');
    //  }
    //});
    console.log("Not done yet");
    
  }

  //$scope.signout = function() {
  //  mvAuth.logoutUser().then(function() {
  //    $scope.username = "";
  //    $scope.password = "";
  //    mvNotifier.notify('You have successfully signed out!');
  //    $location.path('/');
  //  })
  //}
});