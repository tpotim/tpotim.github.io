app.controller('checkCtrl', function($rootScope, $scope, $http, $routeParams, $location){

	$scope.showConfirmLayer = false;

	$rootScope.body_bg = 'deep-orange1';

	$scope.showScore = function(){
		$location.url('/detail');
	}
	$scope.unbind = function(){
		$scope.showConfirmLayer = true;
	}
	$scope.thinkTwice = function(){
		$scope.showConfirmLayer = false;		
	}
	$scope.doUnbind = function(){
		var success = true;
		if(success){
			$location.url('/unbind-success');
		}
	}

	$scope.rebind = function(){
		$location.url('/login');
	}
});


app.controller('detailCtrl', function($rootScope, $scope, $http, $routeParams){
	$rootScope.body_bg = 'light-grey1';
	$('.collapsible').collapsible();
	$('.bt11').click(function(){
      $(this).hide();
      $('.bt22').show();
      $('.trgg').click();
      
    })
    $('.bt22').click(function(){
      $(this).hide();
      $('.trgg').click();
      $('.bt11').show();
    })
});
