'use strict';
/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

const minAge = 18; // step 1
const maxAge = 60; // step 2
let age = '20'; //step 3
if (typeof +age != 'number'){ // start step 4-1
  console.log('Incorrect data type')
} // end step 4-1
else if (age < minAge){
  console.log('You don\'t have access cause your age is '+ age + '.' +' It\'s less than '+ minAge) //start step 4-2
}
else if (age >= minAge && age <= maxAge){
  console.log('Welcome!')
}
else if (age > maxAge){
  console.log('Keep calm and look Culture channel')
}
else{
  console.log('Technical work')
} //end step 4-2