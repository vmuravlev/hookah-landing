'use strict';

$('#submit-button').click(function () {
    let inputName = $('#input_name');
    let inputPhone = $('#phone1');
    let inputTime = $('#time');
    let hasError = false;
    let loader = $('.loader');
    let orderTitle = $('.order-title');
    let orderText = $('.order-text');
    let orderForm = $('.order-form');
    let orderSuccess = $('.order-success');


    $('.error-input').hide();

    if (!inputName.val()) {
        inputName.next().show();
        hasError = true;
        inputName.css('border-color', 'red');
    }
    if (!inputPhone.val()) {
        inputPhone.next().show();
        hasError = true;
        inputPhone.css('border-color', 'red');
    }
    if (!inputTime.val()) {
        inputTime.next().show();
        hasError = true;
        inputTime.css('border-color', 'red');
    }
    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: 'POST',
            url: "https://testologia.ru/checkout",
            data: {
                name: inputName.val(),
                phone: inputPhone.val(),
                product: inputTime.val()
            }
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    orderTitle.hide();
                    orderText.hide();
                    orderForm.hide();
                    orderSuccess.css('display', 'flex');
                } else {
                    alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                }
            });
    }
})

