app.controller('DetailCtrl', function($routeParams, $rootScope, $scope, $http, $timeout){   
  $scope.Id = $routeParams;
  $rootScope.goback = true;
  $http.get("detail.json")
  	.success(function(response){
  		$timeout(function(){
  			$scope.post = response;	
  		}, 2000);   		
  	});

  $rootScope.forwardOrBack = 'forward';
});