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

// console.log(fruitBasket);
// console.log(fruitBasket.length);

// console.log(fruits[1] + " and " + fruits[2]);

// push() :- Add new item(s) to the end, 
// unshift() :- Add new Item to start, 
// pop() :- Removes item from the end, 
// shift() :- Removes item from start, 
// length :- get the count of the items in the array


// fruits.pop()

// console.log(fruits);
// console.log(`i ate ${fruits[0]} and ${fruits[1]} yesterday, and i have ${fruits.length} fruits in total`);





const tasks = ["bath", "eat", "sleep", "write codes", "hghghghg", "bjfbbnbvnbvnbv", "bnmbnmfff", "jbjdbdbbd", leftOverFruits, "jgkfhhghdjkg", "im here", "i'm bacxckkkkkk"];

const lastSixTasks = tasks.slice(-6); //last six items in the array
// console.log(lastSixTasks);
// console.log(tasks.splice(5));
// console.log(tasks.slice(-4));



const colors = ["blue", 'red', 'green', 'orange']; //4
//             [  0    ,  1   ,     2 ,     3   ]

// classic loop = identifier that travels {checks evry item in the array}

for (let i = 0; i < colors.length; i++) {
  console.log(`i am the ${i} number, and the fruit is ${colors[i]}`)
}
