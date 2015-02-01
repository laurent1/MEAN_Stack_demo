/**
 * Created by laurentMac on 1/27/15.
 */
angular.module('app').controller('mvMainCtrl', function($scope, mvCourse) {
  $scope.courses = mvCourse.query();
});