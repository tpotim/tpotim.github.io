app.controller('loginCtrl', function($rootScope, $scope, $http, $routeParams, $interval, $location){

  var counterTotalTime = 5;
  $scope.second = counterTotalTime;
  $scope.idValid = false;
  $scope.passwordValid = false;
  $scope.phoneValid = false;
  $scope.verifyCodeValid = false;
  $scope.formValid = false;
  $scope.loginForm = {};

  $rootScope.body_bg = 'light-grey1';
  

  $scope.getVerifyCode = function(){
    sendCheckNum();
    $scope.verifyCodeCounter();
  }

  function sendCheckNum(){

  }

  // 验证码计时器
  $scope.verifyCodeCounter = function(){    
    $scope.isGetVerifyCode = true; 
    Storage.setValue('isGetVerifyCode', $scope.isGetVerifyCode);

    $scope.myTime = $interval(function(){   
      --$scope.second;      
      if($scope.second == 0){  //重置计时器  
        $scope.second = counterTotalTime;
        $scope.isGetVerifyCode =false;
        Storage.setValue('isGetVerifyCode', $scope.isGetVerifyCode);
        $interval.cancel($scope.myTime);
      }
      Storage.setValue('second', $scope.second);
    }, 1000);
  }


  // 检查表单
  $scope.checkForm = function(){
    
    $scope.formValid = true;
    return;

    if($scope.loginForm.neeaId && $scope.loginForm.password 
        && $scope.loginForm.phoneNum && $scope.loginForm.checkNum){
      $scope.formValid = true;
    }else{
      $scope.formValid = false;
    }
  }

  // 提交绑定
  $scope.submitBind = function(){
    var success = true;
    if(success){
      $location.url('/check');
    }
  }


  // 继续倒计时
  function continueCounter(){
    if(Storage.getValue('isGetVerifyCode') === 'true'){
      $scope.second = Storage.getValue('second');
      $scope.verifyCodeCounter();
    }
  }
  continueCounter();

  
  

});