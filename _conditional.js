//  (1) :-- to calculate sum of all even numbers
let sum=0
for(i=1;i<=100;i++)
{
   if (i%2==0)
   sum=sum+i;   
}
console.log("Sum of 1 to 100 numbers",sum)


//2 :- to find factorial of a num
let n=5
let fact=1
for(i=1;i<=n;i++){
   fact=fact*i
}console.log(fact)

//(3) :- Count num of digits in a num
let num=0
let pos=Math.abs(num)
let num_digits=0
if (pos==0){
   console.log("counts of digits",1)
}
else{
for (pos; pos>0; pos=Math.floor(pos/10))
{
   num_digits=num_digits+1
}
console.log("count of digits",num_digits)
}

//  (1)
// prgrm to determine fare for a taxi ride based on distance travlled
// -0 to 5:5
// -5 to 10:10
// -10 to 20:20
// -above 20km:30+5 for evrey additional km

let km=21         //USER INPUT
let extra=km-20

if(km>0 && km<=5){
    console.log("You need to pay '$5' for ",km,"km")
}
else if(km>5 && km<=10) {
    console.log("You need to pay '$10' for ",km,"km")
}
else if(km>10 && km<=20){
    console.log("You need to pay '$20' for ",km,"km")
}
else{
    console.log("you need to pay 30 + extra charges as you exceeded 20km: ",(30+extra*5))
}



// (2)
// prgrm to get discount based on product quantity
// 1-5:no discount,6-10:5% discount ,11-20:10% discount,above 20:15% discount

let discount=21
if(discount>0 && discount<=5){
    console.log("Sorry!!!!!!  NO DISCOUNT ")
}
else if(discount>=6 && discount<=10){
    console.log("you are offered with '5%' ")
}
else if(discount>=11 && discount<=20){
    console.log("you are offered with '10%' ")
}
else{
    console.log("you are offered with '15%' ") 
}

// (1)  :-  TYPE OF COFFEE BASED ON USERS SELECTION

let coffee="cap"
switch(coffee){
    case "espresso":console.log("You have ordered 'ESPRESSO'");break;
    case "cap":console.log("You have ordered 'CAPPUCCINO'");break;
    case "latte":console.log("You have ordered 'LATTE'");break;
    case "mocha":console.log("You have ordered 'MOCHA'");break;
    default:console.log("Enter type of coffee in the given list")
}