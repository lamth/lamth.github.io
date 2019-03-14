$(function(){
	
	$('head').append('<link rel="stylesheet" href="style-switcher/style-switcher.css" type="text/css" />');	
	$('head').append('<script type="text/javascript" src="style-switcher/jquery.cookie.js"></script>');	
		
	//Style container
	var switcher = $('<div class="switcher"><span class="switch-h">Style Switcher <b>Only for demo</b></span><span class="switch"><i class="fa fa-gear"></i></span><h4>Color Options</h4><hr><div class="s-color"><a href="#" data-code="default"></a><a href="#" data-code="black"></a><a href="#" data-code="blue"></a><a href="#" data-code="brown"></a><a href="#" data-code="green"></a><a href="#" data-code="lblue"></a></div></div>');
	
	$('body').append(switcher);
			
		// Display after some time 
	$(".switcher .switch-h").delay("1500").fadeIn(3000);
		
	setTimeout(function(){ $('.switcher .switch-h').fadeOut() }, 10000);	

	$('.switch').click(function() {
		var $slidebox=$('.switcher');
		// var $s_hide=1;
		if($slidebox.css('left')=="-251px"){
		  $slidebox.animate({left:0},300);
		}
		else{
		  $slidebox.animate({left:-251},300);
		  // $.cookie('switch', $s_hide);
		}
	});    
	
	
	// Color Changer
	// By Cookie
	if($.cookie('mikiColor')!=null){
		var color_code = $.cookie('mikiColor');
		$('link[id="color_theme"]').attr('href', 'static/css/color/'+color_code+'.css');
	}
	// By click
	$('.s-color a').click(function(e){
		e.preventDefault();
		var color_code = $(this).attr('data-code');
		$('link[id="color_theme"]').attr('href', 'static/css/color/'+color_code+'.css');
		$.cookie('mikiColor', color_code);
	});
	
	
});