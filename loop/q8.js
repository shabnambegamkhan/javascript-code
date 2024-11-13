const input = require("readline-sync")
let n = input.question("enter number")
let a = input.question("enter number")
var max = a;
var min = a;

i = 2

while (i <= n) {

    let b = input.question("enter number")


    if (max < b) {
        max=b
    }

    if (min > b) {
        min=b
    }
    
    i++;
}
    console.log(max);
    console.log(min);


