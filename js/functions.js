/*
Created by Alejandro Palacios https://github.com/AlexSoicalap
*/
$(function() {
	/*Define some constants */
	const ARTICLE_TITLE =  document.title;
	const ARTICLE_URL = encodeURIComponent(window.location.href);
	const MAIN_IMAGE_URL = encodeURIComponent($('meta[property="og:image"]').attr('content'));

	$('.share-fb').click(function(){
		open_window('http://www.facebook.com/sharer/sharer.php?u='+ARTICLE_URL, 'facebook_share', 0);
	});

	$('.share-twitter').click(function(){
		open_window('http://twitter.com/share?url='+ARTICLE_URL, 'twitter_share', 1);
	});

	$('.share-linkedin').click(function(){
		open_window('https://www.linkedin.com/shareArticle?mini=true&url='+ARTICLE_URL+'&title='+ARTICLE_TITLE+'&summary=&source=', 'linkedin_share', 1);
	});

	$('.share-whatsapp').click(function(){
		open_window('https://api.whatsapp.com/send?text='+ARTICLE_URL, 'whatsapp_share', 1);
	});

	function open_window(url, name, t){
		var w = 640, h;
		var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
	    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

	    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	    if (t == 0){
	    	h= height;
	    }else {
	    	h = height/2;
	    }

	    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	    var top = ((height / 2) - (h / 2)) + dualScreenTop;

		var params= "";
		if (t == 0){
			params = 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + 0 + ', left=' + left;	
		}else {
			params = 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left;	
		}
		/*window.open(url, name, 'height=320, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no');*/

		window.open(url, name, params);
	}
});