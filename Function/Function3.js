//Function to check if the two numbers are Palindromes
//Write function check if number is Prime
function checkPrime(num) {
    let count = 0;

    count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
}

//Write function to get the Palindrome.

function checkPalindrome(number) {
    let temp = number;
    let reverse = 0;
    while (number > 0) {
        let remainder = parseInt(number % 10);
        reverse = reverse * 10 + remainder;
        number = parseInt(number / 10);
    }
}

//Check if the Palindrome number is also prime
function checkPalindromeAndPrime(number) {

    if (number > 0) {
        checkPrime(number);
        checkPalindrome(number);
        console.log(number + " is prime and palindrome number.");

    } else {
        console.log(number + " is not prime and palindrome number.");
    }
}
checkPalindromeAndPrime(131);