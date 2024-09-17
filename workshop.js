// 1. Uppercase
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase.
//     - Hints: Use the toUpperCase() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc", "def"]
//     - Output Test Cases: ["HELLO", "WORLD", "ABC"], ["XYZ", "ABC", "DEF"]



// USING MAP METHOD
// function uppercase(arr){
//     return arr.map(str => str.toUpperCase())
// }
// console.log(uppercase(["hello", "world", "abc"]))
// console.log(uppercase(["xyz", "abc", "def"]))


// 2. Substring
//     - Question: Write a function that takes an array of strings as input and returns a new array with the first 3 characters of each string.
//     - Hints: Use the substring() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abcdef"]
//     - Output Test Cases: ["hel", "wor", "abc"], ["xyz", "abc"]

// function ss(arr1){
//     return arr1.map(s =>s.substring(0,3))
// }
// console.log(ss(["hello", "world", "abc"]))
// console.log(ss(["xyz", "abcdef"]))


// 3. Replace
//     - Question: Write a function that takes an array of strings as input and returns a new array with all occurrences of "o" replaced with "0".
//     - Hints: Use the replace() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "foo", "bar"]
//     - Output Test Cases: ["hell0", "w0rld", "abc"], ["xyz", "f00", "bar"]

// function rep(arr2){
//     return arr2.map(r =>r.replaceAll("o","0"))
// }
// console.log(rep(["hello", "world", "abc"]))
// console.log(rep(["xyz","foo", "abcdef"]))


// 4. Split
//     - Question: Write a function that takes an array of strings as input and returns a new array with each string split into words.
//     - Hints: Use the split() method.
//     - Input Test Cases: ["hello-world", "abc-def"], ["xyz-abc-def"]
//     - Output Test Cases: ["hello", "world", "abc", "def"], ["xyz", "abc", "def"]

// function split(arr2){
//     return arr2.flatMap(s=>s.split("-"))
// }
// console.log(split(["hello-world", "abc-def"]))

// console.log(split(["xyz-abc-def"]))



// 5. Filter
//     - Question: Write a function that takes an array of strings as input and returns a new array with only the strings longer than 5 characters.
//     - Hints: Use the filter() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "abcdef"]
//     - Output Test Cases: ["defghi"], ["abcdef"]

// function Filter(arr){
//     return arr.filter(x=>x.length>5)
// }console.log(Filter(["hello", "world", "abc", "defghi"]))
// console.log(Filter(["xyz", "abcdef"]))



// 6.Map
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase and "!" appended.
//     - Hints: Use the map() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: ["HELLO!", "WORLD!", "ABC!"], ["XYZ!", "ABC!"]
// function m(arr3){
// return arr3.map(m=>m.toUpperCase()+"!")
// }
// console.log(m(["hello", "world", "abc"]))


// 7.Find
//     - Question: Write a function that takes an array of strings as input and returns the first string containing "o".
//     - Hints: Use the find() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "foo", "bar"]
//     - Output Test Cases: "world", "foo"

// function m1(arr3){
// return arr3.find(s=>s.includes("o"))
// }
// console.log(m1(["hello", "world", "abc"]))
// console.log(m1(["xyz", "foo", "bar"]))

// 8.Join
//     - Question: Write a function that takes an array of strings as input and returns a new string with all strings joined by commas.
//     - Hints: Use the join() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: "hello,world,abc", "xyz,abc"

// function joi(arr5){
//     return arr5.join(" ,")
// }
// console.log(joi(["hello", "world", "abc"]))

