//  MainController
app.controller('MainController', function($rootScope, $routeParams, $location, $route){ 
  
});

//  kaoweiCtrl
app.controller('kaoweiCtrl', function($rootScope, $scope, $http, $location){
	
	$.getJSON('http://fz1.tpooo.com/kaowei/interface/intertoefl/schoolList' + '?jsoncallback=?',function(data, status){
        $scope.$apply(function(){
			$scope.citySchoolList = data.datas;
        });        
	});
	
	$scope.cc = function(id){
		$location.path('/school-detail/'+id);
	}

});

//  schoolDetailCtrl
app.controller('schoolDetailCtrl', function($rootScope, $scope, $routeParams, $location){
	var url = 'http://fz1.tpooo.com/kaowei/interface/intertoefl/schoolDetial';
	$.getJSON(url + '?school_id=' + $routeParams.schoolId +'&jsoncallback=?',function(data, status){
        $scope.$apply(function(){
        	var picUrl = data.datas.info.picUrl || 'static/upload/schoolPic/thumb/201502111443.jpg';
        	data.datas.info.picUrl = 'http://fz1.tpooo.com/' + picUrl;
			$scope.school = data.datas;					
        });        
	});

	$scope.showSchoolMap = function(){
		$location.path('/school-map/' + $routeParams.schoolId);
	}
});

// mapCtrl
app.controller('schoolMapCtrl', function($scope, $routeParams){
	
	$scope.$on('$viewContentLoaded', function()
    {
		var url = 'http://fz1.tpooo.com/kaowei/interface/intertoefl/foodAndHotelMap';
		$.getJSON(url + '?school_id=' + $routeParams.schoolId +'&jsoncallback=?',function(data, status){
	        $scope.$apply(function(){
	        	loadBaiduMapApi(data.datas.lng, data.datas.lat);	
	        });        
		});
    });


	 
});