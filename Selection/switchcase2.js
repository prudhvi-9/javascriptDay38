//Read a number and display the week day

let weekDay = Number(prompt("Enter number : "));

switch (weekDay) {
    case 1: 
        console.log("Sunday");
        break;
    case 2: 
        console.log("Monday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default: 
        console.log("Invalid");
}