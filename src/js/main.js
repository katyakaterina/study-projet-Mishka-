'use strict'

var modal = document.getElementById("modal");
var btn = document.getElementById("btn");
var open = document.querySelector('open');
var close = document.getElementById("closeBtn");
var overlay = document.getElementById("overlay");

btn.addEventListener('click', function(){
  modal.style.display = 'block'
  overlay.style.display = 'block'
});
overlay.addEventListener('click', function(){
  modal.style.display = 'none'
  overlay.style.display = 'none'
});
close.addEventListener('click', function(){
  modal.style.display = 'none'
  overlay.style.display = 'none'
})
window.addEventListener('keydown', function(e){
  if (e.keyCode === 27){
    modal.style.display = 'none'
    overlay.style.display = 'none'
  }
});









