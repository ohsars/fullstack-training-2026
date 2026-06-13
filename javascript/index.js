// scopes in Javascript

// 1. Global Scope - can be accessed globally(anywhere)
const year = 2000; // global scope, let, or const
const fullName = "John Doe"

function calculateAge () {

  // console.log(fullName)
  var year = 2022; // local scope, var
  // console.log(`My name is ${fullName}, and i was born at ${year}.`)
}

// calculateAge();

// console.log(fullName);


// arrays - square brackets [] , indexing starts from 0 , ordered list of values
const fruitFromMarket = ["mango", 'orange', 'guava', 'kiwi', 'tomato']
const leftOverFruits = ['banana', 'coconut', 'watermelon']
const fruitBasket = []; // strings 

leftOverFruits.pop();

fruitBasket.push(...fruitFromMarket, ...leftOverFruits);

console.log(fruitBasket);
console.log(fruitBasket.length);

// console.log(fruits[1] + " and " + fruits[2]);

// push() :- Add new item(s) to the end, 
// unshift() :- Add new Item to start, 
// pop() :- Removes item from the end, 
// shift() :- Removes item from start, 
// length :- get the count of the items in the array


// fruits.pop()

// console.log(fruits);
// console.log(`i ate ${fruits[0]} and ${fruits[1]} yesterday, and i have ${fruits.length} fruits in total`);


















const number = [1,27,7,7,72,2,2,,87,12,123333,0.2,0.3222,-2]; // integer
const mixed = [1, 'boy', true, null, undefined, 1, 4, -3, 'bola'];
const empty = [];

