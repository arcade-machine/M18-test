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

//-----------Для формы----------------//

var form = document.querySelector(".main-form");

var inputName = form.querySelector(".main-form__input--name");
var inputEmail = form.querySelector(".main-form__input--email");
var inputPhone = form.querySelector(".main-form__input--phone");

var legendName = form.querySelector(".main-form__legend--name");
var legendEmail = form.querySelector(".main-form__legend--email");
var legendPhone = form.querySelector(".main-form__legend--phone");

var fieldsetName = form.querySelector(".main-form__fieldset--name");
var fieldsetEmail = form.querySelector(".main-form__fieldset--email");
var fieldsetPhone = form.querySelector(".main-form__fieldset--phone");

//-----------Легенда появляется на фокусе инпута----------------//

var inputOnFocus = function(input, legend, fieldset) {
    input.addEventListener("focus", function (evt) {
        evt.preventDefault();
        legend.classList.remove("hidden");
        fieldset.style.border = "0.05vw solid #f9572e";
    });
    input.addEventListener("invalid", function (evt) {
        evt.preventDefault();
        legend.classList.remove("hidden");
        fieldset.style.border = "0.05vw solid #f9572e";
    });
};

inputOnFocus(inputName, legendName, fieldsetName);
inputOnFocus(inputEmail, legendEmail, fieldsetEmail);
inputOnFocus(inputPhone, legendPhone, fieldsetPhone);

//-----------Легенда убирается, если инпут не в фокусе----------------//

var inputOutOfFocus = function(input, legend, fieldset) {
    input.addEventListener("focusout", function (evt) {
        evt.preventDefault();
        legend.classList.add("hidden");
        fieldset.style.border = "0.05vw solid #ebebeb";
    });
};

inputOutOfFocus(inputName, legendName, fieldsetName);
inputOutOfFocus(inputEmail, legendEmail, fieldsetEmail);
inputOutOfFocus(inputPhone, legendPhone, fieldsetPhone);

//-----------Слайдер----------------//

var sliderOneRadio = document.querySelector(".slider-controls__radio-button--slider-one");
var sliderTwoRadio = document.querySelector(".slider-controls__radio-button--slider-two");
var sliderThreeRadio = document.querySelector(".slider-controls__radio-button--slider-three");
var sliderControls = document.querySelector(".slider-controls");
var leftControl = sliderControls.querySelector(".slider-controls__item--left");
var rightControl = sliderControls.querySelector(".slider-controls__item--right");

leftControl.addEventListener('click', function () {
    if (sliderTwoRadio.checked) {
        sliderTwoRadio.removeAttribute('checked');
        sliderOneRadio.setAttribute('checked', 'true');
    } else if (sliderOneRadio.checked) {
        sliderOneRadio.removeAttribute('checked');
        sliderThreeRadio.setAttribute('checked', 'true');
    } else if (sliderThreeRadio.checked) {
        sliderThreeRadio.removeAttribute('checked');
        sliderTwoRadio.setAttribute('checked', 'true');
    }
});
rightControl.addEventListener('click', function () {
    if (sliderTwoRadio.checked) {
        sliderTwoRadio.removeAttribute('checked');
        sliderThreeRadio.setAttribute('checked', 'true');
    } else if (sliderOneRadio.checked) {
        sliderOneRadio.removeAttribute('checked');
        sliderTwoRadio.setAttribute('checked', 'true');
    } else if (sliderThreeRadio.checked) {
        sliderThreeRadio.removeAttribute('checked');
        sliderOneRadio.setAttribute('checked', 'true');
    }
});

