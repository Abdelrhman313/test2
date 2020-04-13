/*$, document, window*/

var $, window;

//Slider Height

$(function () {
    'use strict';
    var windowH = $(window).height(),
        upperH = $(".upper_bar").innerHeight(),
        navH = $(".navbar").innerHeight();

    $(".carousel_part, .slide,.carousel-item").height(windowH - (upperH + navH));


    //Gallary 

    $(".gallary ul li").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".shuffle-imgs .row .col-lg-3").css("display", "block");
            $(".shuffle-imgs .row").css('display', "flex");
        } else {
            $(".shuffle-imgs .row .col-lg-3").css("display", "none");
            $(".shuffle-imgs .row").css('display', "inline-block");
            $($(this).data('class')).parent().css('display', "block");
        }
    });

});
