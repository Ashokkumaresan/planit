$(document).ready(function(e){
reload();
$('.arrow .down').click(function(e){	
	  $("html, body").animate({ scrollTop: (e.pageY+100) },1000);
});
$('.arrow .up').click(function(e){	
	  $("html, body").animate({ scrollTop: (e.pageY-$(window).height()*2) },1000);
});

$(window).resize(function(e){
	reload();
});
$(window).scroll(function(e){
	console.log("scroll");
});

function reload(){
	if($(window).width()<912){
		$('.list').css('float','none');
		$('h3,p').css('float','none');
		//$('p').css('float','none');
		$('h1').css('font-size','40px');
		$('h3').css('font-size','20px');
		}
		else{
			$('.list').css('float','left');
		$('h3,p').css('float','left');
		//$('p').css('float','left');
		$('h1').css('font-size','50px');
		$('h3').css('font-size','30px');
		}
		var _l=$('.layout').height();
	$('.pad').each(function(index,value){
		_p=$(value).height();
		if(_p>_l){
			var _d=$(value).parents()[1];
			$(_d).css("height",_p+"px");
		}

	});
}
});