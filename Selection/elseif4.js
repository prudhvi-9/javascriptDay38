// Perform arithmetic operations and find max, min

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");

let arithmeticOperation1 = a + b * c;
let arithmeticOperation2 = a % b + c;
let arithmeticOperation3 = c + a / b;
let arithmeticOperation4 = a * b + c;

let maximum = Math.max(arithmeticOperation1, arithmeticOperation2, arithmeticOperation3, arithmeticOperation4);
let minimum = Math.min(arithmeticOperation1, arithmeticOperation2, arithmeticOperation3, arithmeticOperation4);
console.log("Maximum is " + maximum);
console.log("Minimum is " + minimum);