
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var overlay = document.getElementsByClassName("overlay")[0];
var close = document.getElementsByClassName("modal-ctg__btn")[0];

btn.onclick = function () {
modal.style.display = "block";
overlay.style.display = "block";
}

close.onclick = function () {
modal.style.display = "none";
overlay.style.display ="none";
}
overlay.onclick = function(event) {///должно закрываться по подложке((
if (event.target == modal){
modal.style.display = "none";
}
}




//$(".modal-ctg").each(function () {

//});

//$(".player__btn").on('click', function (e) {
  //e.preventDefault();
  //e.stopImmediatePropagation;

  //var $this = $(this),
    //modal = $($this).data("modal");

  //$(modal).parents(".overlay").addClass("open");
  //setTimeout(function () {
   // $(modal).addClass("open");
  //}, 350);

  //$(document).on('click', function (e) {
    //var target = $(e.target);

    //if ($(target).hasClass("overlay")) {
      //$(target).find(".modal-ctg").each(function () {
        //$(this).removeClass("open");
      //});
      //setTimeout(function () {
        //$(target).removeClass("open");
      //}, 350);
    //}

  //});

//});

//$(".modal-ctg__btn").on('click', function (e) {

  //e.preventDefault();
  //e.stopImmediatePropagation;

  //var $this = $(this),
    //modal = $($this).data("modal");

  //$(modal).removeClass("open");
  //setTimeout(function () {
    //$(modal).parents(".overlay").removeClass("open");
  //}, 350);

//});







//$(document).ready(function () { // вся мaгия пoсле зaгрузки стрaницы
  //$('.player__btn').click(function (event) { // лoвим клик пo ссылки с id="go"
    //event.preventDefault(); // выключaем стaндaртную рoль элементa
    //$('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      //function () { // пoсле выпoлнения предъидущей aнимaции
        //$('.modal-ctg')
          //.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          //.animate({ opacity: 1, top: '50%' }, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
      //});
  //});
  ///* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  //$(' .overlay,.modal-ctg__btn').click(function () { // лoвим клик пo крестику или пoдлoжке
    //$('.modal-ctg')
      //.animate({ opacity: 0, top: '45%' }, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
      //function () { // пoсле aнимaции
        //$(this).css('display', 'none'); // делaем ему display: none;
        //$('.overlay').fadeOut(400); // скрывaем пoдлoжку
      //}
      //);
  //});
//});






