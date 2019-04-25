'use strict';

// Получаю элемент по id
let start = document.querySelector('#start');

let resultTable = document.body.querySelector(".result-table").children,
    resultTableValues = {},
    a = 0;
for (let i = 0; i < resultTable.length; i++) {
    if (i%2 != 0) {
        resultTableValues[a++] = resultTable[i];
    }
}

// Другой способ
// let resultTable = document.body.querySelector(".result-table").children, resultTableValues = {};
// for (let ii = 0; ii < resultTable.length; ii++) {
//     let nameClass = resultTable[ii].className,
//     nameSplit = nameClass.split("-");
//     if (nameSplit[1] == "value") {
//         resultTableValues[nameClass] = resultTable[ii];
//     }
// }

// Получаю все элементы  с заданным классом.
let input = document.querySelectorAll('.expenses-item'),

    //Получаю конкретный элемент по тегу.
    button1 = document.querySelectorAll('button')[0],
    button2 = document.querySelectorAll('button')[1],
    button3 = document.querySelectorAll('button')[2],

    opt = document.querySelectorAll('.optionalexpenses-item'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    
    