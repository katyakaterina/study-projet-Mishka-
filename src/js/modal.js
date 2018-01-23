'use strict'

var modal = document.getElementById('myModal');
var buyBtn = document.querySelector('.catalog-card__btn');


buyBtn.addEventListener('click', function(e){
    modal.classList.toggle('open');
});


