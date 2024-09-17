console.log("print 10 to 1 without using '>=' ")
        for(i=10;!(i<1);i--){
            console.log(i)
       }
       console.log("Print -1 to -10 without using '>=' ")
       for(i=-1;i!=-11;i--){
           console.log(i)
       }
       console.log("Print -10 to -1 without using '<=' ")
       
       for(i=-10;!(i>=0);i++){
           console.log(i)
       }


       
 //find large num using ternary operators

let x1=+prompt("enter num1: ");
let x2=+prompt("enter num1: ");
let x3=+prompt("enter num1: ")
z=x1>x2 && x1>x3 ? x1:x2>x1 && x2>x3 ? x2:x3
console.log("largest num is:  ",z)