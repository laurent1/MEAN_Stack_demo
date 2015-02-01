/**
 * Created by laurentMac on 1/31/15.
 */
angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse) {
  $scope.courses = mvCourse.query();

  $scope.sortOptions = [{value:"title",text: "Sort by Title"},
    {value: "published",text: "Sort by Publish Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});