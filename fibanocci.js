
// num =10
// a=0,b=1
// i=1
// while(i<num){
//     console.log(a)
//     c=a+b
//     a=b
//     b=c
//     i++
// }


// num=+prompt("enter number")
// a=0
// b=1
// nonfib=0
// f=[]
// while(nonfib<=num){
//     for(i=a+1;i<b;i++){
//          if(i>num){
//          break
//          }
//          nonfib++
//     console.log(i)
//              }
//     c=a+b
//     a=b
//     b=c

// }console.log(nonfib.join(" "))



num=+prompt("enter number")
a=0,b=1,z=0
nonfib=0
while(nonfib<num){
    let i=a+1
    while(b>i){
        z=i
        i++
        nonfib++
        if(nonfib==num){
            break
            
        }
    }
    c=a+b
    a=b
    b=c

}
console.log(z)