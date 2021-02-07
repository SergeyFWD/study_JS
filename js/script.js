'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let start = function() {
    let num = 77;
    let cool = prompt('Угадай число от 1 до 100');

    if(isNumber(cool)) {
        cool = +cool;
        if (num === cool) {
            alert('Вы угодали число!');
            return(start());
        } else if(num < cool) {
            cool = alert('Загаданное число меньше');
        } else if(num > cool) {
            cool = alert('Загаданное число больше');
        }
    } else {
        alert('Введите число!');
    }
    return start();
};
start();

