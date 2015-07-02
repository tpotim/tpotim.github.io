if(device.desktop()){
	location.href = 'http://passport.tpooo.net/Resetpwd/index.html';
}
$(function() {

	// 检查手机号码有效性
	function mobileValid() {
		if (/^1[3578]\d{9}$/.test($('.pwd-mobile').val())) {
			$('.mobile-invalid-tip').addClass('hide');
			return true;
		} else {
			$('.mobile-invalid-tip').removeClass('hide');
			return false;
		}
	}

	// 检查验证码有效性
	function verifyCodeValid() {
		if (/^\d{6}$/.test($('.pwd-verify-code').val())) {
			$('.code-invalid-tip').addClass('hide');
			return true;
		} else {
			$('.code-invalid-tip').removeClass('hide');
			return false;
		}
	}

	// 检查密码有效性
	function pwdValid() {
		var pwd = $('.new-pwd').val();
		if (/^[a-zA-Z0-9~!@#\$%\^&\*\-_\+=\.]{6,20}$/.test(pwd)) {
			$('.input-pwd-tip').addClass('hide');
			return true;
		} else {
			$('.input-pwd-tip').removeClass('hide');
			return false;
		}
	}

	// !!!! 和 click冲突
	/*$('.pwd-mobile').blur(function() {
		mobileValid();
	});*/
	// 失去焦点时检查有效性
	$('.pwd-verify-code').blur(function() {
		verifyCodeValid();
	});

	// 验证码倒计时
	function timeCounter() {
		var _this = $('.send-code-btn');
		var time = 60;
		_this.attr('disabled', 'disabled').text(time + '秒').addClass('btn-disable');
		var intv = setInterval(function() {
			time--;
			_this.text(time + '秒');
			if (time === 0) {
				clearInterval(intv);
				_this.removeAttr('disabled').text('获取验证码').removeClass('btn-disable');;
			}
		}, 1000);
	}

	// 发送验证码
	$('.send-code-btn').click(function() {
		if (!mobileValid()) {
			return;
		}
		callServ('http://i.tpooo.net/api/wap/sendSms', {
			mobile: $('.pwd-mobile').val(),
			type: 3
		}, function(data) {
			// 验证码发送成功，开始计时
			timeCounter();
		});
	});

	// 校验验证码
	$('.check-code-btn').click(function() {
		if (!mobileValid() || !verifyCodeValid()) {
			return;
		}
		var mobile = $('.pwd-mobile').val();
		var verifyCode = $('.pwd-verify-code').val();
		callServ('http://i.tpooo.net/api/wap/checkVerify', {
			mobile: mobile,
			type: 3,
			verifyCode: verifyCode
		}, function(data) {
			sessionStorage.setItem('chgPwdMobile', mobile);
			sessionStorage.setItem('chgPwdVerifyCode', verifyCode);
			//location.href = 'chg_pwd_submit.html';
			location.href = '/m/Resetpwd/chg_pwd_submit.php';
		});
	});

	// 修改密码
	$('.chg-pwd-submit-btn').click(function() {
		var mobile = sessionStorage.getItem('chgPwdMobile');
		var verifyCode = sessionStorage.getItem('chgPwdVerifyCode');
		var pwd = $('.new-pwd').val();
		if (!mobile || !verifyCode) {
			alert('手机号码或验证码不存在,请重新输入.');
			return;
		}
		if (!pwdValid()) {
			return;
		}
		callServ('http://i.tpooo.net/api/wap/resetPwd', {
			mobile: mobile,
			verifyCode: verifyCode,
			password: pwd
		}, function(data) {
			// 跳到登录页
			location.href = '/m/Users/login.php';
		});
	});


	// 调用后台服务
	function callServ(url, param, doneFn, failFn) {
		$('.full-layer').show();
		$.ajax({
			url: 'http://passport.tpooo.net/uc_client/send.php',
			type: 'POST',
			dataType: 'json',
			data: {
				url: url,
				method: 'POST',
				datas: JSON.stringify(param),
			}
		}).done(function(data) {
			$('.full-layer').hide();
			if (1 === data.status) {
				doneFn(data);
			} else {
				alert(data.message || '未知错误,请稍后再试.');
			}
		}).fail(function(err) {
			$('.full-layer').hide();
			if (failFn)
				failFn(err)
			else
				alert('服务器繁忙,请稍后再试.');
		});
	}
});