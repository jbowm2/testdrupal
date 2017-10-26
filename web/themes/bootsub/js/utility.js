$ = jQuery;

var breakpoint;

function initCurrentBootstrapBreakpoint() {
	resizeCurrentBootstrapBreakpoint();
}

function resizeCurrentBootstrapBreakpoint() {
	if ($(".device-xs").is(":visible")) {
		breakpoint = "xs";
	}
	if ($(".device-sm").is(":visible")) {
		breakpoint = "sm";
	}
	if ($(".device-md").is(":visible")) {
		breakpoint = "md";
	}
	if ($(".device-lg").is(":visible")) {
		breakpoint = "lg";
	}
}

function checkOrientation() {
  var orientation;
  if($(window).width()/$(window).height() <= 1.32){
    orientation = "portrait";
  } else {
    orientation = "landscape";
  }
  return orientation;
}

function tallestHeight(targets) {
	var tallestHeight = 0;
	targets.each(function() {
		if ($(this).outerHeight() > tallestHeight) {
			tallestHeight = $(this).outerHeight();
		}
	});
	return tallestHeight;
}

function initSVGs() {
	$('img.svg').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			jQuery.get(imgURL, function(data) {
					var $svg = jQuery(data).find('svg');
					if(typeof imgID !== 'undefined') {
							$svg = $svg.attr('id', imgID);
					}
					if(typeof imgClass !== 'undefined') {
							$svg = $svg.attr('class', imgClass+' replaced-svg');
					}
					$svg = $svg.removeAttr('xmlns:a');

					$img.replaceWith($svg);
			}, 'xml');
	});
}

function utilGetUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

// When the page first loads.
$(document).ready(function() {
	initCurrentBootstrapBreakpoint();
	initSVGs();
	setTimeout(function() {
		$("body").addClass("loaded");
	}, 1000);
});

// When everything on the page has loaded.
$(window).bind("load", function() {
	$("body").addClass("loaded");
});

// When the page is scrolled
$(window).scroll(function() {

});

// When the page is resized
$(window).resize(function() {
	resizeCurrentBootstrapBreakpoint();
});