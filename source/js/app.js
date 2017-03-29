//пролистывание на мобильных устройствах====================
$(function () {

    $(".carousel-inner").swipe( {
        //Generic swipe handler for all directions
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next');
        },
        swipeRight: function() {
            $(this).parent().carousel('prev');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 75
    });

});

//слайдер=======================================
$(function () {
    $(".top-season__list").slick({
        // normal options...
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        //appendArrows: $('.arrows'),
        //prevArrow: '<button type="button" class="arrow my-next"><svg class="arrow__svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/sprite.svg#right-chevron"></use></svg></button>',
        //nextArrow: '<button type="button" class="arrow my-prev"><svg class="arrow__svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/sprite.svg#left-chevron"></use></svg></button>',

        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 500,
            settings: {
                slidesToShow: 2,
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
});

//счетчик при доскролливании до элемента=======================

$(function () {
    var options = {
        useEasing : true,
        useGrouping : true,
        separator : ',',
        decimal : '.',
        prefix : '',
        suffix : ''
    };
    window.onscroll = function () {
        var winScroll = window.pageYOffset;
        if (winScroll > innerHeight / 3) {

            var demo = new CountUp("myTargetElement", 0, 2602, 0, 2.5, options);
            demo.start();

        }
    };
});
