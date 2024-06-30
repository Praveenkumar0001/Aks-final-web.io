$(document).ready(function () {
    var slider = $(".owl-carousel");
    slider.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: true,
        navText: ["<i class='fa-solid fa-angles-left fa-fade'></i>", "<i class='fa-solid fa-angles-right fa-fade'></i>"],
        margin: 50,
        dots: true,
        loop: true,
        lazyLoad: true,
        autoHeight: true,
        responsive: {
            0: { items: 1 },       // For screens less than 480px
            768: { items: 2 },     // For screens between 576px and 767px
            992: { items: 3 },     // For screens between 768px and 991px
            1200: { items: 4 }     // For screens 992px and above
        }
    });
});
