'use strict';
/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let numInt = parseInt(1);
if (numInt >= 0 && numInt <= 9) {
  console.log(
    numInt + Number(String(numInt) + String(numInt)) + Number(String(numInt) + String(numInt) + String(numInt)),
  );
  //Если число в диапазоне от 0 до 9, то в консоль выводится сумма равная n + nn + nnn , где n не перемножаются, а конкатенируются
} else {
  console.log('Ошибка'); //Если число вне диапазона от 0 до 9 в консоль выводится сообщение об ошибке
}
