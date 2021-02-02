'use strict';

let money = +prompt('Ваш месячный доход', 50000);
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = +prompt('Введите обязательную статью расходов?');
let expenses2 = +prompt('Введите обязательную статью расходов?');
let expenses3 = +prompt('Во сколько это обойдется?');
let expenses4 = +prompt('Во сколько это обойдется?');
let period = 6;
let mission = 1000000;
let showTypeOf = function(data){
    console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getExpensesMonth = function() {
    return(expenses1 + expenses2);
};
console.log('Сумма обязательных расходов: ' + getExpensesMonth());

let getAccumulatedMonth = function() {
    return(money - expenses1 - expenses2 - expenses3 - expenses4);
};

let accumulatedMonth = getAccumulatedMonth();
let getTargetMonth = function() {
    return(mission / accumulatedMonth);
}

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('Цель будет достигнута за ' + Math.round(getTargetMonth()) + ' месяцев(-a)');
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Дневной бюджет: ' + budgetDay + ' рублей');

let getStatusIncome = function() {
    if (budgetDay > 1200){
        return ('У вас высокий уровень дохода');
    } else if(budgetDay >= 600 && budgetDay < 1200){
        return ('У вас средний уровень дохода');
    }else if(budgetDay <= 599 && budgetDay > 0){
        return ('К сожалению у вас уровень дохода ниже среднего');
    }else if(budgetDay < 0){
        return ('Что то пошло не так');
    }
};

console.log(getStatusIncome());