// let money = 15000;
// let income = 'Фриланс';
// let addExpenses = 'Интернет, такси, коммуналка';
// let deposit = true;
// let mission = 1000000;
// let period = 6;

// console.log(typeof(money));
// console.log(typeof(income));
// console.log(typeof(deposit));
// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + ' рублей');
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));
// let budgetDay = money / 30;
// console.log('Дневной бюджет: ' + budgetDay + ' рублей');



let money = prompt('Ваш месячный доход');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let expenses3 = prompt('Во сколько это обойдется?');
let expenses4 = prompt('Во сколько это обойдется?');
let period = 6;
let mission = 1000000;
let budgetMonth = money - expenses1 - expenses2;
let goal = mission / budgetMonth;

console.log(typeof Number((money)));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length, "12");
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('бюджет на месяц: ' + budgetMonth);
console.log('Цель будет достигнута за ' + Math.round(goal) + ' месяцев(-а)');
let budgetDay = Math.floor(budgetMonth / 30);
console.log('Дневной бюджет: ' + budgetDay + ' рублей');

if (budgetDay > 1200){
    console.log('У вас высокий уровень дохода');
} else if(budgetDay >= 600 && budgetDay < 1200){
    console.log('У вас средний уровень дохода');
}else if(budgetDay <= 599 && budgetDay > 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}else if(budgetDay < 0){
    console.log('Что то пошло не так');
}