// Flip Coin till either Heads or Tails wins 11 times

let HEAD = 1;
let headCount = 0;
let tailCount = 0;

while (headCount != 11 && tailCount != 11) {
    let toss = Math.floor(Math.random() * 2);
    if (toss == HEAD)
        headCount++;
    else
        tailCount++;
}

console.log("Head Count is " + headCount);
console.log("Tail Count is " + tailCount);