angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  angular.extend($scope,Links);
  // $scope.getLinks = function(links) {
  //   $scope.data.links = links;
  // };
  $scope.getLinks($scope.data);
});
