$(function() {

    $('a[href="#user"]').click(function(e) {
        $('html, body').animate({
            scrollTop: $('#user').offset().top
        }, 'fast');
    });

    $('a[href="#comparison"]').click(function(e) {
        $('html, body').animate({
            scrollTop: $('#comparison').offset().top
        }, 'fast');
    });

    var checkboxMsg = 'Поставьте галочку';

    var validator = $('#license-form').validate({
      rules: {
        name: 'required',
        birthdate: 'required',
        passport: 'required',
        is_homo: 'required',
        is_pirate: 'required',
        is_atheist: 'required',
        is_oppo: 'required',
        is_human: 'required',
      },
      messages: {
        name: 'Укажите свое ФИО',
        birthdate: 'Укажите свою дату рождения',
        passport: 'Укажите свой паспорт',
        is_homo: checkboxMsg,
        is_pirate: checkboxMsg,
        is_atheist: checkboxMsg,
        is_oppo: checkboxMsg,
        is_human: checkboxMsg
      },
      submitHandler: function(form, e) {
        $('#hello').hide();
        $('#hello').hide();
        $('body > nav').hide();
        $('#user').hide();
        $('#wantmore').hide();
        $('#comparison').hide();
        $('#thankyou').show();
        $('#license').modal('hide');
        e.preventDefault();
      }
    });

    $('#license').bind('hide.bs.modal', function () {
        validator.resetForm();
    });

});