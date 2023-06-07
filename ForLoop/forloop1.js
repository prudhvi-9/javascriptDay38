//Take a command-line argument n and print a table of powers of 2 that are less than or equal to 2^n.

let number = Number(prompt("Enter a number : "));

for (let i = 0; i <= number; i++) {
    let result = Math.pow(2, i)
    console.log(result);
}