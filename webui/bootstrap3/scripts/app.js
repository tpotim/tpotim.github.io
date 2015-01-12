$(document).ready(function () {
	// 滚动监听
	$('body').scrollspy({ target:'.bs-docs-sidebar'});
	// 附加导航
	$('.affix-top').affix({
		offset: {
			top: 100
		}
	});

	// 激活工具提示
	$(".tooltip-demo").tooltip({selector: '[data-toggle="tooltip"]',container: "body"});
	$(".tooltip-test").tooltip();
	// 激活弹出框
	$(".popover-demo").popover({selector: '[data-toggle="popover"]',container: "body"}); 	
	$(".popover-test").popover(); 
	$(".bs-docs-popover").popover();
	// stateful button
	$("#loading-example-btn").on("click", function() {
            var b = $(this);
            b.button("loading"), setTimeout(function() {
                b.button("reset")
            }, 3000)
        });
});