$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	
	if (scroll >= 50) {	
		$(".detailArea").addClass("fixed");
	} else {
		
		$(".detailArea").removeClass("fixed");
	}
	
	
	 if($(this).scrollTop() > $("#footer").offset().top - ($(".infoArea").height() + 250)){
            $(".detailArea ").css("top", "0");
       
        }
});


