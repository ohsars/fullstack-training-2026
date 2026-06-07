// functions

// 1. name function


function greet(name) {
  console.log('Welcome back,' + name +  ' How are you?');
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
      break;
  }
}


calculate_numbers("Adedeji " , 202, "+");
calculate_numbers("Adeola " , 202, "/");
calculate_numbers("Ebenezer " , 25, "*");
calculate_numbers("Aishat " , 20, "-");
calculate_numbers("Someone " , 21, "+");
calculate_numbers("Anyone " , 2, "/");
calculate_numbers("Whyyy Me " , 22, "*");


console.log('hellooooooo adedeji!');
console.log(`hellooooooo adedeji!`)