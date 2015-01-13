var App = angular.module('app', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'homeModule',
  'detailModule'
]);

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
		.when('/detail/:Id', {
			templateUrl: 'views/detail.html',
			controller: 'detailCtrl'
		})
		.when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    })
		.otherwise({
	    redirectTo: '/home'
		});
}]);

