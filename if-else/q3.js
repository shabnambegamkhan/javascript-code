const input = require ('readline-sync')
 let a=input.question ('enter')
 let b=input.question ('enter')
 let c=input.question ('enter')
 let d=input.question ('enter')
 var max;
 var min;
 var max1;
 var min1;
 var max2;
 var min2;
 var max3;
 var min3;

 if(a<b)
 {
     max=a
     min=b
 }else{
     max=b
     min=a
 }
 if (c<d)
 {
     max1=c
     min1=d
 }else{
     max1=d
     min1=c
 }
 if (max<max1)
 {
     max2=max
     min2=max1
 }else{
     max2=max1
     min2=max
}
if (min<min1)
{
    max3=min
    min3=min1
}else{
    max3=min1
    min3=min
}
if (min2<max3)

{
    console.log(min2)
}else{
    console.log(max3)
}













