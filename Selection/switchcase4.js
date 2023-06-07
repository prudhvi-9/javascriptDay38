//Take user inputs and do unit conversion of different length units

console.log("Enter your choice \n1.Feet to Inch \n2.Feet to Meter \n3.Inch to Feet\n4.Meter to Feet");

let option = Number(prompt("Enter your choice : "));
let input = Number(prompt("Enter your input : "));
switch (option) {
    case 1:
        console.log(input + " feet = " + (input * 12) + " inch");
        break;
    case 2:
        console.log(input + " feet = " + (input / 3.281) + " meter");
        break;
    case 3:
        console.log(input + " inch = " + (input / 12) + " feet");
        break;
    case 4:
        console.log(input + " meter = " + (input * 3.281) + " feet");
        break;
    default:
        console.log("Invalid");
}