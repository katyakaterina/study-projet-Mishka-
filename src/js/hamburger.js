'use strict'

var buttonMenu = document.getElementById("buttonMenu");
var menu = document.getElementById("menuList");
var iconOpen = document.getElementById("openButton");
var iconClose = document.getElementById("closeButton");

buttonMenu.addEventListener("click", function (e) {
(menu.classList.toggle("open")); 
        
   if (e) {
     (iconClose.style.display = 'block');
      return (iconOpen.style.display = 'none'); 
    }
      else {
     (iconOpen.style.display = 'block');
     return (iconClose.style.display = 'none');
   }
});

