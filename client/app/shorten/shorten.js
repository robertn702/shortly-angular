angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // $scope.link = {};
  angular.extend($scope,Links);
});
