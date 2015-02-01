/**
 * Created by laurentMac on 1/31/15.
 */
angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse) {
  $scope.courses = mvCourse.query();


});