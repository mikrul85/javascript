let menuItem = document.querySelectorAll('.menu-item');
    menu = document.querySelector('.menu');
    menu5 = document.createElement('li');
    title = document.querySelector('.title');
    column = document.querySelectorAll('.column');
    adv = document.querySelector('.adv');
    promt = prompt('Ваше отношение к технике Apple');
    promptClass = document.querySelector('.prompt');

menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(menu5);
document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

menu5.className = "menu-item";
menu5.innerHTML = 'Пятый пункт';
title.innerHTML = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

promptClass.innerHTML = promt;