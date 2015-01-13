var app = angular.module('App', [
  'ngRoute',
  'mobile-angular-ui'
]);


app.config(function($routeProvider) {
  $routeProvider.when('/',              {templateUrl: 'views/home.html', controller: 'HomeCtrl', reloadOnSearch: false});
  $routeProvider.when('/detail/:Id',        {templateUrl: 'views/detail.html', controller: 'DetailCtrl', reloadOnSearch: false});
});


app.controller('MainController', function($rootScope, $scope){
  $scope.userAgent = navigator.userAgent;  
  
  $rootScope.$on('$routeChangeStart', function(){
    $rootScope.loading = true;
  });

  $rootScope.$on('$routeChangeSuccess', function(){
    $rootScope.loading = false;
  });

  $rootScope.goback = false;
  
  $rootScope.gobackAction = function() {
    history.back(-1);
    $rootScope.goback = false;
  }
  
});