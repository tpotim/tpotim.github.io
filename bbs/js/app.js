var app = angular.module('App', [
  'ngAnimate',
  'mobile-angular-ui',
  'ngTouch'
]);

app.controller('MainController', function($scope, $http, $timeout, $filter){

      $scope.show_detail = false;
      $scope.loading = true;
      $scope.loading_detail = false;
      $scope.orderByStr = 'name';
            

      $http.get("json/list.json")
        .success(function(response){
          $timeout(function(){
            $scope.list = response;  
            $scope.loading = false;
          }, 400);      
       });

      $scope.goDetail = function(post){
        $scope.show_detail = true;
        $scope.loading_detail = true;

        $http.get("json/detail.json")
          .success(function(response){
            $timeout(function(){
              $scope.detail = response; 
              $scope.detail.title = post.title;
              $scope.loading_detail = false;
            }, 0);      
          });
      }

      $scope.orderBy = function(by){
        $scope.orderByStr = by;
        $scope.list = $filter('orderBy')($scope.list, by);
      }

      $scope.showHome = function(){
        $scope.show_detail = false;
      }

      $scope.refresh = function() {
        $scope.refreshAction = true;
        $http.get("json/refresh.json")
             .success(function(response){            
                $timeout(function(){
                  $scope.list = response;
                  $scope.refreshAction = false;
                },100)
             });
      }

      $scope.loadmore = function() {
        $scope.moreAction = true;
        $http.get("json/more.json")
             .success(function(response){            
                $timeout(function(){
                  $scope.list = $scope.list.concat(response);
                  $scope.moreAction = false;
                }, 100)
             });
      }

});