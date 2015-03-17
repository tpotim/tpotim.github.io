// checkCtrl
app.controller('checkCtrl', function($rootScope, $scope, $http, $routeParams, $location){

	$rootScope.body_bg = 'deep-orange1';
	$scope.showModalLayer = false;
	$scope.showScore = function(){
		$location.url('/detail');
	}
	$scope.unbind = function(){
		$scope.showModalLayer = true;
	}
	$scope.thinkTwice = function(){
		$scope.showModalLayer = false;		
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

// detailCtrl
app.controller('detailCtrl', function($rootScope, $scope, $http, $routeParams){
	$rootScope.body_bg = 'light-grey1';

	$('.btn-more').click(function(){

	  $('.more-test-score').slideDown();
      $(this).hide();
      //$('.btn-less').show();
      
    })
    $('.btn-less').click(function(){
    	$('.more-test-score').slideUp();
      $(this).hide();
      $('.btn-more').show();
    })
});


app.controller('shareCtrl', function($scope){
	$scope.showModalLayer = true;
});