// Take a range of numbers as input and output the Prime Numbers in that range

let startNumber = Number(prompt("Enter starting number "));
let endNumber = Number(prompt("Enter ending number "));

if (startNumber >= 0 && startNumber < endNumber) {
    for (let n = startNumber; n <= endNumber; n++) {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }
        if (count == 2)
            console.log(n + " ");
    }
}
else
    console.log("invalid");