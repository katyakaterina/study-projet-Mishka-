'use strict'

var modal = document.getElementById('MyModal');
var buyBtn = document.querySelector('.catalog-card__btn');


buyBtn.addEventListener('click', function(e){
    modal.classList.toggle('open');
});


