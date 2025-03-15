'use strict';
/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/
console.log(digitalRoot(123))
function digitalRoot(number) {
  return number > 9 ? digitalRoot(number % 10 + Math.floor(number / 10)) : number;
}

export { digitalRoot };
