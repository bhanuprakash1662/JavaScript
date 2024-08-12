// for(i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i,end=" ")
//     }
    
// }
// for(i=0;i<=20;i++){ 
//     if(i%2==0 && i%3==0){
//         console.log(i,"fizzbuzz")
//     }else if(i%3==0){
//         console.log(i,"buzz")
//     }else if(i%2==0){
//         console.log(i," fizz")
//     }else{
//         console.log(i)
//     }

    
// }
// Calculate the sum of all even numbers between 1 and 100
// let sum=0;
// for(i=0;i<=100;i++){
//     if(i%2==0){
//         sum=sum+i
//     }
// } console.log(sum)   
// Test case 2: Verify that the sum of all even numbers between 1 and 50 is 650.
// let sum=0;
// for(i=0;i<=50;i++){
//     if(i%2==0){
//         sum=sum+i 
//     }
// } console.log(sum)  


// Write a program to find the factorial of a given number
// let fact=1
// let n=5
// for(i=1;i<=n;i++){
//     fact=i*fact
// }console.log(fact)
// 3. Determine the number of digits in a given number

// - Test case 1: Input: 123, Expected output: 3
// - Test case 2: Input: 4567, Expected output: 4
// let pos=567
// let a=Math.abs(pos)
// let digits=0
// if(a==0){
//     console.log("1")
// }else{
// for(a;a>0;a=Math.floor(a/10)){
//     digits=digits+1
// }console.log(digits)
// }


// 1. Write a program to determine the fare for a taxi ride based on the distance traveled:
//     - 0-5 km: $5
//     - 5-10 km: $10
//     - 10-20 km: $20
//     - Above 20 km: $30 + $5 for every additional km

// let distance =22
// let km=distance-20
// if(distance >0 && distance<=5){
//     console.log("pay $5")
// }else if(distance >5 && distance<=10){
//     console.log("pay $10")
// }else if(distance >10 && distance<=20){
//     console.log("pay $20")
// }else{
//     console.log("pay",30+(km*5))
// }








// 2. Write a program to determine the discount on a product based on the quantity purchased:
//     - 1-5 units: No discount
//     - 6-10 units: 5% discount
//     - 11-20 units: 10% discount
//     - Above 20 units: 15% discount
// let discount=22

// if(discount >=1 && discount<=5){
//     console.log("no discount")
// }else if(discount >=6 && discount<=10){
//     console.log("5% discount")
// }else if(discount >10 && discount<=20){
//     console.log("10% discount")
// }else{
//     console.log("15% discount")
// }



// Switch Statement:

// 1. Write a program to determine the type of coffee based on the user's selection:
//     - 1: Espresso
//     - 2: Cappuccino
//     - 3: Latte
//     - 4: Mocha
// let tea="latte"
// switch(tea){
//     case"es":
//     console.log("your Espresso")
//     break
//     case"cccap":
//     console.log("your Cappuccino")
//     break
//     case"latte":
//     console.log("your latte")
//     break
//     case"Mocha":
//     console.log("your Mocha")
//     break
//     default:console.log("no such item")
// }



// 2. Write a program to determine the shipping cost based on the region:
//     - 1: North America ($10)
//     - 2: South America ($20)
//     - 3: Europe ($30)
//     - 4: Asia ($40)
//     - 5: Australia ($50)

// let loc="North"
// switch(loc){
//     case "North":
//         console.log("for North America  have to pay ($10) ")
//     break
//     case "South":
//         console.log("for South America ($20)) ")
//     break
//     case "Europe":
//         console.log("for Europe ($30)  have to pay  ")
//     break
//     case "Asia":
//         console.log("for Asia ($40)  have to pay ")
//     break
//     case "Australia":
//         console.log("for Australia ($50) have to pay  ")
//     break
//     default:console.log("no such location")

// }

