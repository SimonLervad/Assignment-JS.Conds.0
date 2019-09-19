'use strict';

const roll = function(n) {
    return Math.floor(Math.random() * n + 1);
}

let res;
let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
for (let i = 0; i < 10; i++) {
res = roll(6);
switch (res) {
    case 1:
        ones++;
        break;
    case 2:
        twos++;
        break;
    case 3:
        threes++;
        break;
    case 4:
        fours++;
        break;
    case 5:
        fives++;
        break;
    default:
        sixes++;
}
}
console.log(`ones:\t ${ones}`);
console.log(`twos:\t ${twos}`);
console.log(`threes:\t ${threes}`);
console.log(`fours:\t ${fours}`);
console.log(`fives:\t ${fives}`);
console.log(`sixes:\t ${sixes}`);