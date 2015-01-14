app.controller('DetailCtrl', function($routeParams, $rootScope, $scope, $http){   
  $scope.Id = $routeParams;
  $rootScope.goback = true;
  $http.get("detail.json")
  	.success(function(response){
  		$scope.post = response;
  	});

  $rootScope.forwardOrBack = 'forward';
});