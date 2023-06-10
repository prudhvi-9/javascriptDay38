//to check if the two numbers are Palindromes

function checkPalindrome(number) {
    let temp = number;
    let reverse = 0;
    while (number > 0) {
        let remainder = parseInt(number % 10);
        reverse = reverse * 10 + remainder;
        number = parseInt(number / 10);
    }
    if (temp == reverse) {
        console.log(temp + " is palindrome number.");
    } else {
        console.log(temp + " is not palindrome number.");
    }
}

checkPalindrome(151);
checkPalindrome(313);
