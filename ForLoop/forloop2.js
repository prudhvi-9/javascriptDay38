//Take a command-line argument n and print nth harmonic number

let number = Number(prompt("Enter a number : "));

let harmonicNumber = 0;

for (let i = 1; i <= number; i++) {
    harmonicNumber = harmonicNumber + (1.0 / i);
}
console.log("Harmonic Number is " + harmonicNumber);

