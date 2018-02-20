'use strict'

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");


var close = document.getElementById("closeBtn");
var overlay = document.getElementById("myOverlay");
btn.onclick = function (e) {
  modal.style.display = "block";
  overlay.style.display = "block";
}

close.onclick = function (e) {
  modal.style.display = "none";
  overlay.style.display = "none";
}
modal.keyCode = function (e) {
  if (e.keyCode === 27 (e.target == modal)){
    overlay.style.display = 'none';
    modal.style.display = 'none';
   
  }
    // overlay.style.display = "none";
    // modal.style.display = "none";
  
}
overlay.onclick = function (e) {
  overlay.style.display = "none";
  modal.style.display = "none";
};









