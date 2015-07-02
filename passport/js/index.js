if(device.desktop()){
	location.href = 'http://passport.tpooo.net/';
}
$(function() {

	// 清除输入
	$(".click-clear-text").on("click", function() {
		$(".clear-relative #icon_prefix").val('');
		$(".clear-relative label").removeClass("active");
	});

	// 判断软键盘是否出现
	$(window).on('resize', function() {
		if ($('input:focus').length > 0) {
			$('.footer').hide();
		} else {
			$('.footer').show();
		}
	});

	// 用户名有效性
	function nameValid() {
		var len = $('.login-name').val().length;
		if (len >= 2 && len <= 50) {
			$('.input-name-tip').addClass('hide');
			return true;
		} else {
			$('.input-name-tip').removeClass('hide');
			return false;
		}
	}

	// 检查密码有效性
	function pwdValid() {
		//if (/^[a-zA-Z0-9~!@#\$%\^&\*\-_\+=\.]{6,20}$/.test(pwd)) {
		var len = $('.login-pwd').val().length;
		if (len >= 6 && len <= 20) {
			$('.input-pwd-tip').addClass('hide');
			return true;
		} else {
			$('.input-pwd-tip').removeClass('hide');
			return false;
		}
	}

	// 登录
	$('.login-btn').click(function() {
		if (!nameValid() || !pwdValid()) {
			return;
		}
		callServ('http://i.tpooo.net/api/wap/login', {
			name: $('.login-name').val(),
			password: $('.login-pwd').val(),
			remember: $('.login-remember').prop('checked') ? 1 : 0
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