/**
 * Created by laurentMac on 1/31/15.
 */
angular.module('app').controller('mvCourseListCtrl', function($scope, mvCachedCourses) {
  $scope.courses = mvCachedCourses.query();

  $scope.sortOptions = [{value:"title",text: "Sort by Title"},
    {value: "published",text: "Sort by Publish Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});