//ARRAY IS A NON PRIMITIVE TYPE 
 
// let arr=new Array();
// arr.push(1);
// arr.push(1);
// arr.push(1);
// console.log(arr);

//ARRAY CONCATENATION
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[7,8,9];
// let arr4=arr1.concat(arr2,arr3);
// console.log(arr4);
// console.log(arr1);

//pop

// let name=["karthik",1,2,3,4,"sai"];
//name.pop();
//console.log(name);//the defalut pop method deletes the last element in the array 
// name.pop();
// console.log(name);

//SLICE

// console.log(name.slice(0,3));//slice never modifies the original array it just gives the reference 
// console.log(name);

// let courses=["html","css","reactjs","expressjs","dsa"];
// console.log(courses.splice(3,2));
// console.log(courses);


//INCLUDES

// let avail=["M","S","L","XL","XXL"];
// let cla=require("readline-sync");
// let CS=cla.question("enter your shirt size - ");
// if(avail.includes(CS)){
//     console.log("available");
// }
// else{
//     console.log("not available");
// }

//SORT 

// const fruits=["apple","banana","avocado"];
// console.log(fruits.sort());

// const numbers=[1,2,3,4,5,6,7,11];

// const Correctf=(x,y)=>{
//     return x-y;
// }
// console.log(numbers.sort(Correctf));


//SPLIT & JOIN  

// let name="karthik";
// let ns=name.split("");
// let nr=ns.reverse();
// console.log(nr);
// let nj=nr.join();
// if(name==nj){
//     console.log("palindrome");
// }
// else{
//     console.log("not a palindrome");
// }


//SPREAD OF THE ARRAY

// let name="karthik kona 3-85/1";
// console.log(...name);


// let numbers=[1,2,3,4,5,6,7,8];
// console.log(...numbers);

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[7,8,9];
// console.log(...arr1,...arr2,...arr3);

//DESTRUCTING THE ARRAY

// let arr=[["fruits","vegges"],1,2,3,4];
// const[veg,a,...rest]=arr;
// console.log(rest);

// let arr1=[1,2,3];
// let arr2=[1,2,3];
// arr1.push(4);
// console.log(arr1);
// console.log(arr2);




let players = ['Sam', 'Sarah', 'Ryan', 'Poppy'];
let team = players;
team[3] = 'xyz';
console.log(players, team);

