'use strict'

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var open = document.querySelector('open');
var close = document.getElementById("closeBtn");
var overlay = document.getElementById("myOverlay");

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









