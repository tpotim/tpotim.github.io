var app = angular.module('App', [
  'ngRoute'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/loading/:key',              {templateUrl: 'views/loading.html', controller: 'loadingCtrl', reloadOnSearch: false})
    .when('/login',              {templateUrl: 'views/login.html', controller: 'loginCtrl', reloadOnSearch: false})
    .when('/check',              {templateUrl: 'views/check.html', controller: 'checkCtrl', reloadOnSearch: false})
    .when('/detail',              {templateUrl: 'views/detail.html', controller: 'detailCtrl', reloadOnSearch: false})
    .when('/unbind-success',              {templateUrl: 'views/unbind_success.html', controller: 'checkCtrl', reloadOnSearch: false})
    .when('/share',              {templateUrl: 'views/share.html', controller: 'detailCtrl', reloadOnSearch: false})
    .otherwise({
      redirectTo: '/login'
    });
  
});

app.controller('MainController', function($http, $rootScope, $scope, $location, $routeParams){ 

});
