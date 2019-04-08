let money,
    time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: "false",
}

let a1  = prompt("Введите обязательную статью расходов в этом месяце");

appData.expenses[a1] = prompt("Во сколько обойдется?");

alert (appData.budget / 30);
console.log (appData.expenses);
