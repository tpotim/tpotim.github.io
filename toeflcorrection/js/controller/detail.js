app.controller('DetailCtrl', function($routeParams, $rootScope, $scope, $http){   
  $scope.Id = $routeParams;
  $rootScope.goback = true;
  $http.get("j2.json")
  	.success(function(response){
  		$scope.post = response;
  	});
});