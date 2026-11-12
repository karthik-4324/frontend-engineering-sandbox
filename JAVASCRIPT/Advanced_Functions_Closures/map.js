const arr=[1,2,3,4];
// function square(number){
//     return number ** 2;
// }
// const result=arr.map(square);
// console.log(result);


// let result=arr.map(number=>number**2);
// console.log(result);



let result=arr.map((number,ind)=>{
    console.log(ind);
    return number**2;
})
console.log(result);


