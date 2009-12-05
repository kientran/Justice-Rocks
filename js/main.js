$(function(){
	
		$("#schedule-button").css({
			opacity: 0.3
		});
		$("#music-button").css({
			opacity: 0.3
		});
		$("#speakers-button").css({
			opacity: 0.3
		});
		$("#faq-button").css({
			opacity: 0.3
		});
	
        $("#tab-buttons div.button").click(function(){
        	
        	$clicked = $(this);
        	
        	// if the button is not already "transformed" AND is not animated
        	if ($clicked.css("opacity") != "1" && $clicked.is(":not(animated)")) {
        		
        		$clicked.animate({
        			opacity: 1,
        			borderWidth: 5
        		}, 600 );
        		
        		// each button div MUST have a "xx-button" and the target div must have an id "xx" 
        		var idToLoad = $clicked.attr("id").split('-');
        		
        		//we search trough the content for the visible div and we fade it out
        		$("#content").find("div:visible.body").fadeOut("fast", function(){
        			//once the fade out is completed, we start to fade in the right div
        			$(this).parent().find("#"+idToLoad[0]).fadeIn();
        		})
        	}
        	
        	//we reset the other buttons to default style
        	$clicked.siblings(".button").animate({
        		opacity: 0.3,
        		borderWidth: 1
        	}, 600 );
        	
        });
	});