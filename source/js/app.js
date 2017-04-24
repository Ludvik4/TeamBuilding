
// Magnific Popup - контейнеру с фотками добавить класс  .popup-container_img

$(document).ready(function() {
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

    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });

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
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });

  // пролистывание слайдера
    $(".top-season__list").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next');
        },
        swipeRight: function() {
            $(this).parent().carousel('prev');
        },
        //Default is 50px, set to 0 for demo so any distance triggers swipe
        threshold: 50
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

    var ID = window.location.hash,
        idCont = ID.replace('#', ''),
        link = $('.sidebar__link');

if (ID) {

    console.log($('#' + idCont));
    $('.content__item').removeClass('active');
    $('.content_prog__list').removeClass('active');
    $('#' + idCont).addClass('active');
    $('#' + idCont).closest('.content_prog__list').addClass('active');

    $('body, html').scrollTop($('#' + idCont).offset().top - 80);

    link.each(function(){

        if (ID == $(this).attr('href')) {
            console.log($(this).attr('href'));
            $(this).addClass('active').addClass('active').siblings().removeClass('active');
            $(this).closest('.sidebar__list').addClass('active').siblings().removeClass('active');
            $('.sidebar_prog__main-item').eq($(this).closest('.sidebar__list').index()).addClass('active').siblings().removeClass('active');
        }

    });

    $(window).on('scroll', function (){
            $('.sidebar__list').singlePageNav({
                'currentClass' : "active",
                offset : 80,
                updateHash : true
            });
     });



} else {

    if($(window).width() <= 1139) {
        $('.sidebar__list').singlePageNav({
            'currentClass' : "active",
            offset : 0,
            updateHash : true
        });
    } else {
        $('.sidebar__list').singlePageNav({
            'currentClass' : "active",
            offset : 0
        });

    }

}


    $('.sidebar_prog__main-link').on('click', function(e) {
        e.preventDefault();

        var
            $this = $(this),
            sidebarItem = $this.closest('.sidebar_prog__main-item'),
            contentItem = $('.content_prog__list'),
            sidebarList = $('.sidebar__list'),
            itemPosition = sidebarItem.index();
        var currentId = contentItem.eq(itemPosition).data('section');
        window.location.hash = currentId;

         contentItem.eq(itemPosition)
            .add(sidebarItem)
            .addClass('active')
            .siblings()
            .removeClass('active');

        sidebarList.eq(itemPosition)
            .addClass('active')
            .siblings()
            .removeClass('active');

        $(window).scrollTop(0);

// Повторное подключение SinglePage, т.к. при смене табов не срабатывает автоматически

            $('.sidebar__list').singlePageNav({
                'currentClass' : "active",
                updateHash : true
            });

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

    $( '.sidebar__link').on('click', function (e) {
        e.preventDefault();
        var sidebar = $(this).closest('.sidebar_prog');
        if (sidebar.hasClass('active')) sidebar.removeClass('active');

        var curID = $(this).attr('href').replace('#', '');
        window.location.hash = curID;


    });

    // $('.sidebar_prog__main-link').on('click', function (e) {
    //     e.preventDefault();
    //     console.log('click');
    //     if ($('.sidebar_prog').hasClass('active')) $('.sidebar_prog').removeClass('active');
    // });

    $('.sidebar__button').on('click', function (e) {
        e.preventDefault();
        var trigger = $(this);
        var sidebar = trigger.closest('.sidebar_prog');
        sidebar.toggleClass('active');
    });

});

// SIDEBAR END

// touch-swipe sidebar button
$(function() {
    $(".sidebar__button").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            $(this).closest('.sidebar_prog').toggleClass('active');
        }

    });

});
