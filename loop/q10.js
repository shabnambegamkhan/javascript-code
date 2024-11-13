const input = require("readline-sync")
let n = input.question("enter")
let x = input.question("enter")
let p=0
let s = 0;
i = 1;
while (i <= n) {
    x=2
    p = (x** i) / i;
    s = p + s;
    i++;
}
console.log(s)




// series