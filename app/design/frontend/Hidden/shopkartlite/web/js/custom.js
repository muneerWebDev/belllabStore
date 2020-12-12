requirejs(['jquery', 'shopkartliteowlcarousel'], function ($, owlCarousel) {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $("header.page-header").addClass("scrolled");
        } else {
            $("header.page-header").removeClass("scrolled");
        }
    });

    jQuery(window).load(function () {
        jQuery(".loader-wrapper").fadeOut("slow", function() {
            jQuery(this).remove();
            jQuery("body").css("overflow","auto");
        });
    });

    jQuery(".home-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1198, 1],
        itemsDesktopSmall: [1023, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: [767, 1],
        itemsMobile: [479, 1],
        pagination: true,
        navigationText: ["<div class='left-arrow'><i class='fa fa-arrow-left'></i></div>", "<div class='right-arrow'><i class='fa fa-arrow-right'></div>"],
        navigation: true,
        autoPlay: 5000,
        dots: true,
        afterAction: function (el) {
            //remove class active
            this
                .$owlItems
                .removeClass('active')

            //add class active
            this
                .$owlItems //owl internal $ object containing items
                .eq(this.currentItem)
                .addClass('active')
        }
    });
    jQuery(".home-slider li").show();

    jQuery(".testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [767, 2],
        itemsTabletSmall: [639, 1],
        itemsMobile: [479, 1],
        pagination: false,
        navigationText: ["<div class='prev-arrow'><i class='fa fa-angle-left'></i></div>", "<div class='next-arrow'><i class='fa fa-angle-right'></div>"],
        navigation: true,
        autoPlay: true,
    });
    jQuery(".testimonial-slider .item").show();

    $(".box-tocart .field.qty .qty-btn").click(function () {
        var qty = $(this).siblings("#qty").val();
        if ($(this).hasClass("add")) {
            qty++;
        }
        if ($(this).hasClass("subs")) {
            if (!(qty < 1)) {
                qty--;
            }
        };
        $(this).siblings("#qty").val(qty);
    });

    jQuery(".home-slider-wrapper .home-slider-main .home-slider .owl-wrapper .owl-item").css("height", jQuery(window).height());
    jQuery(window).on("orientationchange",function(){
        jQuery(".home-slider-wrapper .home-slider-main .home-slider .owl-wrapper .owl-item").css("height", jQuery(window).height())
    });
});
