$(function(){
    $(".form-spectarif__btn").click(function(e) { //устанавливаем событие отправки для формы

        e.preventDefault();


        var form = $(this).parent('form');
        var ph = $('.form-spectarif__inp-phone');
        var ph_ = ph.val();

        if (ph_!='') {
            $('.form-spectarif__inp-phone').css({'border': '0 none'});

            var form_data = form.serialize(); //собираем все данные из формы
            $.ajax({
                type: "POST", //Метод отправки
                url: "http://maot.ru/podmsk/tilda/les_landing.php", //путь до php фаила отправителя
                data: form_data,
                beforeSend: function () {
                    $(".form-spectarif__btn").attr('disabled', true);
                    $(":submit", this).attr("disabled", "disabled");
                    $(".section-form-title").html('Данные отправляются');
                },
                success: function () {
                    $(".section-form-title").html("Спасибо за обращение, менеджер свяжется  с вами в ближайшее время");
                    $(form).hide();
                    //код в этом блоке выполняется при успешной отправке сообщения

                }
            });
        }
        else {
            $('.form-spectarif__inp-phone').css({'border': '2px solid #ab1717'});
        }
    });
});


//Форма - обратный звонок по клику на номер телефона
$(function() {

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    if($(window).width() >= 800) {
        $('#phone-form_link').click( function(event){  //открытие модального окна
             var where = $(this).attr('data-where');
            event.preventDefault();
            $('#overlay').fadeIn(400,
                function(){
                    $('.phone-form_wrap')
                        .css('display', 'block')
                        .animate({opacity: 1, top: '50%'}, 200);
                    $('#phone-form').find('input[name=where]').val(where);
                });
        });
    }


    /* Зaкрытие мoдaльнoгo oкнa */
    $('#phone-forml_close, #overlay').click( function(){
        $('.phone-form_wrap')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    //отправка формы

    $('.phone-form_btn').on('click', function(e){
        e.preventDefault();

        var ph = $('.phone-form_inp[name=phone]');
        var ph_ = ph.val();

        if (ph_!='') {
            $('.phone-form_inp').css({'border': '0 none'});
            $.ajax({
                url  : '/feedback/phone_click_form',
                data : $('#phone-form').serialize(),
                type : 'POST',
                beforeSend : function()
                {
                    $(".phone-form_btn").attr('disabled', true);
                    $(":submit", this).attr("disabled", "disabled");
                    $(".phone-form_title").html('Данные отправляются');
                },
                success : function()
                {
                    $(".phone-form_title").html("Спасибо за обращение, менеджер свяжется  с вами в ближайшее время");
                    $('#phone-form').hide();

                    $('.goo_conversion').hide().html('<iframe src="/feedback/goo_conversion?goo"></iframe>');
                    if(yaID) {  yaID.reachGoal('goal_zapros_0');yaID.reachGoal('goal_zapros_1'); yaID.reachGoal('goal_allgoal_0');  }
                    ga('send', 'event', 'goal_allgoal_', 'goal_allgoal');
                    ga('send', 'event', 'goal_zapros_1'+'_', 'goal_zapros_1');
                    m2p();
                },

                error : function () {
                    $(".phone-form_title").html("Ошибка отправки");
                }

            });
        }
        else {
            $('.phone-form_inp').css({'border': '2px solid #ab1717'});
        }

    });


});

//$('input[name=phone]').mask("+7 (999) 999-99-99");

    $('#form-30min__link').click( function(event){  //открытие модального окна
        var where = $(this).attr('data-where');
        event.preventDefault();
        $('#form-30min_overlay').fadeIn(400,
            function(){
                $('.form-30min_wrap')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '10%'}, 200);
                $('#form-30min').find('input[name=where]').val(where);
            });
    });



/* Зaкрытие мoдaльнoгo oкнa */
$('#form-30min_close, #form-30min_overlay').click( function(){
    $('.form-30min_wrap')
        .animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#form-30min_overlay').fadeOut(400);
            }
        );
});

$('.popup-container_img').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {enabled:true}
    // other options
});

var touch = $('.touch-menu');
var menu = $('.nav');

$(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
});
$(window).resize(function(){
    var wid = $(window).width();
    console.log(wid);
    if(wid > 800 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});


