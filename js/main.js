/*
	Main.js
		————Alexander's
*/

(function(){
	"use strict";  //JavaScript严格模式

	//页面等待
	$(window).load(function (e) {
    	$(".cover-all").remove();
	});

	/* ==================== 01. Menu toggle ==================== */
	$(function(){
		$('#toggle').click(function (e){
			e.stopPropagation();
		});
		$('html').click(function (e){
			if (!$('.toggle').is($(e.target))){
				$('#toggle').prop("checked", false);
			}
		});
	});

// 各个插件的初始化
/* Minified js in demo only */
$(".home-c-slider").bxSlider({
	mode:"horizontal",
	pager:false,
	controls:true,
	nextText:'<i class="bs-right fa fa-angle-right"></i>',
	prevText:'<i class="bs-left fa fa-angle-left"></i>'
});

$(".home-bg-slider").bxSlider({
	mode:"fade",
	auto:true,
	speed:1e3,
	pager:false,
	controls:false,
	nextText:'<i class="bs-right fa fa-angle-right"></i>',
	prevText:'<i class="bs-left fa fa-angle-left"></i>'
});

$(".home-bgc-slider").bxSlider({
	mode:"fade",
	pager:true,
	controls:true,
	nextText:'<i class="bs-right fa fa-angle-right"></i>',
	prevText:'<i class="bs-left fa fa-angle-left"></i>'
});

$(".quote-slider").bxSlider({
	mode:"horizontal",
	controls:false,
	adaptiveHeight:true
});

$(".img-slider").bxSlider({
	mode:"fade",
	pager:true,
	controls:true,
	nextText:'<i class="bs-right fa fa-angle-right"></i>',
	prevText:'<i class="bs-left fa fa-angle-left"></i>'
});

// 买家秀 控件事件
$(function(){
	var e=$(".buyers-slider");
	e.owlCarousel({
		pagination:false,
		navigation:false,
		items:4,
		itemsDesktop:[1e3,3],
		itemsTablet:[600,2],
		itemsMobile:[321,1]
	});

	$(".buyers-next").click(function(){
		e.trigger("owl.next")
	});
	$(".buyers-prev").click(function(){
		e.trigger("owl.prev")
	})
});

// 品牌故事 控件事件
$(function(){
	var e=$(".story-slider");
	e.owlCarousel({
		pagination:false,
		navigation:false,
		items:4,
		itemsDesktop:[1e3,3],
		itemsTablet:[600,2],
		itemsMobile:[321,1]
	});

	$(".story-next").click(function(){
		e.trigger("owl.next")
	});
	$(".story-prev").click(function(){
		e.trigger("owl.prev")
	})
});

// 产品 控件事件
$(function(){
	var e=$(".product-slider");
	e.owlCarousel({
		pagination:false,
		navigation:false,
		items:3,
		itemsDesktop:[1e3,3],
		itemsTablet:[600,2],
		itemsMobile:[321,1]}
		);

	$(".product-next").click(function(){
		e.trigger("owl.next")
	});
	$(".product-prev").click(function(){
		e.trigger("owl.prev")
	})
});

// 点击展现(惊喜优惠券彩蛋)
$(".promo-control").click(function(){
	$(".footer-promo").slideToggle(500);
	if($(".footer-promo").is(":visible")){
		$("html, body").animate({
			scrollTop:$(".footer-promo").offset().top},500)
	}
});

// 滚动条事件
$(function(){
	$(".scrollto").bind("click.scrollto",function(e){
		e.preventDefault();
		var t=this.hash,n=$(t);
		$("html, body").stop().animate({scrollTop:n.offset().top-0},800,"swing",function(){
			window.location.hash=t;

			
		})
	})
});

// 线下体验 尺寸自适应
$(document).ready(function(){
	$(".equal").children(".col").equalizeHeight();
	$(window).resize(function(){
		$(".equal").children(".col").equalizeHeight()
	})
});

// 两个图片弹出层，如果类名相同会窜相册
$(".popup").magnificPopup({
	type:"image",
	gallery:{enabled:true},  // 没有这个话就没有控件
	fixedContentPos:false,
	fixedBgPos:false,
	removalDelay:500,
	mainClass:"mfp-fade"
});
$(".popup-gallery").magnificPopup({
	type:"image",
	gallery:{enabled:true},
	fixedContentPos:false,
	fixedBgPos:false,
	removalDelay:300,
	mainClass:"mfp-fade"
});
// 视频、地图弹出层——如果用不上就可以删了
$(".popup-video, .popup-maps").magnificPopup({
	disableOn:700,
	type:"iframe",
	fixedContentPos:false,
	fixedBgPos:false,
	removalDelay:300,
	mainClass:"mfp-fade",
	preloader:false
});

// 视频自适应屏幕——如果用不上就可以删了
$(".responsive-video").fitVids()


})(jQuery);