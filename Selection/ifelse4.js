//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
let random = Math.floor((Math.random() * 2));
if (random > 0) {
    console.log("Heads");
} else {
    console.log("Tails");
}
