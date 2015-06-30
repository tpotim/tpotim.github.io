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

	/*$('.login-name,.login-pwd').focus(function() {
		$('.footer').hide();
	}).blur(function() {
		$('.footer').show();
	});*/

	$(window).on('resize', function() {
		if ($('input:focus').length > 0) {
			$('.footer').hide();
		} else {
			$('.footer').show();
		}
	});



	$('.login-remember').change(function() {
		/*if ($(this).prop('checked')) {
			$('.remember-tip').text('不记住密码');
		} else {
			$('.remember-tip').text('记住密码');
		}*/
	});

	// 登录
	$('.login-btn').click(function() {
		callServ('http://i.tpooo.net/api/wap/login', {
			name: $('.login-name').val(),
			password: $('.login-pwd').val(),
			remember: $('.login-remember').prop('checked') ? 1 : 0
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