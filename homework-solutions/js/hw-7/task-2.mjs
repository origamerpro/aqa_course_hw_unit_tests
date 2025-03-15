'use strict';
/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

console.log(isPalindrom(101))
function isPalindrom(word) {
  return typeof word != 'string' ? false : word.toLowerCase().split('').reverse().join('') == word.toLowerCase();
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/
console.log (findLongestWords('баба ба ба баба'))
function findLongestWords(sentence) {
  if (!sentence) return [];
  if (typeof sentence != 'string') return [];
  const check = sentence.replace(/ +/g, ' ').trim().split(' ');
   const result = [];
  for (let i = 0; i < check.length; i++) {
   if (i != 0){
    if (check[i].length === result[0].length) {
      result.push(check[i])
      continue
     }
    else if (check[i].length > result[0].length) {
      result.splice(0,[result.length],check[i])
      continue
    }
    } else {result.push(check[i]);
      continue
    }
  }
  return result
  }

export { isPalindrom, findLongestWords };