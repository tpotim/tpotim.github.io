// app.js
 
// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);
 
// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {
 
    $routeProvider
 
        // home page
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'mainController'
        })
 
        // about page
        .when('/about', {
            templateUrl: 'page-about.html',
            controller: 'aboutController'
        })
 
        // contact page
        .when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactController'
        })
        .otherwise({
            templateUrl: '404.html'
        });
});

animateApp.controller('indexCtrl', function($rootScope){
    $rootScope.back = function(){
        $rootScope.forwardOrBack = 'back';
        console.log('aaaaaaa');
        history.back(-1);
        console.log('bbbbbbbbbb');
    }
});

animateApp.run(['$rootScope', '$window', '$location', '$log', function ($rootScope, $window, $location, $log) {  
    var locationChangeStartOff = $rootScope.$on('$locationChangeStart', locationChangeStart);  
    var locationChangeSuccessOff = $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);  
  
    var routeChangeStartOff = $rootScope.$on('$routeChangeStart', routeChangeStart);  
    var routeChangeSuccessOff = $rootScope.$on('$routeChangeSuccess', routeChangeSuccess);  
  
    function locationChangeStart(event) {  
        $log.log('locationChangeStart');  
        $log.log(arguments);  
        $rootScope.forwardOrBack = 'forward';
        console.log('ccccccccc');
    }  
  
    function locationChangeSuccess(event) {  
        $log.log('locationChangeSuccess');  
        $log.log(arguments);  
    }  
  
    function routeChangeStart(event) {  
        $log.log('routeChangeStart');  
        $log.log(arguments);  
    }  
  
    function routeChangeSuccess(event) {  
        $log.log('routeChangeSuccess');  
        $log.log(arguments);  
    }  
}]);
 
 
// CONTROLLERS ============================================
// home page controller
animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});
 
// about page controller
animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});
 
// contact page controller
animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});