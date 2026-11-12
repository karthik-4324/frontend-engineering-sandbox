// function greetMessage(){
//     function wrapper(){
//         let name="karthik";
//         console.log("welcome",name);
//     }
//     return wrapper;
// }
// greetMessage()();

let arr=[1,2,3,4,5];
let temp=[];
function square(number){
    return number**2;
}
function cube(number){
    return number**3;
}
function calculate(wrapper){
    for(let number of arr){
        temp.push(wrapper(number));
    }
    return temp;

}
let result=calculate(square,arr);
console.log(result);