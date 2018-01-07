$(document).ready(function () {

  $('.player__btn').click(function (event) {
    event.preventDefault();
    $('.overlay').fadeIn(400, // анимируем показ обложки
      function () { // далее показываем мод. окно
        $('.modal-ctg')
          .css('display', 'block')
          .animate({
            opacity: 1,
            top: '50%'
          }, 200);
      });
  });

  // закрытие модального окна
  $('.modal-ctg__btn, .overlay').click(function () {
    $('.modal-ctg')
      .animate({
          opacity: 0,
          top: '45%'
        }, 200, // уменьшаем прозрачность
        function () { // пoсле aнимaции
          $(this).css('display', 'none'); // скрываем окно
          $('.overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });

});



