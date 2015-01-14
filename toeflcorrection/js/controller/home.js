app.controller('HomeCtrl', function($rootScope, $scope, $http, $timeout){ 

  $scope.moreAction = false;
  $scope.refreshAction = false;
  $scope.posts = [];

  $scope.refresh = function() {
    $scope.refreshAction = true;
    $http.get("refresh.json")
         .success(function(response){            
            $timeout(function(){
              $scope.posts = response;
              $scope.refreshAction = false;
            },100)
         });
  }

  $scope.loadmore = function() {
    $scope.moreAction = true;
    $http.get("more.json")
         .success(function(response){            
            $timeout(function(){
              $scope.posts = $scope.posts.concat(response);
              $scope.moreAction = false;
            }, 100)
            //debugger;
         });
  }

  $rootScope.forwardOrBack = 'back';
  
  $http.get("list.json")
  	.success(function(response){
      $timeout(function(){
        $scope.posts = response;  
      }, 100);
  		
  	});


  
});