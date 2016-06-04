
$( document ).ready(function() {

	


	changeOffset();








	$(window).bind('scroll',function(e){
		//console.log("scrolling");
		changeOffset();
   		parallaxScroll();
	});




                

	

	$( window ).resize(function() {
		console.log("its resizing")
		console.log($('body').scrollTop());

		
	});
});



function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#headFixed').css('top',(0-(scrolled*.50))+'px');
}


function changeOffset(){
	var scrollPosition = $('body').scrollTop();
	var offsetTop = $('#head').height();
	if (scrollPosition >= offsetTop){
		console.log("true");
		$('nav').addClass('affix');
	}
	else{
		$('nav').removeClass('affix');
	}
	

}

