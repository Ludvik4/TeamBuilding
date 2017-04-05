//
//
// (function () {
//     var articleAll = $('.content_prog__item');
//     var linksAll = $('.sidebar__link');
//     if (articleAll.length === 0)
//         return;
//     showSection(window.location.hash, false);
//
//     function showSection(section, isAnimate) {
//         var target = section.replace('#', '');
//         var reqSection = articleAll.filter('[data-section="' + target + '"]');
//         var duration = 500;
//         if (reqSection.length === 0)
//             return;
//         var reqSectionPos = reqSection.offset().top;
//         if (isAnimate) {
//             $('body, html').animate({
//                 scrollTop: reqSectionPos - 120
//             }, duration);
//         } else {
//             $('body, html').scrollTop(reqSectionPos);
//         }
//     }
//
//     function checkSection() {
//         articleAll.each(function (i, item) {
//             var article = $(item);
//             var topEdge = article.offset().top - 300;
//             var bottomEdge = topEdge + article.height();
//             var topScroll = $(window).scrollTop();
//             if (topEdge < topScroll && bottomEdge > topScroll) {
//                 var currentId = article.data('section');
//                 var reqLink = linksAll.filter('[href="#' + currentId + '"]');
//                 reqLink.closest('.sidebar__item').addClass('active').siblings().removeClass('active');
//                 window.location.hash = currentId;
//             }
//         });
//     }
//
//     $(window).on('scroll', function () {
//         checkSection();
//     });
//     $(document).on('click', '.sidebar__link', function (e) {
//         e.preventDefault();
//         var sidebar = $(this).closest('.sidebar__item');
//         if (sidebar.hasClass('active')) sidebar.removeClass('active');
//         showSection($(this).attr('href'), true);
//         checkSection();
//     });
//
// })();