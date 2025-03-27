'use strict';
/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  let vowels = wordsArr.map((el) => el.split('').filter(el => 'aeiou'.includes(el)).length);
  return wordsArr.toSorted((a, b) => vowels[wordsArr.indexOf(a)] - vowels[wordsArr.indexOf(b)]);
}
console.log(sortedByVowels(words))

export { sortedByVowels };
