app.controller('HomeCtrl', function($rootScope, $scope, $http, $timeout){ 

  $scope.moreAction = false;
  $scope.refreshAction = false;
  $scope.posts = [];

  $scope.refresh = function() {
    $scope.refreshAction = true;
    $http.get("refresh.json")
         .success(function(response){
            $scope.posts = response;
            $scope.refreshAction = false;
         });
  }

  $scope.loadmore = function() {
    $scope.moreAction = true;
    $http.get("more.json")
         .success(function(response){
            $scope.posts = $scope.posts.concat(response);
            $scope.moreAction = false;
            debugger;
         });
  }

  
  
  //$scope.posts = [{name:"a"}, {name:"b"}, {name:"c"},{name:"a"}, {name:"b"}, {name:"c"}];

  $http.get("list.json")
  	.success(function(response){
  		$scope.posts = response;
  	});
  
});