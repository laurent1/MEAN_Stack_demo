/**
 * Created by laurentMac on 1/27/15.
 */
angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCourses) {
  $scope.courses = mvCachedCourses.query();
});