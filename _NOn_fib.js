// print non fibonacci numbers

num=+prompt("enter number")
a=0,b=1,i=1
nonfib=0
while(nonfib<num){
    let i=a+1
    while(b>i){
        console.log(i)
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

// print Nth fibonacci number
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

// print NON-FIB series based on user input
num=+prompt("enter number")
a=0
b=1
nonfib=0
f=[]
while(nonfib<=num){
    for(i=a+1;i<b;i++){
         if(i>num){
         break
         }
         nonfib++
    console.log(i)
             }
    c=a+b
    a=b
    b=c

}console.log(nonfib.join(" "))