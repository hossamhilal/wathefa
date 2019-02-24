/*global $ */
$(document).ready(function ($) {
    'use strict';

    $('.show-boxx #grid').click(function(){
        $('.show-boxx .all-job-info').addClass('col-md-4');
        $('.show-boxx .all-job-info').addClass('grid');
        // $('.show-boxx').addClass('padding-10');
        $('.show-boxx .all-job-info').removeClass('col-xs-12');
        $('.show-boxx .all-job-info .box').removeClass('row');
    });
    
    $('.show-boxx #list').click(function(){
        $('.show-boxx .all-job-info').removeClass('col-md-4');
        $('.show-boxx .all-job-info').removeClass('grid');
        // $('.show-boxx').removeClass('padding-10');
        $('.show-boxx .all-job-info').addClass('col-xs-12');
        $('.show-boxx .all-job-info .box').addClass('row');
    });
    
    $('.multi-select').select2();
    $('.nice-select').niceSelect();
    
    $('.company--jobs .applied-job ul a').click(function(e){
        e.preventDefault();
        $('.company--jobs .applied-job ul a i').toggleClass('wished');
    })

    $('.whish--list-btn').click(function(){
        $(this).toggleClass('active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass("navbar-fixed-top");
        }
        else {
            $('.header').removeClass("navbar-fixed-top");
        }
    });

    $(".range-slider").each(function() {
        var rangeSlider = $(this),
            from = rangeSlider.siblings(".from"),
            to = rangeSlider.siblings(".to"),
            fromTo = rangeSlider.siblings(".from, .to")
        rangeSlider.slider({
            isRTL: true,
            range: true,
            min: rangeSlider.data("min"),
            max: rangeSlider.data("max"),
            values: [rangeSlider.data("value1"), rangeSlider.data("value2")],
            slide: function(event, ui) {
                to.val(-ui.values[0]);
                from.val(-ui.values[1]);
            }
        });
        to.val(-rangeSlider.slider("values", 0));
        from.val(-rangeSlider.slider("values", 1));

        fromTo.on("keyup", function() {
            var rangeSlider = $(this).siblings(".range-slider");
            if (parseInt(to.val()) > parseInt(from.val())) {
                rangeSlider.slider({
                    values: [parseInt(-to.val()), parseInt(-from.val())]
                });
            }
        });
    });

    $('.similare-owl').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    
    


});

