// PURE FUNCTION

// function getParam(a,b){
//     return a+b;
// }
// let result=getParam(1,1);
// console.log(result);

//IMPURE FUNCTION

// let b=1;// external paramerer
// function add(a){
//     return a+b;
// }
// let result=add(1);
// console.log(result); // here the result of these 2 functions are same but the 2nd function result is based on the external
// //  parameter so 2nd one is impure function

// IMPURE FUNCTION

//pure function arguments should not be mutate

function array1(arr){
    arr.push(5,6);
    return arr;
}
let result=array1([1,2,3,4,5]);
console.log(result);

