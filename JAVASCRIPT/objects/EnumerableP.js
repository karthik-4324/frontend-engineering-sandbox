// let obj = {
//     name: 'Sourav',
//     age: 23,
//     gender: 'male'
// };

// Object.defineProperty(obj, 'country', {
//     value: 'India',
//     enumerable: false
// });

// console.log(obj.country); 
// console.log(Object.keys(obj));

// let obj = {
//     name: 'Sourav',
//     age: 23,
//     gender: 'female'
// };
// console.log('age' in obj);
// console.log(obj.hasOwnProperty('gender'));//hasOwnProperty checks whrther the property 
// //"gender" is a direct property to obj or not // true


// function greet() {
//   console.log("Hello!");
// }

// console.log(greet.name);

// Creating function name func1
// function func1() {
// }
// console.log(func1.name)

// Creating function name func1
// function func1() {
// }
// // Creating function name func2
// function func2(a, b) {
// }
// console.log("Name of the function func2 is: "
//     , func1.name)
// console.log("Name of the function func2 is: "
//     , func2.name)

// // Logging return type to console
// console.log("Type of func.name is: "
//     , typeof (func2.name))


console.log(this);