angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  angular.extend($scope,Links);
  $scope.getLinks($scope.data);

});
