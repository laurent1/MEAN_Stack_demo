/**
 * Created by laurentMac on 1/31/15.
 */
angular.module('app').controller('mvCourseDetailCtrl', function($scope, mvCachedCourses, $routeParams) {
  // Will get the course only from the course list.
  mvCachedCourses.query().$promise.then(function(collection) {
    collection.forEach(function(course) {
      if(course._id === $routeParams.id) {
        $scope.course = course;
      }
    })
  })
});