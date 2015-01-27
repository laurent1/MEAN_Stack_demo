/**
 * Created by laurentMac on 1/26/15.
 */
angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
    .when('/', { templateUrl: '/partials/main', controller: 'mvMainCtrl'});
});

