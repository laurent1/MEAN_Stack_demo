/**
 * Created by laurentMac on 1/29/15.
 */
angular.module('app').controller('mvUserListCtrl', function($scope, mvUser) {
  $scope.users = mvUser.query();
});