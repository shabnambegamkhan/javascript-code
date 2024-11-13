const input = require ('readline-sync')
 let a= input .question('enter')
 let b= input .question('enter')
 let c= input .question('enter')
let  d= input .question('enter')
var Max;
var max1;
var min;
var min1;
if (a>b)
{
    max=a
    min=b
}else{
    max=b
    min=a
}
if(c>d)
{
    max1=c
    min1=d
}else{
    max1=d
    min1=c
}
if (max>max1)
{
    console.log(max)
}else{
    console.log(max1)
}





