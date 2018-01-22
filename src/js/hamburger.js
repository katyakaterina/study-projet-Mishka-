'use strict'

var buttonMenu = document.getElementById("buttonMenu");
var menu = document.getElementById("menuList");
var menuClosed = document.getElementsByClassName("hamburger-btn closed");
var menuOpened = document.getElementsByClassName("hamburger-btn opened");
var itemClosed = document.getElementsByClassName("menu-top__list closed");
var itemOpened = document.getElementsByClassName("menu-top__list opened");
var iconOpen = document.getElementsByClassName("openBtn");
var iconClose = document.getElementsByClassName("closeBtn");

buttonMenu.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(menu.classList.contains("open"));
    menu.classList.toggle("open");
});