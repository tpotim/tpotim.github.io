if(device.desktop()){
	location.href = 'http://passport.tpooo.net/Users/register.html';
}
$(function() {
	// 显示/隐藏 密码字段
	$('#togglePassword').click(function() {
		var $pwdInput = $('#password-cont');
		"password" == $pwdInput.attr("type") ?
			$pwdInput.attr("type", "text") :
			$pwdInput.attr("type", "password");
	});

	// 验证码倒计时
	function timeCounter() {
		var _this = $('.reg-send-code');
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

	// 检查手机号码有效性
	function mobileValid() {
		if (/^1[3578]\d{9}$/.test($('.reg-mobile').val())) {
			$('.mobile-invalid-tip').addClass('hide');
			return true;
		} else {
			$('.mobile-invalid-tip').removeClass('hide');
			return false;
		}
	}

	// 检查验证码有效性
	function verifyCodeValid() {
		if (/^\d{6}$/.test($('.reg-verify-code').val())) {
			$('.code-invalid-tip').addClass('hide');
			return true;
		} else {
			$('.code-invalid-tip').removeClass('hide');
			return false;
		}
	}

	// 用户名有效性
	function nickNameValid() {
		var len = $('.reg-nick-name').val().length;
		if (len >= 2 && len <= 20) {
			$('.nick-name-tip').addClass('hide');
			return true;
		} else {
			$('.nick-name-tip').removeClass('hide');
			return false;
		}
	}

	// 检查密码有效性
	function pwdValid() {
		var pwd = $('.reg-pwd').val();
		if (/^[a-zA-Z0-9~!@#\$%\^&\*\-_\+=\.]{6,20}$/.test(pwd)) {
			$('.input-pwd-tip').addClass('hide');
			return true;
		} else {
			$('.input-pwd-tip').removeClass('hide');
			return false;
		}
	}

	// 发送验证码
	$('.reg-send-code').click(function() {
		if (!mobileValid()) {
			return;
		}
		// 发送验证码
		callServ('http://i.tpooo.net/api/wap/sendSms', {
			mobile: $('.reg-mobile').val(),
			type: 2
		}, function(data) {
			// 验证码发送成功，开始计时
			timeCounter();
		});

	});

	// 校验验证码
	$('.reg-check-btn').click(function() {
		if (!mobileValid() || !verifyCodeValid()) {
			return;
		}
		var mobile = $('.reg-mobile').val();
		var verifyCode = $('.reg-verify-code').val();
		callServ('http://i.tpooo.net/api/wap/checkVerify', {
			mobile: mobile,
			type: 2,
			verifyCode: verifyCode
		}, function(data) {
			sessionStorage.setItem('regMobile', mobile);
			sessionStorage.setItem('regVerifyCode', verifyCode);
			//location.href = 'reg_submit.html';
			location.href = '/m/Users/reg_submit.php';

		});
	});

	// 注册
	$('.reg-submit-btn').click(function() {
		var mobile = sessionStorage.getItem('regMobile');
		var verifyCode = sessionStorage.getItem('regVerifyCode');
		if (!mobile || !verifyCode) {
			alert('手机号或验证码不存在,请重新输入.');
			return;
		}
		if (!nickNameValid() || !pwdValid()) {
			return;
		}
		callServ('http://i.tpooo.net/api/wap/mobileRegister', {
			mobile: mobile,
			verifyCode: verifyCode,
			nick: $('.reg-nick-name').val(),
			password: $('.reg-pwd').val()
		}, function(data) {
			location.href=data.datas.callback_url;
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
				if (failFn)
					failFn(data);
				else
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