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

	$scope.rebind = function(){
		$location.url('/login');
	}

	$scope.doUnbind = function(){
		// $http...
		var success = true;
		if(success){
			$location.url('/unbind-success');
		}
	}
});

// detailCtrl
app.controller('detailCtrl', function($rootScope, $scope, $location, $http){
	$rootScope.body_bg = 'light-grey1';	

	$scope.share = function(){
    	$location.url('/share');
    }

    $('.btn-toggle').click(function(){
    	var $btnToggle = $(this);
    	$('.more-test-score-slider').slideToggle(function(){
    		$btnToggle.find('.mdi-navigation-expand-more').toggle();
    		$btnToggle.find('.mdi-navigation-expand-less').toggle();
		});      
    });

    $http.get('score.json').success(function(data){
    	if(data.length == 0){

    	}else if(data.length == 1){
    		$scope.latestScore = data[0];
    	}else{
    		$('.btn-toggle').show();
    		$scope.latestScore = data.shift();
    		$scope.otherScore = data;    		
    	}
    });
});

//shareCtrl
app.controller('shareCtrl', function($scope, $rootScope){
	$rootScope.body_bg = 'deep-orange1';
	$scope.showModalLayer = true;
});