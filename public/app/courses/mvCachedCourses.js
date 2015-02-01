/**
 * Created by laurentMac on 1/31/15.
 */
angular.module('app').factory('mvCachedCourses', function(mvCourse) {
  var courseList;

  return {
    query: function() {
      if(!courseList) {
        courseList = mvCourse.query();
      }

      return courseList;
    }
  }
})