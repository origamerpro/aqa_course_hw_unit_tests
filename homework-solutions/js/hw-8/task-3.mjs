/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/
const arr = [5,2,7,3,8,1,6]
function findMissingNumber(numbers) {
  const result = [];
  numbers.toSorted((a,b) => a-b).filter((el, i, arr ) =>  {if(arr.length > 1){if (i > 0 && !arr.includes(i)){result.push(i)}} else {result.push(1)}});
  //for (let i = 1; i <= numbers.length; i++) {
  //  if (!numbers.includes(i)) {
  //    result.push(i);
  //  }
  console.log(numbers.toSorted((a,b) => a-b));
  console.log(result);
  return result[0];
}

findMissingNumber(arr);

export { findMissingNumber };
