//To take a year as input and outputs the Year is a Leap Year or not a Leap Year

let year = prompt("Enter Year : ");

//To check whether the year is a leap year or not.
if (year >= 1000 && year <= 9999) {

    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
} else {
    console.log("Enter a valid 4 digit year");
}