app.controller('loadingCtrl', function($rootScope, $scope, $http, $routeParams){
  $rootScope.body_bg='white';
  $scope.wechatCode = $routeParams.key;

  $http.post('http://fz1.tpooo.com/kaowei/interface/intertoefl/test', {code:$scope.wechatCode}).
  	success(function(data, status) {
    			console.log(data);
  }).
  error(function(data, status) {
    		console.log(data);
  });
  

});