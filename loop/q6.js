const input = require ("readline-sync")
let a=input.questionInt("enter")
let b=parseInt(input.question("enter"))
var w 
var l 
 let hcf=1
 let lcm=1
 let c=a*b;
     i=1;
 if (a>b)
        {
           w=a;
           l=b;
        }
       else {
           w=b;
           l=a ;
        }
while (i<=l){
      if (w%i==0 ) 
      {
      if (l%i==0)
      
      {
        hcf=i;
      }
      }      
        i++;
     
    }
      
      
        lcm=c/hcf;
      
      console.log(hcf);
      console.log(lcm);
    


