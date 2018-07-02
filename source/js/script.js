'use strict';

//-----------Открытие фейкового окна отправки формы----------------//

var modal = document.querySelector(".main-form__submit");
var popup = document.querySelector(".popup");

modal.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup__open");
});

//-----------Плавный скролл. К сожалению, не работает в старых браузерах, а без сторонних бибилиотек сделать это довольно проблематично----------------//

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});