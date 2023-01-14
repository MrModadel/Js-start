
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
console.log(`Баланс: ${balance}`);
let car_fd = car + food;
let expenses_bal = balance - car_fd;
console.log(`Расходы: ${car_fd}` );
let inc_stock = invoice + stock;
let profits = expenses_bal + inc_stock;
console.log(`Придал: ${inc_stock}`);
let cl_money = inc_stock - car_fd;
console.log(`Чистая прибыл: ${cl_money}`);
/* итог */
let totalBalance = profits;
console.log(`Итог: ${totalBalance}`);