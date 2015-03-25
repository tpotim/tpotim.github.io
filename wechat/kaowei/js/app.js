var app = angular.module('App', [
  'ngRoute'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',             {templateUrl: 'views/school-list.html', controller: 'kaoweiCtrl', reloadOnSearch: false})
    .when('/school-detail/:schoolId',      {templateUrl: 'views/school-detail.html', controller: 'schoolDetailCtrl', reloadOnSearch: false})
    .when('/school-map/:schoolId',      {templateUrl: 'views/school-map.html', controller: 'schoolMapCtrl', reloadOnSearch: false})
    .otherwise({
      redirectTo: '/'
    });
  
});

app.controller('MainController', function($rootScope, $routeParams, $location, $route){ 

});


// 异步加载百度地图API
function loadBaiduMapApi(lng, lat) {
	var callbackFn = 'init(' + lng + ',' + lat + ')';
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=1K0AxHze2LG30PI7e4AISD6A&callback=" + callbackFn;
	document.body.appendChild(script);
}

// 创建地图
function init(lng, lat, poisitionName) {
	poisitionName = 'abc';
	return function(){
		var map = new BMap.Map("allmap");            // 创建Map实例
		var point = new BMap.Point(lng, lat); // 创建点坐标
		map.centerAndZoom(point,15);                 
		map.enableScrollWheelZoom();                 //启用滚轮放大缩小
		// 添加带有定位的导航控件
		var navigationControl = new BMap.NavigationControl({
		  // 靠左上角位置
		  anchor: BMAP_ANCHOR_TOP_LEFT,
		  // LARGE类型
		  type: BMAP_NAVIGATION_CONTROL_LARGE,
		  // 启用显示定位
		  enableGeolocation: true
		});
		map.addControl(navigationControl);
		var marker = new BMap.Marker(point);  // 创建标注
		map.addOverlay(marker);               // 将标注添加到地图中
		//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

		/*var label = new BMap.Label(poisitionName,{offset:new BMap.Size(20,-10)});
		marker.setLabel(label);*/
	}	
}