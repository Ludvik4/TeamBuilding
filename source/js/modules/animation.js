// var animateCss = (function(){
//     var checkDistance = function(scrollTop, elem){
//         var offset = elem.offset().top;
//         var windowMargin = Math.ceil($(window).height() / 2);
//         var topBorder = offset - scrollTop - windowMargin;
//         var bottomEdge = elem.outerHeight(true) + offset;
//         var bottomBorder = scrollTop + windowMargin - bottomEdge;
//
//         console.log(windowMargin);
//         return topBorder <= 0 && bottomBorder <=0;
//     }
//     var animationActions = {
//         orangeBig: function(){
//             $('.animate').addClass('orangeBig');
//         }
//     }
//     return {
//         init: function(){
//             $(window).on('scroll', function(){
//                 var scrollTop = $(window).scrollTop();
//                 if (checkDistance(scrollTop, $('.animate'))){
//                     animationActions['orangeBig']();
//                 }
//             });
//         }
//     }
// }());
//
// animateCss.init();

// $(function () {
//
//     var    items = $('.types__item'),
//             counter = 0,
//             timer,
//             blockTop = $('.section_types').offset().top,
//             $window = $(window),
//             scrollOffset = 400;
//
//     function each(){
//         var item = items.eq(counter).find('.types__svg');
//         item.addClass('orangeBig');
//         counter++;
//         timer = setTimeout(each, 200);
//
//         if (counter > items.length) {
//             timer && clearTimeout(timer);
//
//         }
//        // console.log(counter);
//     }
//
//     $window.on('scroll', function() {
//        timer && clearTimeout(timer);
//         var top = $window.scrollTop();
//         var height = $window.height();
//
//
//         if (top + height > blockTop + scrollOffset) {
//             each();
//         }
//
//     });
//
// });


//Переключение по разделам и пунктам меню в Программах/ ТАБЫ 
// $(function () {
//     $('.sidebar__link').on('click', function(e) {
//         //e.preventDefault();
//
//         var
//             $this = $(this),
//             sidebarItem = $this.closest('.sidebar__item'),
//             contentItem = $('.content_prog__item'),
//             itemPosition = sidebarItem.index();
//
//         contentItem.eq(itemPosition)
//             .add(sidebarItem)
//             .addClass('active')
//             .siblings()
//             .removeClass('active');
//
//
//     });
//
// });

//
// $(document).ready(function() {
//
//     $(".title").animated("fadeInRight");
//     $(".content").animated("fadeIn");
//
//     $("#types").waypoint(function () {
//
//         $(".types__svg").each(function (index) {
//             var ths = $(this);
//             setTimeout(function () {
//                 ths.addClass("orangeBig");
//             }, 550 * index);
//         });
//
//     }, {
//         offset: "60%"
//     });
//
//
// });