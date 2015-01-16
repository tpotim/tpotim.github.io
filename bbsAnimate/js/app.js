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


      $scope.show_page_post_list = true;
      $scope.show_page_post = false;
      $scope.show_page_comment = false;
      $scope.page_nav = null;
      // 前进
      $scope.postList2post = function(post){
        $scope.show_page_post_list = false;
        $scope.show_page_post = true;
        $scope.page_nav = "backward";

        $http.get("json/post.json")
          .success(function(response){
            $timeout(function(){              
              $scope.post = response; 
              $scope.post.postTitle = post.postTitle;
              $scope.post.headPortraitUrl = post.headPortraitUrl;
              $scope.post.writerName = post.writerName;
              $scope.post.postTime = post.postTime;
              $scope.loading_detail = false;
            }, 0);      
          });
      }
      // 前进
      $scope.post2comment = function(comment){        
        $scope.show_page_post = false;
        $scope.show_page_comment = true;
        $scope.page_nav = "forward";

        $scope.comment = comment;
      }
      // 返回
      $scope.back = function(){        
        if($scope.show_page_post == true){
          $scope.show_page_post = false;
          $scope.show_page_post_list = true;
          $scope.page_nav = "backward";
        }
        else if($scope.show_page_comment == true){
          $scope.show_page_comment = false;
          $scope.show_page_post = true;
        }
      }      

      $http.get("json/list.json")
        .success(function(response){
          $timeout(function(){
            $scope.list = response;  
            $scope.loading = false;
          }, 400);      
       });

      $scope.orderBy = function(by){
        $scope.orderByStr = by;
        $scope.list = $filter('orderBy')($scope.list, by);
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