/**
 * Created by laurentMac on 1/28/15.
 */

// Wrap toastr into a service
angular.module('app').value('mvToastr', toastr);

// Creates a service based on toastr
angular.module('app').factory('mvNotifier', function(mvToastr) {
  return {
    notify: function(msg) {
      mvToastr.success(msg);
      console.log(msg);
    },
    error: function(msg) {
      mvToastr.error(msg);
      console.log(msg);
    }
  }
})