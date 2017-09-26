// JavaScript Document
// 模仿苹果官网的banner轮播swiper插件
// 
autoplay=true;
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,
	progress: true,
	speed: 1000,
	paginationClickable: true,
	loop: true,
	onProgressChange: function(swiper) {
		for (var i = 0; i < swiper.slides.length; i++) {
			var slide = swiper.slides[i];
			var progress = slide.progress;
			var translate;
			if (progress > 0) {
				translate = progress * 0.9 * swiper.width;
				scale = 1 - progress * 0.1
				if (progress > 1) {
					scale = 0.9
				}
				txtPositionX = 0
				txtPositionY = progress * 30 + 'px'

			} else {
				translate = 0;
				scale = 1
				txtPositionX = -progress * 1000 + 'px'
				txtPositionY = 0
			}

			var txts = slide.querySelectorAll('.txt');
			for (var j = 0; j < txts.length; j++) {
				swiper.setTransform(txts[j], 'translate3d(' + txtPositionX + ',' + txtPositionY + ',0)');
			}
			swiper.setTransform(slide, 'translate3d(' + (translate) + 'px,0,0) scale(' + scale + ')');

		}
	},
	onTouchStart: function(swiper) {
		for (var i = 0; i < swiper.slides.length; i++) {
			swiper.setTransition(swiper.slides[i], 0);
			var txts = swiper.slides[i].querySelectorAll('.txt');
			for (var j = 0; j < txts.length; j++) {
				swiper.setTransition(txts[j], 0);
			}
		}
	},
	onSetWrapperTransition: function(swiper, speed) {
		for (var i = 0; i < swiper.slides.length; i++) {
			swiper.setTransition(swiper.slides[i], speed);
			var txts = swiper.slides[i].querySelectorAll('.txt');
			for (var j = 0; j < txts.length; j++) {
				swiper.setTransition(txts[j], speed);
			}
		}
	},
	onSlideChangeStart: function(swiper) {
		if (autoplay) {
			if (swiper.activeLoopIndex == 0) {
				// 轮播完一轮清除标识
				$('.pagination li').removeClass('current');
				
				// 如果自动轮播过了一轮则停止自动轮播
				if ($('.pagination li').eq(0).hasClass('replace')) {
					autoplay=false;
					mySwiper.stopAutoplay();
				}

				$('.pagination li').eq(0).removeClass('replace');
			}
			if (swiper.activeLoopIndex == 1) {
				// 第一张图初次轮播后,状态解除,并打上一个下一轮停止轮播的标识
				$('.pagination li').eq(0).removeClass('firstCurrent current').addClass('replace');
			}
			// 自动轮播过,就打上一个标识
			$('.pagination li').eq(swiper.activeLoopIndex).addClass('current');
		} else {
			$('.pagination li').removeClass('current firstCurrent click');
			// 非自动轮播情况下,滑动到哪张,哪张就上个标识
			$('.pagination li').eq(swiper.activeLoopIndex).addClass('current');
		}

	},
	onFirstInit: function(swiper) {
		// 初始化初次轮播
		$('.pagination li').eq(0).addClass('firstCurrent');
	},

	onAutoplayStop: function() {
		// 停止自动轮播
		autoplay=false;
		$('.autoplay').removeClass('autoplay');
	},
})

// Set Z-Indexes
for (var i = 0; i < mySwiper.slides.length; i++) {
	mySwiper.slides[i].style.zIndex = i;
}
// 点击左翻页
$('.arrow-left').on('click', function(e) {
	e.preventDefault();
	mySwiper.swipePrev();
});
// 点击右翻页
$('.arrow-right').on('click', function(e) {
	e.preventDefault();
	mySwiper.swipeNext();
});
// 鼠标放在banner上或者触摸开始，停止autoplay
$(".pagination li").on('touchstart mousedown', function(e) {
	e.preventDefault();
	if (autoplay) {
		autoplay=false;
		mySwiper.stopAutoplay();
		$(this).addClass('click');
	}

	mySwiper.swipeTo($(this).index());
});
window.onresize = function() {
	mySwiper.reInit();
}