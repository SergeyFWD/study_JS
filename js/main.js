'use strict';

const calculate = document.getElementById('start');
const checkPoint = document.querySelector('#deposit-check');
const plusFirst = document.getElementsByTagName('button')[0];
const plusSecond = document.getElementsByTagName('button')[1];
const incomeItem = document.querySelectorAll('.additional_income-item');
const valueBudgetDay = document.getElementsByClassName('budget_day-value');
const valueBudgetMonth = document.getElementsByClassName('budget_month-value');
const valueTargetMonth = document.getElementsByClassName('target_month-value');
const valueIncomePeriod = document.getElementsByClassName('income_period-value');
const valueExpensesMonth = document.getElementsByClassName('expenses_month-value');
const valueAdditionalIncome = document.getElementsByClassName('additional_income-value');
const valueAdditionalExpenses = document.getElementsByClassName('additional_expenses-value');
const inputSalaryAmount = document.querySelector('.salary-amount');
const inputIncomeAmount = document.querySelector('.income-amount');
const inputTargetAmount = document.querySelector('.target-amount');
const inputPeriodSelect = document.querySelector('.period-select');
const inputExpensesAmount = document.querySelector('.expenses-amount');
const inputIncomeTitle = document.querySelector('.income-items .income-title');
const inputExpensesTitle = document.querySelector('.expenses-items .expenses-title');
const inputAdditionalExpensesItem = document.querySelector('.additional_expenses-item');

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
       do { money = prompt('Ваш месячный доход?', 50000);
      }
       while (isNaN(money) || money === '' || money === null);
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
      
      if(confirm('Есть ли у вас дополнительный источник зароботка?')){
        let itemIncome = prompt('Какой у вас дополнительный заработок ?', 'Таксую');
        if (itemIncome === null) {
          appData.asking();
        } while (isFinite(itemIncome)){
          itemIncome = prompt('Какой у вас дополнительный заработок', 'Таксую');}

        let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете ?', 10000);
        if (cashIncome === null) {
          appData.asking();
          }
          while (!isNumber(cashIncome)) {
          cashIncome = prompt('Сколько в месяц приносит дополнительный доход?', 10000);
        }
        appData.income[itemIncome] = cashIncome;
      }
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, Кредит');
        while (isFinite(addExpenses)){
          addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, Кредит');
        }
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.addExpenses = appData.addExpenses.map(function(item) {
              return item.trim();
            });
            appData.addExpenses = appData.addExpenses.map(function(item) {
              return item.slice(0, 1).toUpperCase() + item.slice(1);
            });
            console.log(appData.addExpenses.join(', '));

            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            for (let i = 0;  i < 2; i++) {

                let itemExpenses = prompt('Введите обязательную статью расходов?');
                let cashExpenses;
                cashExpenses = prompt('Во сколько это обойдется?');    
                do {
                  cashExpenses = prompt('Во сколько это обойдется ?');
                } while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
                  appData.expenses[itemExpenses] = cashExpenses;
              }
    },  
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
          appData.expensesMonth += +appData.expenses[key];
      }
      return appData.expensesMonth;
    },
    getBudget: function () {
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
      return appData.mission / appData.budgetMonth;
    },
  

    getStatusIncome: function () {
    if (appData.budgetDay > 1200){
        return ('У вас высокий уровень дохода');
    } else if(appData.budgetDay >= 600 && appData.budgetDay < 1200){
        return ('У вас средний уровень дохода');
    }else if(appData.budgetDay <= 599 && appData.budgetDay > 0){
        return ('К сожалению у вас уровень дохода ниже среднего');
    }else if(appData.budgetDay < 0){
        return ('Что то пошло не так');
    }
  },
  getInfoDeposit: function() {
    if(appData.deposit){
      appData.percentDeposit = prompt('Какой годовой % ?', '10');
      appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
    }
  },
  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
};


appData.asking();
appData.getBudget();
appData.getExpensesMonth();
console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0) {
  console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
} else {
  console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ' - ' + appData[key]);
}