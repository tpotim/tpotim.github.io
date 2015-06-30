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
	$('.reg-send-code').click(function() {
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
	$('.reg-send-code').click(function() {
		callServ('http://i.tpooo.net/api/wap/sendSms', {
			mobile: $('.reg-mobile').val(),
			type: 2
		}, function(data) {
			//location.href = 'reg_submit.html';
		});
		
	});

	// 校验验证码
	$('.reg-check-btn').click(function() {
		var mobile = $('.reg-mobile').val();
		var verifyCode = $('.reg-verify-code').val();
		callServ('http://i.tpooo.net/api/wap/checkVerify', {
			mobile: mobile,
			type: 2,
			verifyCode: verifyCode
		}, function(data) {
			sessionStorage.setItem('regMobile', mobile);
			sessionStorage.setItem('regVerifyCode', verifyCode);
			location.href = 'reg_submit.html';
		});
	});

	// 注册
	$('.reg-submit-btn').click(function() {
		callServ('http://i.tpooo.net/api/wap/mobileRegister', {
			mobile: sessionStorage.getItem('regMobile'),
			verifyCode: sessionStorage.getItem('regVerifyCode'),
			nick: $('.reg-nick-name').val(),
			password: $('.reg-pwd').val()
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
			if (d.status) {
				done(d);
			} else {
				alert(d.message);
			}
		}).fail(function(err) {
			if (fail) fail(err);
		});
	}
});