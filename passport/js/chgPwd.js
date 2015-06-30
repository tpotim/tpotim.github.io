(function() {
	$.fn.togglePassword = function(options) {
		var s = $.extend($.fn.togglePassword.defaults, options),
			input = $(this);

		$(s.el).bind(s.ev, function() {
			"password" == $(input).attr("type") ?
				$(input).attr("type", "text") :
				$(input).attr("type", "password");
		});
	};

	$.fn.togglePassword.defaults = {
		ev: "click"
	};
})();


$(function() {

	$(".click-clear-text").on("click", function() {
		var var_text = $(".clear-relative #icon_prefix").val();
		var label_text = $(".clear-relative label").text();
		if (label_text == var_text) {
			return false;
		} else {
			$(".clear-relative #icon_prefix").val(' ');
			$(".clear-relative label").removeClass("active");
		}
	});

	$('#password-cont').togglePassword({
		el: '#togglePassword'
	});

	// 发送验证码倒计时
	$('.send-code-btn').click(function() {
		var _this = $(this);
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
	});


	// 发送验证码
	$('.send-code-btn').click(function() {
		callServ('http://i.tpooo.net/api/wap/sendSms', {
			mobile: $('.pwd-mobile').val(),
			type: 3
		}, function(data) {

		});

	});

	// 校验验证码
	$('.check-code-btn').click(function() {
		var mobile = $('.pwd-mobile').val();
		var verifyCode = $('.pwd-verify-code').val();
		callServ('http://i.tpooo.net/api/wap/checkVerify', {
			mobile: mobile,
			type: 3,
			verifyCode: verifyCode
		}, function(data) {
			sessionStorage.setItem('chgPwdMobile', mobile);
			sessionStorage.setItem('chgPwdVerifyCode', verifyCode);
			location.href = 'chg_pwd_submit.html';
		});
	});

	// 修改密码
	$('.chg-pwd-submit-btn').click(function() {
		callServ('http://i.tpooo.net/api/wap/resetPwd', {
			mobile: sessionStorage.getItem('chgPwdMobile'),
			verifyCode: sessionStorage.getItem('chgPwdVerifyCode'),
			password: $('.new-pwd').val()
		}, function(data) {
			alert('ok, go next');
		});
	});



	// 调用后台服务
	function callServ(url, data, done, fail) {
		$.ajax({
			url: 'http://passport.tpooo.net/uc_client/send.php',
			type: 'POST',
			dataType: 'json',
			data: {
				url: url,
				method: 'POST',
				datas: JSON.stringify(data),
			}
		}).done(function(d) {
			if (1 === d.status) {
				done(d);
			} else {
				alert(d.message);
			}
		}).fail(function(err) {
			if (fail) fail(err);
		});
	}
});