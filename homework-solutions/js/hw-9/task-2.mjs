'use strict';
/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findIndex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name !== 'string' || typeof character.age !== 'number') throw new Error('invalid key');
characters.push(character);  
}

function getCharacter(name) {
return characters.find((el) => el.name === name);
}
console.log(getCharacter('Fred'))
function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number' || minAge < 0) throw new Error('invalid number');
  return characters.filter((el) => el.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  const index = characters.findIndex((el) => el.name === name);
  if (index === -1) throw new Error('name not found');
  characters[index] = newCharacter;
  return characters[index];
}
console.log(updateCharacter('Fred', { name: 'Frederick', age: 45 }))

function removeCharacter(name) {
  if (characters.findIndex((el) => el.name === name) === -1) throw new Error('name not found');
  characters.splice(characters.findIndex((el) => el.name === name), 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
