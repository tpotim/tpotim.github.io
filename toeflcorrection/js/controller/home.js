app.controller('HomeCtrl', function($rootScope, $scope, $http){ 

  $scope.moreAction = false;
  $scope.refreshAction = false;
  $scope.loadmore = function() {
    $scope.moreAction = true;
  }
  $scope.refresh = function() {
    $scope.refreshAction = true;
  }
  
  //$scope.posts = [{name:"a"}, {name:"b"}, {name:"c"},{name:"a"}, {name:"b"}, {name:"c"}];

  $http.get("j1.json")
  	.success(function(response){
  		$scope.posts = response;
  	});
  
});