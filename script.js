$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });



    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    var typed = new Typed(".typing", {
        strings: ["designer", "researcher", "UI/UX designer", "marketing agent"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.col__l').slice(0, 1).show()
    $('.load__bl').on("click", function () {
        $('.col__l:hidden').slice(0, 1).slideDown()

    });


    $('.image').slice(0, 2).show();
    $('#lmore').on('click', function (e) {
        e.preventDefault();
        $('.image:hidden').slice(0, 2).slideDown();
        if ($('.image:hidden').length == 0) {
            $('#lmore').text('No More Projects :(').addClass('nomore');
        }
    });




});


