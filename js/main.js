'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1, expenses2;
let mission = 1000000;



let start = function() {
    
    do{
       money = prompt('Ваш месячный доход');
   }
   while (!isNumber(money));
};

start();

let showTypeOf = function(data){
    console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getExpensesMonth = function() {
    let sum = 0;
    let cool = 0;
    
    for (let i = 0;  i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?');
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?');
        } 
        
        do {
            cool = prompt('Во сколько это обойдется?');
        } while (!isNumber(cool));
        sum += +cool;
    }
    return(sum);
};


let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function() {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();
let getTargetMonth = function() {
    return(mission / accumulatedMonth);
}

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