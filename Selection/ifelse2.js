// Take day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise

//to take input from user.
let day = prompt("Enter Day : ");
let month = prompt("Enter Month : ");

//To check whether the day of month is between March 20 and June 20 or not.
if ((month == "march" && day >= 20 && day <= 31) || (month == "april" && day >= 1 && day <= 30) || (month == "may" && day >= 1 && day <= 31) || (month == "june" && day >= 1 && day <= 20)) {
    console.log("True");
} else {
    console.log("False");
}