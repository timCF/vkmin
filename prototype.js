document.body.style.display = "none";
main = function(){
	[
	    "ads_left",
	    "page_header",
	    "left_blocks",
	    "im_nav_wrap",
	    "l_ads",
	    "l_ap",
	    "chat_onl_wrap",
	    "im_sound_controls",
	    "im_dialogs_summary",
	    "l_set",
	    "l_nws",
	    "l_nwsf",
	    "l_gr",
	    "l_vid",
	    "l_ph",
	    "l_fr",
	    "feed_bar",
	    "feed_summary_wrap",
	    "pv_hh_fg",
	    "pv_hh"
	].forEach(
		function(id){
			var el = document.getElementById(id);
			if(el){el.style.display = "none"};
		});


    if(location.pathname == "/feed"){location.pathname = "/im"};


	[].forEach.call(
	    document.body.getElementsByTagName("*"),
	    function(el){
	        el.style.border = "none";
	    });

};

main();

setTimeout(function(){
	document.body.style.display = "block";
	setInterval(main,500);
},500);
