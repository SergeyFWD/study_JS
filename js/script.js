'use strict';

const adv = document.querySelector('.adv');
const book = document.querySelectorAll('.book');
const bookFix = document.querySelectorAll('.book > h2');
const body = document.querySelector('body');
const chapterBookTwo = book[0].querySelectorAll('li');
const chapterBookFive = book[5].querySelectorAll('li');
const bookSix = book[2].querySelectorAll('li');

// Исправление загаловка.
bookFix[4].textContent = "Книга 3. this и Прототипы Объектов";

// Замена заднего фона
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Удаление Рекламы
adv.remove();

// Востановление порядка Книг.
book[0].before(book[1]);
book[2].before(book[4]);
book[2].before(book[3]);
book[2].before(book[5]);

// Востановление порядка глав. Книга 2.
chapterBookTwo[9].after(chapterBookTwo[2]);
chapterBookTwo[3].after(chapterBookTwo[6]);
chapterBookTwo[6].after(chapterBookTwo[8]);

// Востановление порядка глав. Книга 5.
chapterBookFive[3].before(chapterBookFive[9]);
chapterBookFive[4].after(chapterBookFive[2]);
chapterBookFive[7].after(chapterBookFive[5]);

//Добавление "Глава 8" к Шестой книге.
book[2].insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');

