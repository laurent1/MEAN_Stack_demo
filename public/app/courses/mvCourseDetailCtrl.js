/**
 * Created by laurentMac on 1/31/15.
 */
angular.module('app').controller('mvCourseDetailCtrl', function($scope, mvCourse, $routeParams) {
  $scope.course = mvCourse.get({_id:$routeParams.id})

});