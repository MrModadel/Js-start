
let admin;
let name;
name = "Джон";
admin = name;
console.log(admin);
/* баланс */
let balance = 25000;
/* расходы */
let car = 4480;
let food = 890;
/* даходы */
let invoice = 5500;
let stock = 4200;
/* вычесление */
let expenses_bal = balance - (car + food) ;
let profits = expenses_bal + invoice + stock;
/* итог */
let totalBalance = `Итог ${profits}`;
console.log(totalBalance);