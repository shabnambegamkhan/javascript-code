// const input = require("readline-sync")
// let N = parseInt(input.question("enter number"))
// let s = 1;
// let i = 1;
// while (i <= N) {
//     let j = 1;
//     let str = "";
//      s = 2*i-1;
//     while (j <= s) {
//         str = str +  "*";
//         j++;

//     }
//     console.log(str)
//     i++;
// }

// *      (1)
// * * *
// * * * * *
// * * * * * * *

// ///////////////////////////////////////////////////////////////////////

// const input = require("readline-sync")
// let n = input.question("enter number")
// let i = 1;
// let s = 1;
// while (i <= n) {
//     let j = 1;
//     let str = "";
//     s = (2 * i) - 1;
//     while (j <= s) {

//     str = str + "*";
//     j++;
//     }
//     console.log(str)
//     i++;
// }
// let t = n - 1;
// let p = 1; 
// while (p <=t) {
//     let str = "";

//      let j=1; 
//      let s=2*t-1
//     while ( j<=s) {
//     str = str + "*"
//     j++;
//     }

//     console.log(str)
//     t--;

// }

// *
// * * *
// * * * * *
// * * * * * * * 
// * * * * *
// * * * 
// *

////////////////////////////////////////////////////////////////////////////

// const input = require("readline-sync")
// let n = input.question("enter number")
// let i = 1;
// let j = 1;
// let s = n;
// while (i<=n){
//     str = ""
//     while (s<=i){
//         str= str + ""
//         j++;
//     }
//     console.log(str)
//     i++;
// } 




// 4
// 4 3 4
// 4 3 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 3 4
// 4 3 4
// 4


// const input = require("readline-sync")
// let n = input.question("enter number")
// let i = 1;
// while (i <= n) {
//     j = i;
//     s = n;
//     str = " ";
//     while (j <= i) {
//         str = str + j + " "
//         j++;
//         console.log(str)
//         i++;
//     }
//     while (j < i) {
//         j = 1;
//         str = ""
//         while (j <= i) {
//             str = str + i + ""
//             j++;
//         }
//         console.log(str)
//         i--;
//     }
// }

const input = require("readline-sync")
let n = input.question("enter number")
let i = 1;
while (i <= n) {  
    let j = 1;
    let str = ""
    while (j < +i) {
        str = str + ""
        j++;
    }
    console.log(str)
    i++;

}








