$ = jQuery;

function initSliderBackgroundImage() {
    $('.paragraph--type--hero-slider-section .wrapper').each(function() {
        var heroImage = $(".field--name-field-slide-image img").attr("src");
        $(this).css("background-image", "url('" + heroImage + "')");
    });
}

function initEventBackgroundImage() {
    $('.field--name-field-event .event-square').each(function() {
       var eventImage = $(this).find(".field--name-field-event-image img").attr("src");
       $(this).css("background-image", "url('" + eventImage + "')");
    });
}

function initHideProfileElements() {
    $('.field--name-dynamic-block-fieldnode-people-profiles .views-row').each(function() {
        if ($(this).find('.views-field-field-webpage .field-content a').length) {
            $(this).find('.views-field-field-webpage').show();
        }
        else {
            $(this).find('.views-field-field-webpage').hide();
        }
    });
}

function initBannerImageBackground() {
    $(".group-header .field--name-field-banner-image").each(function() {
        var bannerImage = $(".field--name-field-banner-image img").attr("src");
        $(this).css("background-image", "url('" + bannerImage + "')");
    });
}

function initSquares() {
    resizeSquares();
}

function resizeSquares() {
    $('.event-square').each(function() {
        var imgWidth = $(this).width();
        $(this).height(imgWidth);
    })
}


$(document).ready(function() {
    initSliderBackgroundImage();
    initHideProfileElements();
    initBannerImageBackground();
    initEventBackgroundImage();
    initSquares();
});

$(window).resize(function() {
    resizeSquares();
});

$( document ).ajaxComplete(function() {
});