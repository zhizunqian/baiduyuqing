$(function() {
	var num = 0,
		f = true;

	//width height
	var width = $(window).width();
	var height = $(window).height();
	$(window).resize(function() {
		width = $(window).width();
		height = $(window).height();
		$('.section').css({
			width: width,
			height: height
		});
		$('#zTop').css({
			width: width,
			height: height,
			marginTop: num * (-height),
		})
	})
	$(window).resize();

	//preventDefault
	$(document).mousedown(function(e) {
		e.preventDefault();
	})
	$(document).mousemove(function(e) {
		e.preventDefault();
	})

	//touch
	touch.on('#zTop', 'swipeup', function() {

		if (num == $('.section').length - 1) {
			return;
		}
		if (!f) {
			return;
		}

		f = false;

		$(".ship").eq(num - 1).css({
			left: '200px',
		});

		$('.left').eq(num - 1).css({
			transform: 'translateX(-200px)',
		});
		$('.right img').eq(num - 1).css({
			transform: 'translateX(200px)',
		});


		num++;

		$('#zTop').css({
			marginTop: num * (-height),
		});
		$('.btnbox .btn').removeClass('active').eq(num).addClass('active');

	})

	touch.on('#zTop', 'swipedown', function() {

		if (num == 0) {
			return;
		}
		if (!f) {
			return;
		}

		f = false;

		$(".ship").eq(num - 1).css({
			left: '200px',
		});

		$('.left').eq(num - 1).css({
			transform: 'translateX(-200px)',
		});
		$('.right img').eq(num - 1).css({
			transform: 'translateX(200px)',
		});

		num--;

		$('#zTop').css({
			marginTop: num * (-height),
		});
		$('.btnbox .btn').removeClass('active').eq(num).addClass('active');
	})

	$("#zTop")[0].addEventListener("webkitTransitionEnd", function() {
		$(".ship").eq(num - 1).css({
			left: '300px',
		});

		$('.left').eq(num - 1).css({
			transform: 'translateX(0)',
		});
		$('.right img').eq(num - 1).css({
			transform: 'translateX(0)',
		});

		f = true;
	})

	$("#zTop")[0].addEventListener("transitionEnd", function() {
		$(".ship").eq(num - 1).css({
			left: '300px',
		});

		$('.left').eq(num - 1).css({
			transform: 'translateX(0)',
		});
		$('.right img').eq(num - 1).css({
			transform: 'translateX(0)',
		});

		f = true;
	})

	//btn click
	$('.btnbox .btn').on('click', function() {
		var index = $(this).index();
		num = index;
		$('#zTop').css({
			marginTop: num * (-height),
		});
		$('.btnbox .btn').removeClass('active').eq(num).addClass('active');

	})

	//btm_img click
	$('.btm_img').on('click', function() {
		num++;
		$('#zTop').css({
			marginTop: num * (-height),
		});
		$('.btnbox .btn').removeClass('active').eq(num).addClass('active');
		/*if (num == 3) {
			$(this).hide()
		}*/
	})

	//mousewheel
	$.prototype.extend({
		mouseWheel: function(upfun, downfun) {
			this.each(function(index, obj) {
				if (obj.addEventListener) {
					obj.addEventListener("mousewheel", fun, false); //火狐
					obj.addEventListener("DOMMouseScroll", fun, false); //谷歌
				} else {
					obj.attachEvent("onmousewheel", fun);
				}

				function fun(e) {
					var ev = e || event;
					if (ev.detail == -3 || ev.wheelDelta == 120) { //wheelDelta在IE  向上滚
						if (upfun) {
							upfun.call(obj, ev);
						}
					} else if (ev.detail == 3 || ev.wheelDelta == -120) {
						if (downfun) {
							downfun.call(obj, ev);
						}
					}
					if (ev.preventDefault) {
						ev.preventDefault(); //阻止默认浏览器动作(W3C)
					} else {
						ev.returnValue = false; //IE中阻止函数器默认动作的方式
					}
				}
			})
			return this;
		}
	});


	$(window).mouseWheel(function() {
		if (num == 0) {
			return;
		}
		if (!f) {
			return;
		}

		f = false;

		$(".ship").eq(num - 1).css({
			left: '200px',
		});

		$('.left').eq(num - 1).css({
			transform: 'translateX(-200px)',
		});
		$('.right img').eq(num - 1).css({
			transform: 'translateX(200px)',
		})

		num--;

		$('#zTop').css({
			marginTop: num * (-height),
		});
		$('.btnbox .btn').removeClass('active').eq(num).addClass('active');
	}, function() {
		if (num == $('.section').length - 1) {
			return;
		}
		if (!f) {
			return;
		}

		f = false;

		$(".ship").eq(num - 1).css({
			left: '200px',
		});

		$('.left').eq(num - 1).css({
			transform: 'translateX(-200px)',
		});
		$('.right img').eq(num - 1).css({
			transform: 'translateX(200px)',
		});

		num++;

		$('#zTop').css({
			marginTop: num * (-height),
		});
		$('.btnbox .btn').removeClass('active').eq(num).addClass('active');

	})
})