//Take a input and determine if the number is prime

let number = Number(prompt("Enter a number : "));

if (number >= 2) {
    let count = 0;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            count++;
        }
    }
    if (count == 2)
        console.log("Prime number");
    else
        console.log("Not a prime number");
}
else
    console.log("Invalid");