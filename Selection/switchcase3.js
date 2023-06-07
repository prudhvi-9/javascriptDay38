//Read Numbers 1, 10, 100, 1000  and display unit, ten, hundred and thousand.

let number = Number(prompt("Enter a number : "));

switch (number) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    default:
        console.log("Invalid!!");
}