'use strict';
/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
console.log(mergeArrays([1,2], [3,4], [5,6]))
function mergeArrays(...arrays) {
  const result = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
console.log(devideBy('Обжигающие лучи солнца нарушили его сон.'))
function devideBy(sentence) {
  let check = String(sentence).replace(/ +/g, ' ').trim();
  const words = check.split(' ');
  const result = [];
  for (let i = 0; i < words.length; i++){if (i != 0) {
    const word = words[i]; 
    const firstletter = word[0].toUpperCase();
    const otherletter = word.slice(1).toLowerCase();
    result.push(`${firstletter}${otherletter}`);
    } else {
    result.push(words[i].toLowerCase());
    continue
  }
  }
  return result.join('_');
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
console.log(fibonacci(8))
    function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2);
}

export { mergeArrays, fibonacci, devideBy };
