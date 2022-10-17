$(function () {
    let nav = $("#nav");
    let header = $("#header");
    let headerH = header.height()+100;
    let scrollPoss = $(window).scrollTop();
    let menu = $("#menu");
    let burgerToggle = $("#burgerToggle");
    let burgerItem = $("#burgerItem");

    checkScroll(scrollPoss, headerH);

    $(window).on("scroll resize", function () {
        scrollPoss = $(this).scrollTop();

        checkScroll(scrollPoss, headerH);
    });

    function checkScroll(scrollPoss, headerH) {
        if (scrollPoss > headerH ) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    }

    // animate
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        menu.removeClass("active");
        burgerItem.removeClass("active");

        $("html, body").animate({
            scrollTop: elementOffset
        }, 800);
    });

    // Burger
    burgerToggle.click(function (event) {
        event.preventDefault();

        menu.toggleClass("active");
        burgerItem.toggleClass("active");
        nav.toggleClass("active");
    });

    // Search
    $(".search__img").click(function(event) {
        event.preventDefault();
        
        $(".search, .search__txt").toggleClass("active");
    });

    $(".search__txt, .search").click(function (event) {
        event.preventDefault();
    });

    // Slick
    let slick = $("#team__slick")

    slick.slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 988,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

});