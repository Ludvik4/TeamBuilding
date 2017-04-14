
// Magnific Popup - контейнеру с фотками добавить класс  .popup-container_img

$('.popup__img-link').magnificPopup({
    type: 'image',
    closeOnContentClick : true,
    zoom: {
        enabled: true,
        duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    }
});

$('.popup-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    closeOnContentClick : true,
    mainClass: 'mfp-fade'
    // other options
});


$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
});

// Гугл карты
$(function () {
    initMap();
    $('.contacts__path-link').on('click', function(e) {
        e.preventDefault();

        $(this).closest('.contacts__path').addClass('active').siblings().removeClass('active');
        initMap();
    });

});


// Мобильное меню (гамбургер)

$(function () {
    var touch = $('.touch-menu');
    var menu = $('.nav');
    var navIcon = $('#nav-icon');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
        navIcon.toggleClass('open');
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 992 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});


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

//слайдер для главной страницы=================================


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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }

            },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

        }, {

            breakpoint: 560,
            settings: {
                slidesToShow: 1,
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
    if ($('.section_advs').length) {
        var blockTop = $('.section_advs').offset().top;
        var CountUpFlag = 0;
        var $window = $(window);
        var scrollOffset = 200;

        $window.on('scroll', function() {
            var top = $window.scrollTop();
            var height = $window.height();
            if (top + height > blockTop + scrollOffset && CountUpFlag == 0) {
                var amount_adv1 = new CountUp("amount_adv1", 0, 98, 0, 3, options);
                amount_adv1.start();
                var amount_adv2 = new CountUp("amount_adv2", 0, 117, 0, 3.5, options);
                amount_adv2.start();
                var amount_adv3 = new CountUp("amount_adv3", 0, 185, 0, 4, options);
                amount_adv3.start();
                CountUpFlag = 1;
            }
        });
    }

});

$(window).on('scroll', function() {
    var top = $(window).scrollTop();

    if (top >= 0 && top <= 100 || top >= 900 ) {

            $(".types__svg").removeClass("orangeBig");


    }
});

// Animation
$(document).ready(function() {

    $(".title").animated("fadeInRight");
    $(".content").animated("fadeIn");


    $("#types").waypoint(function () {

        $(".types__svg").addClass("orangeBig");

    }, {
        offset: "60%"
    });
    $(".advs__desc").animated("fadeIn");

});

//Переключение по разделам и пунктам меню в Программах/ ТАБЫ
$(function () {
// Single page nav
    if($(window).width() <= 1139) {
        $('.sidebar__list').singlePageNav({
            'currentClass' : "active",
            offset : 100,
            updateHash : true
        });
    } else {
        $('.sidebar__list').singlePageNav({
            'currentClass' : "active",
            offset : 80
        });

    }

    $('.sidebar_prog__main-link').on('click', function(e) {
        e.preventDefault();


        var
            $this = $(this),
            sidebarItem = $this.closest('.sidebar_prog__main-item'),
            contentItem = $('.content_prog__list'),
            sidebarList = $('.sidebar__list'),
            itemPosition = sidebarItem.index();

        contentItem.eq(itemPosition)
            .add(sidebarItem)
            .addClass('active')
            .siblings()
            .removeClass('active');

        var currentId = contentItem.eq(itemPosition).data('section');
        window.location.hash = currentId;

        sidebarList.eq(itemPosition)
            .addClass('active')
            .siblings()
            .removeClass('active');

        $(window).scrollTop(0);

// Повторное подключение SinglePage, т.к. при смене табов не срабатывает автоматически
        if($(window).width() <= 1139) {
            $('.sidebar__list').singlePageNav({
                'currentClass' : "active",
                offset : 100,
                updateHash : true
            });
        } else {
            $('.sidebar__list').singlePageNav({
                'currentClass' : "active",
                offset : 80
            });
        }

    });


     var   articleAll =  $('.content_prog__list');

    articleAll.each(function (i, item) {
        var article = $(item),
            itemPosition = article.index(),
            sidebarMainList = $('.sidebar_prog__main-item'),
            articleId = article.data('section'),
            sidebarList = $('.sidebar__list'),
            winHash = window.location.hash.replace('#', '');

        if (winHash == articleId ) {

            article.addClass('active')
                .siblings()
                .removeClass('active');
            sidebarMainList.eq(itemPosition)
                .addClass('active')
                .siblings()
                .removeClass('active');
            sidebarList.eq(itemPosition)
                .addClass('active')
                .siblings()
                .removeClass('active');

            $(window).scrollTop(0);

        }

    });

});
