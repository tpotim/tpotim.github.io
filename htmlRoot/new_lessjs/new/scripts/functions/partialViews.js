function PartialsCtrl($scope, $location, $http, logout, errHandler, $rootScope) {
    //$scope.searchText = "";
    $scope.showPartial = function (partial) {
        $location.path(partial);
    };
    $scope.errHandler = errHandler;
    $scope.logoff = function () {
        EUAStorage.remove("NeedToShowSplashWindow");
        if(typeof device == "undefined") {
            logout.logoutFromRM({},{}, function(response){});
            logout.query({}, {}, function (response) {
				try {
				    if (response != null) {
				        EUAStorage.setValue("needSRALoginCulture", 1); //Add by Harin20140922
						window.location.reload();
						$http.defaults.headers.common['CultureCode'] = "";
						$http.defaults.headers.common['CompanyCode'] = "";
					}
				} catch (e) {
					$scope.errHandler.parseError();
				}
			}, function (error) {
				$scope.errHandler.genericAjaxErrorHandler(error);
			});
		} else {
			window.location.href = "login.html";
			localStorage.setItem("USERLOGOFF",true);
		}
    }
};   
 

