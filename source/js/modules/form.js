

$(function(){
    $(".form-main__btn").click(function(e) { //устанавливаем событие отправки для формы
        e.preventDefault();


        var form = $(this).parent('form'),
            ph = $('.form-main__inp_phone'),
            ph_ = ph.val(),
            rePhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
            reMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
            validPhone = rePhone.test(ph_),
            validMail = reMail.test(ph_),
            btn =  $(".form-main__btn"),
            inp = $('.form-main__inp'),
            title = $(".form-main__title");

// Проверка для email или телефона . отправляется как ['phone'] или ['email'] в les_landing.php , поэтому name для  соответствующего input либо phone, либо email
        if ( (validMail) || (validPhone) ) {

            var form_data = form.serialize(); //собираем все данные из формы

            console.log(form_data);

            $.ajax({
                type: "POST", //Метод отправки
                url: "http://maot.ru/podmsk/tilda/les_landing.php", //путь до php фаила отправителя
                data: form_data,
                beforeSend: function () {
                    btn.attr('disabled', true);
                    $(":submit", this).attr("disabled", "disabled");
                    title.html('Данные отправляются');
                },
                success: function () {
                    title.html("Спасибо за обращение, менеджер свяжется  с вами в ближайшее время");
                    $(form).hide();
                    inp.val('');
                    //код в этом блоке выполняется при успешной отправке сообщения
                },
                error : function () {
                    title.html("Ошибка отправки");
                }
            });
        }
        else {
            ph.css({'border': '2px solid #ab1717'});
        }
    });
});

//очистка полей форм после перезагрузки

var clearvalue = function () {
    var order = document.getElementsByTagName("form");
    if (order) {
        order.value = null;
        $('button[type=submit]').prop('disabled', false);
    }
};
window.onload = clearvalue;

