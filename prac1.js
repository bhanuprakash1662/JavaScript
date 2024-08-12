//1)
console.log(10+"5")
// ans 105
// 2)
let x=10;
x+=5; console.log(x)
// ans 15
// 3)
console.log(10-null)
// ans 10
// 4)
let x1=10
x1*=2
console.log(x1)
// ans 20
// 5)
console.log(10/'2');
// ans 5
// 6)
console.log(10%3);
// ans 1
// 7)
let x2=10;
x2=x2**2
console.log(x2)
// ans 100
//8)
console.log(10>5 && 5<10)
// ans true
// 9)
console.log(10 === '10')
// ans false
// 10)
x3=null;
console.log(x3)
// ans null
// 11)
console.log(10 || "default")
// ans error
// 12)
console.log(!true)
// ans false
// 13)
console.log(10&5)
// ans 0
// 14)
console.log(10|5)
// ans 15
// 15)ff:f ft:t 
console.log(10^5)
// ans 15


console.log("another questions")

// (1)pre increment
let x4=10;
y1=++x4
console.log(x4)
console.log(y1)
// ans 11, 11
// (2)post incerment
let x5=10;
y5=x5++;
console.log(x5)
console.log(y5)
// ans 10,15
// (3)
let x6=10;
console.log("3answer" ,++x6)
// (4)
let x7=10;
console.log("4 answer" ,x7++)
//(5) What is the result of x = 10; y = --x;? What are the values of x and y?
let x8=10;
y=--x8;
console.log("answer 5",y)
//(6) What is the result of x = 10; y = x--;? What are the values of x and y?
let x9=10;
y = x9--;
console.log("answer 6",y)
// Ternary Operators:
console.log("Ternary Operators")
//(1) What is the result of x = 10; y = x > 5 ? 'yes' : 'no';? What is the value of y?
let x10=10;
y=x>5?'yes':'no';
console.log(y)
//(2) What is the result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';? What is the value of y?
let x11=10;
y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';
console.log(y)
console.log("Optional Chaining")


// 1. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);?
const obj = { a: { b: 'c' } };
console.log(obj?.a?.b);

// 2. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c);?
const obj1= { a: { b: 'c' } };
console.log(obj1?.a?.c);


// 3. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.b?.c);?
const obj2 = { a: { b: 'c' } };
console.log(obj2?.b?.c);



console.log("Nullish Coalescing:")

// 1. What is the result of x = null; y = x ?? 'default';? What is the value of y?
x = null; 
y = x ?? 'default';
console.log("1 answer",y)
// 2. What is the result of x = undefined; y = x ?? 'default';? What is the value of y?
x = undefined;
y = x ?? 'default';
console.log("2 answer",y)
// 3. What is the result of x = 0; y = x ?? 'default';? What is the value of y?
x = 0;
y = x ?? 'default';
console.log("3 answer",y)