'use strict';
/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let vowels = 'aeiouy';
let VowelsCount = 0;
let ConsonantsCount = 0;
for(let i = 0; i < word.length; i++){
    if(vowels.includes(word[i])){
        VowelsCount ++;
    }else{
        ConsonantsCount++ ;
    }

}
let vowelsAndConsonantsResult =`${word} contains ${VowelsCount} vowels and ${ConsonantsCount} consonants`;
console.log(vowelsAndConsonantsResult)
//export { vowelsAndConsonantsResult };
