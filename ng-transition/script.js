(function(angular) {
  'use strict';
angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider, $rootScope) {
      $routeProvider
        .when('/Book/:bookId', {
          templateUrl: 'book.html',
          controller: 'BookCtrl',
          controllerAs: 'book'
        })
        .when('/Book/:bookId/ch/:chapterId', {
          templateUrl: 'chapter.html',
          controller: 'ChapterCtrl',
          controllerAs: 'chapter'
        });

      $locationProvider.html5Mode(true);

      
  }])
  .run(['$rootScope', '$window', '$location', '$log', function ($rootScope, $window, $location, $log) {  
    /*$rootScope.$on('$locationChangeStart', function locationChangeStart(event) {
      debugger;
      $log.log(arguments);  
        if($rootScope.forwardOrBack == 'back'){
          $rootScope.forwardOrBack = 'back';
        }else{
          $rootScope.forwardOrBack = 'forward';
        }        
    });
    $rootScope.$on('$locationChangeSuccess', function locationChangeStart(event) {
      debugger;
      $log.log(arguments);  
        /*if($rootScope.forwardOrBack == 'back'){
          $rootScope.forwardOrBack = 'back';
        }else{
          $rootScope.forwardOrBack = 'forward';
        } */       
    //});*/

    //var routeChangeStartOff = $rootScope.$on('$routeChangeStart', routeChangeStart);  
    //var routeChangeSuccessOff = $rootScope.$on('$routeChangeSuccess', routeChangeSuccess);  

     function routeChangeStart(event) {  
      debugger;
        $log.log('routeChangeStart');  
        $log.log(arguments);  
    }  
  
    function routeChangeSuccess(event) {  
      debugger;
        $log.log('routeChangeSuccess');  
        $log.log(arguments);  
    }
  
      
  
}])
  .controller('MainCtrl', ['$route', '$routeParams', '$location', '$rootScope',
    function($route, $routeParams, $location, $rootScope) {

      $rootScope.back = function(){
        $rootScope.forwardOrBack = 'back';
        history.back();
      }
      $rootScope.forward = function(){
        $rootScope.forwardOrBack = 'forward';
      }
  }])
  .controller('BookCtrl', ['$routeParams', function($routeParams) {
    this.name = "BookCtrl";
    this.params = $routeParams;
  }])
  .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
    this.name = "ChapterCtrl";
    this.params = $routeParams;
  }]);
})(window.angular);

