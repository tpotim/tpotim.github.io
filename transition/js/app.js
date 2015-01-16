var app = angular.module('App', [
  'ngAnimate',
  'mobile-angular-ui',
  'ngTouch'
]);

app.controller('MainController', function($scope, $http, $timeout, $filter){

      $scope.showA = true;
      $scope.showB = false;
      $scope.showC = false;
      $scope.state = true;


      $scope.a2b = function(){
        $scope.showA = false;
        $scope.showB = true;
      }

      $scope.b2a = function(){
        $scope.showA = true;
        $scope.showB = false;
      }

      $scope.b2c = function(){
        $scope.showC = true;
        $scope.showB = false;
      }

      $scope.c2b = function(){
        $scope.showC = false;
        $scope.showB = true;
      }
            
      $scope.hide = function(){
        $scope.state = false;
      }

      $scope.show = function(){
        $scope.state = true;
      }
      

});