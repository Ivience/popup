$(document).ready(function() {
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      var modalBack = $('.modal__back');
      modalOverlay.addClass('modal__overlay--visible');
      modalDialog.addClass('modal__dialog--visible');
      modalBack.addClass('modal__back--visible');
      $(document).on('keydown', function(e) {
          if (e.which === 27) {
              modalOverlay.removeClass('modal__overlay--visible');
              modalDialog.removeClass('modal__dialog--visible');
              modalBack.removeClass('modal__back--visible');
          }
      });
  }

  function closeModal(event) {
      event.preventDefault();
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      var modalBack = $('.modal__back');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
      modalBack.removeClass('modal__back--visible');
  }
  $('.form').each(function() {
      $(this).validate({
          errorClass: "invalid",
          messages: {
              name: {
                  required: "Пожалуйста, введите название организации",
                  minlength: "Название должно состоять минимум из двух символов",
              },
              adress: {
                required: "Пожалуйста, введите адрес",
                minlength: "Пожалуйста, введите полный адрес"
            },
              kpp: {
                required: "Пожалуйста, введите КПП",
                minlength: "Пожалуйста, введите полностью"
            },
              inn: {
                required: "Пожалуйста, введите ИНН",
                minlength: "Пожалуйста, введите полностью"
            },
              email: {
                  required: "Пожалуйста, введите Ваш email",
                  email: "Email должен быть формата name@domain.com"
              },
              phone: {
                  required: "Пожалуйста, введите Ваш телефон",
                  minlength: "Телефон должен быть формата +7 999 999 99 99"
              },
          },
      });
  });
  var customOptions = {
      onKeyPress: function(val, e, field, options) {
          if (val.replace(/\D/g, '').length === 2) {
              val = val.replace('8', '');
              field.val(val);
          }
          field.mask("+7 999 999 99 99", options);
      },
  };
  $("input[name='phone']").mask("+7 999 999 99 99", customOptions);
});