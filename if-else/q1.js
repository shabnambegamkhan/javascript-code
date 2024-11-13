
// const input=require('readline-sync')
// let a =input.questionInt('enter');
// let b=input.questionInt('enter');
// c=a+b;
// console.log(c);
const input = require ("readline-sync")
let a=input.question ('enter');
let b=input.question  ('enter');
let c=input.question  ('enter');
if (a>b) {
    if(a>c)
    {console.log(a)}
    else{console.log(c)}
} else {
    if(b>c){
        console.log(b)
    }
    else{console.log(c)}
}
    