//sum of non prime

num=prompt("enter num: ")
non_prime_sum=0
for (n of num){
    for(i=2;i<n;i++){
        if(n%i==0){
            non_prime_sum+=Number(n)
        }
    }
}
console.log(non_prime_sum)


// using function
function prime(num){
prime=true
sum=0
for(i=2;i<num;i++){
    if(num%i==0){
        console.log("not a prime")
        prime=false
        break
    }
}if(prime==true){
    console.log("prime")
}

}prime(5)

// sum of non prime and prime

input =prompt("enter number")
npsum=0,psum=0
for(num of input){
    if(num>1){
        c=0
        for(i=2;i<num;i++){
            if(num%i==0){
                npsum=npsum+Number(num)
                c++
                break
            }
        }if(c==0){
            psum+=Number(num)
        }
    }
}
res=(psum>npsum)?"prime is big":"non prime is big"
console.log(res)