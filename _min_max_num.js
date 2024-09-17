// PRINT THE FIBNOACCI NUMBER BASED ON USER INPUT

num=+prompt("enter a number")
a=0,b=1 ,i=1
while(i<=num){
    if(i==num){
        console.log(a)
        break
    }
   
 c=a+b
    a=b
    b=c
    i++
}



// program to reverse a num
num=prompt("enter num: ")
rev=" ",str=" "
if (num[0]== "-"){
    for(i=num.length-1;i>=1;i--){
        rev=rev+num[i]
    }
    rev="-"+rev
    console.log(Number(rev))
}
else{
    for (i=num.length-1;i>=0;i--){
        rev=rev+num[i]
    }
    console.log(Number(rev))
}


// print fibonacci series
num=5
a=0,b=1
i=1
while(i<=num){
    console.log(a)
    c=a+b
    a=b
    b=c
    i++
}
