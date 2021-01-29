let money = 15000;
let income = 'Фриланс';
let addExpenses = 'Интернет, такси, коммуналка';
let deposit = true;
let mission = 1000000;
let period = 6;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
let budgetDay = money / 30;
console.log('Дневной бюджет: ' + budgetDay + ' рублей');