// let isprivate=true
// let isfrnd=true
// if(isprivate){
//     if(isfrnd){
//         console.log("frnds")
//     }else{
//         console.log("not frinds")
//     }
    
// }else{
//     console.log("u can send messages")
// }
// // one time

// let onetime =+ prompt("enter to number ");
// let y=Boolean(onetime)
// if(y==true){
//     console.log("you cannot farword")
// }else{
// console.log("we can forword to another friends")
// }
// // message delete
// let time=prompt("enter time")
// if(time>24){
//     console.log("u cant delete")
// }else{
//     console.log("u can delte")
// }
// largest number among 3 numbers
// let a=prompt("enter  a value")
// let b=prompt("enter b value")
// let c=prompt("enter c value")
// if(a>b && a>c){
//     console.log("a is greater")
// }else if(b>a && b>c){
//     console.log("b is greater")
// }else{
//     console.log("c is greater")
// }
// ternary
// let x1=prompt("enter num1:")
// let x2=prompt("enter num2:")
// let x3=prompt("enter num3:")
// z=x1>x2 && x1>x3 ? x1:x2>x1 &&x2>x3 ? x2:x3
// console.log("greatest number",z)





// rightangled triangle
let ab=+prompt("enter num ab:")
let bc=+prompt("enter num bc:")
let ca=+prompt("enter num cd:")
if(ab**2+bc**2==ca**2){
    console.log("its a right angled triangle")
}else{
    console.log("its a not right angled triangle")
}
// using degree
// let s1=+prompt("enter num s1:")
// let s2=+prompt("enter num s2:")
// let s3=+prompt("enter num s3:")
// // let s45=(s1||s2||s3)
// if(s1==90||s2==90||s3==90){
//     console.log("its a right angled triangle")
// }else{
//     console.log("its a not right angled triangle")
// }



// check if the number is power of 2
// let a=+prompt("enter a number")
// if(Math.log2(a)%1 ==0){
//     console.log("power of 2")
// }else{ 
//     console.log(" not power of 2")
// }
 
// To determine if a person is eligible for a loan based on their credit score and income:
// let cs=+prompt("enter credit score")
// let ai=+prompt("enter annual income")
// let loan=+prompt("enter loan")
// let z=0.5*ai
// if(cs>=600 && ai>=40000 && loan<z){
//     console.log("eligible for a loan")
// }else{
//     console.log(" not eligible for a loan")
// }



// AUTHOERISATION SYSTEM FOR WEBSITE
// if user admin -->logged in as admin
// if user employee -->logged in as employee
// if user super_admin -->logged in as super_admin
// if user customer -->logged in as customer
// anything else -->unauthorsied user

// let x="employee"
// if(x=="admim"){
//     console.log("logged in as admin")
// }else if(x=="employee"){
//     console.log("logged in as employee")
// }else if(x=="super_admin"){
//     console.log("logged in as super_admin")
// }else if(x=="customer"){
//     console.log("logged in as customer")

// }else{
//     console.log("logged in as unauthorsied user")
// }





// switch
// let skill="html"
// switch(skill){
//     case "css":
//         console.log("css")
//         break
//     case "java":
//         console.log("java")
//         break
//     case "core_java":
//         console.log("core_java")
//         break
//     case "html":
//         console.log("html")
//         break
//     default:
//         console.log("nothing")

// }