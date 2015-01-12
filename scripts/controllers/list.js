var ListModule = angular.module('listModule', []);

ListModule.controller('listCtrl', function ($scope, $rootScope) {	

	$scope.goback = function(){
  		history.back(-1);
  	}

});