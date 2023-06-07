//Read a Number and Display the week day
let weekNumber = prompt("Enter Weekday Number : ");
let weekDay;

if (weekNumber >= 1 && weekNumber <= 7) {
    if (weekNumber == 1)
        console.log("Day is Sunday");
    else if (weekNumber == 2)
        console.log("Day is Monday");
    else if (weekNumber == 3)
        console.log("Day is Tuesday");
    else if (weekNumber == 4)
        console.log("Day is Wednesady");
    else if (weekNumber == 5)
        console.log("Day is Thursday");
    else if (weekNumber == 6)
        console.log("Day is Friday");
    else if (weekNumber == 7)
        console.log("Day is Saturday");
}
else {
    console.log("Invalid");
}