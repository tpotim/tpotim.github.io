var HomeModule = angular.module('homeModule', []);

HomeModule.controller('homeCtrl', function ($scope, homeService) {
	$scope.users = [
	  {name:'John', age:25, gender:'boy'},
	  {name:'Jessie', age:30, gender:'girl'},
	  {name:'Johanna', age:28, gender:'girl'},
	  {name:'Joy', age:15, gender:'girl'},
	  {name:'Mary', age:28, gender:'girl'},
	  {name:'Peter', age:95, gender:'boy'},
	  {name:'Sebastian', age:50, gender:'boy'},
	  {name:'Erika', age:27, gender:'girl'},
	  {name:'Patrick', age:40, gender:'boy'},
	  {name:'Samantha', age:60, gender:'girl'}
	];

	// homeService.query({}, {}, function (response) {
 //        try {
            
 //        }catch(err){
          
 //        }
 //    }, function (error) {
        
 //    });


	$scope.name = "";
	$scope.age = "";
	$scope.gender = "";

	$scope.adduser=function(){
		$scope.users.push({name:$scope.name, age:$scope.age, gender:$scope.gender});
	}

	$scope.removeuser=function(index){
		$scope.users.splice(index, 1);
	}
});