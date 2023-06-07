//Compute factorial of a number taken as input

let number = Number(prompt("Enter a number : "));

let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log("Factorial of " + number + "is " + factorial);