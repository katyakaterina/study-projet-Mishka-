'use strict'

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var overlay = document.getElementsByClassName("overlay")[0];
var close = document.getElementsByClassName("modal-ctg__btn")[0];

btn.onclick = function (e) {
modal.style.display = "block";
overlay.style.display = "block";
}

close.onclick = function (e) {
modal.style.display = "none";
overlay.style.display ="none";


close.keyCode = function(e) {
    if(e.keyCode === 27, (event.target == modal)) {
        overlay.style.display = "none";
    }},


overlay.onclick = function(e) {///должно закрываться по подложке((
if (event.target == modal){
modal.style.display = "none";
}
}
};
