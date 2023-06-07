//Read a single digit number and write the number in word 


let number = prompt("Enter a single digit number : ");
let word;

if (number >= 0 && number <= 9) {
    if (number == 0) {
        console.log("Number is Zero");
    } else if (number == 1) {
        console.log("Number is One");
    } else if (number == 2) {
        console.log("Number is Two");
    } else if (number == 3) {
        console.log("Number is Three");
    } else if (number == 4) {
        console.log("Number is Four");
    } else if (number == 5) {
        console.log("Number is Five");
    } else if (number == 6) {
        console.log("Number is Six");
    } else if (number == 7) {
        console.log("Number is Seven");
    } else if (number == 8) {
        console.log("Number is Eight");
    } else if (number == 9) {
        console.log("Number is Nine");
    }
}
else {
    console.log("Invalid");
}