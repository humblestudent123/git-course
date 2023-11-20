
//Задание 1
function multiplyTwoNumbers(a, b) {
    return a * b;
  };
  console.log(multiplyTwoNumbers(2, 3)); 
  console.log(multiplyTwoNumbers(-1, 3)); 
  console.log(multiplyTwoNumbers(150, 15)); 
//Задание 2
function getSmallestNumber(a, b) {
    return Math.min(a, b);
  };
  console.log(getSmallestNumber(2, 12)); // Выведет: 2
console.log(getSmallestNumber(-1000, 10)); // Выведет: -1000
//Задание 3
function castBoolean(value) {
    return Boolean(value);
  }
  const castBoolean = require('./путь_к_вашему_файлу');

console.log(castBoolean(0)); // Выведет: false
console.log(castBoolean('Hexlet')); // Выведет: true
console.log(castBoolean(NaN)); // Выведет: false
console.log(castBoolean()); // Выведет: false
console.log(castBoolean('')); // Выведет: false
console.log(castBoolean(() => {})); // Выведет: true
console.log(castBoolean(122343n)); // Выведет: true
console.log(castBoolean(console.log)); // Выведет: true
console.log(castBoolean(console.log())); // Выведет: false
//Задание 4




  
  
  

  
  