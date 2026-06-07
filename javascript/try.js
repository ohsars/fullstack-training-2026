// functions

// 1. name function


function greet(name) {
  console.log('Welcome back,' + name +  ' How are you?'); //concatenation -- string variable
  console.log(`Welcome back, ${name}! How are you?`); // mostly prefered
  console.log(`Welcome back, ${name}! How are you?`); // mostly prefered
}

// greet("Michael J."); // function call
greet("Adedeji");
// greet();
// greet(12)





function calculate_numbers (name, val, operator) {

  switch (operator) {
    case "+":
      console.log(`Hello ${name}, your result is ${val + val}`);
      break;
    
    case "-":
      console.log(`Hello ${name}, your result is ${val - val}`);
      break;
    
    case "/":
      console.log(`Hello ${name}, your result is ${val / val}`);
      break;

    case "*":
      console.log(`Hello ${name}, your result is ${val * val}`);
      break;

    default:
      console.log(`Stopp calculation!!!`)
      break;
  }
}
