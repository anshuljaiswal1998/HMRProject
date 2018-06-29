(function () {
	var introEl = $('div.intro');
	introHeading = introEl.find('h1').height();
	windowH = $(window).height();

	introEl.css('padding',(windowH - introHeading)/2 + 'px 0');

	$(document).on('scroll',function(){
		introEl.slideUp(1000,function(){$(document).off('scroll'); });
	});

})();