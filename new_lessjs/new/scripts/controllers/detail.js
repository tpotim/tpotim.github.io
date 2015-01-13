var DetailModule = angular.module('detailModule', []);

DetailModule.controller('detailCtrl', ['$routeParams', '$scope', function($routeParams, $scope) {
  $scope.Id = $routeParams;

}]);