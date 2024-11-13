const input =require("readline-sync")
let n= input.questionInt("enter ")
let i=1;
var p=0;
while (i<n)
{

      if(n%i==0)
      {
        p=p+1;
      }
    i++;
}
   {
    if (p==n)
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
}
