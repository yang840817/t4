// JavaScript Document
$(document).ready(function(){
	// product slidershow
	$("#owl-product").owlCarousel({
		items : 3,
		itemsDesktop : [1279,3],
		itemsDesktopSmall : [1023,2],
		itemsTablet : [767,1],
		itemsMobile : [479,1],
		navigation : false,
		slideSpeed : 800,
		paginationSpeed : 800,
		autoPlay : true,
		stopOnHover : true
	});
});



$(window).load(function() {
	// banner img height
	if($('.banner .imgbg img').css('display')=='none'){
	   $('.banner .imgbg').css('height',$('.banner .content').outerHeight());
	}else{
	   $('.banner .imgbg').css('height','');
	};
	
	// product word height
	var maxHeight = Math.max.apply(null, $('.product .intro').map(function(){
		 return $(this).outerHeight();
	}).get());
	$('.product .intro').css('height',maxHeight);
	
	// blog img height
	var number = $('.service .imgbg').length;
	var imgbg = $('.service .imgbg');
	var img = $('.service .imgbg img');
	for(var i=0;i<number;i++){
		if($(img).css('display')=='none'){
				$(imgbg[i]).css('height',$(imgbg[i]).prev().outerHeight()).css('background-image','url('+$(img[i]).attr('src')+')');
		}else{
				$(imgbg).css('height','').css('background-image','');
		};
	}
	
	// footer
	if(window.innerWidth>1023){
		var maxHeight = Math.max.apply(null, $('#footer .piece').map(function(){
		     return $(this).outerHeight(true);
		}).get());
		$('#footer .piece').css('height',maxHeight);
	}	
});

$(window).resize(function(){
	// banner img height
	if($('.banner .imgbg img').css('display')=='none'){
	   $('.banner .imgbg').css('height',$('.banner .content').outerHeight());
	}else{
	   $('.banner .imgbg').css('height','');
	};
	
	// product word height
	$('.product .intro').css('height','');
	var maxHeight = Math.max.apply(null, $('.product .intro').map(function(){
		 return $(this).outerHeight();
	}).get());
	$('.product .intro').css('height',maxHeight);
	
	// blog img height
	var number = $('.service .imgbg').length;
	var imgbg = $('.service .imgbg');
	var img = $('.service .imgbg img');
	for(var i=0;i<number;i++){
		if($(img).css('display')=='none'){
				$(imgbg[i]).css('height',$(imgbg[i]).prev().outerHeight()).css('background-image','url('+$(img[i]).attr('src')+')');
		}else{
				$(imgbg).css('height','').css('background-image','');
		};
	}
	
	// footer
	$('#footer .piece').css('height','');
	if(window.innerWidth>1023){
		var maxHeight = Math.max.apply(null, $('#footer .piece').map(function(){
		     return $(this).outerHeight(true);
		}).get());
		$('#footer .piece').css('height',maxHeight);

	}
});




