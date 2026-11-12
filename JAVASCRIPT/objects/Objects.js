//OBJECT LITERALS

// const obj={
//     name:"karthik",//  -----> OBJECT PROPERTIES
//     age:22,
//     job:"unemployed",
//     "is student":"true" // here w using double quotes coz of multiple words
// }
//console.log(obj);

//FETCHING THE OBJECT VALUE
// console.log(obj.name);

// console.log(obj["name"]);

//FUNCTIONS AS A PROPERTY
// const obj1={
//     name:"karthik",
//     greet:function(){
//         console.log("welcome");
//     },
//     bye(){
//         console.log("tata bye bye");
//     }
// }
// obj1.greet();
// obj1.bye();


//ADDING PROPERTIES

// const obj2={

// }
// obj2.name="kiran";
// console.log(obj2);


//COMPUTED PROPERTY FOR COMMAND LINE INPUTS
// const RLS=require("readline-sync");
// const name=RLS.question("enter your name  -");
// const age=RLS.question("enter your age  -");

// const obj4={
//     [name]:age,
//     ["first"+"name"]:"kiran"
// }
// console.log(obj4);

// console.log("age",obj4[name]);


//SHORT HANDOPERATOR
// function getObjects(name,city){
//     return{
//         name:name,
//         city:city
//     }
// }
// let result=getObjects("ABD","SA")
// console.log(result);

// //SO NOW WE WRITE SHORTLY NAME,CITY INSTEAD OF NAME:NAME ,,BCOZ THE JAVASCRIPT INTERNALLY TAKES
// //THE NAME HAS KEY PROPERTY AND THEN IT TAKES THE ARGUMENTS AS A VALUE 

// function getObjects(name,city){
//     return{
//         name,
//         city
//     }
// }
// console.log(getObjects("karthik","east vipparru"));

//FOR IN
// let arr=[1,2,3,4,5,6,7,8];
// for(let item in arr){
//     console.log(item);
// }

// OBJECT REFERENCE & SHALLOW
//objects are not copied by value
//objects are copied by reference

// const obj1={
//     name:"karthik",
//     age:22,
//     city:"thurpuvipparru"
// }
// const obj2=obj1;
// console.log(obj1);
// obj2.city="east vipparru";//SHALLOW COPY
// console.log(obj2);

// console.log(obj1);//now herewe got updated in both obj1 and obj2 ,so this is known as shallow copy

//PARTIAL DEEP COPY //

// const obj1={
//     name:"kiran",
//     age:22,
//     city:"tanuku"
// }
// const obj2=Object.assign({},obj1);//HERE WE CALL IT AS A DEEP COPY BCOZ OF IT WONT WORK FOR NESTED OBJECTS
// console.log(obj1);
// console.log(obj2);
// obj2.city="east vipparru";
// console.log(obj1);
// console.log(obj2)

// const obj1={
//     name:"kiran",
//     age:22,
//     state:{
//         city:"TV",
//         mandal:"IM"
//     }
// }
// const obj2=Object.assign({},obj1);//HERE WE CALL IT AS A DEEP COPY BCOZ OF IT WONT WORK FOR NESTED OBJECTS
// console.log(obj1);
// console.log(obj2);
// obj2.state.city="east vipparru";//here the assign method wont work for nested properties ,the change of
// //one thing can change the other things
// console.log(obj1);
// console.log(obj2)

//FOR COMPLETE DEEP COPY WE USE OPTIONAL CHAINING 

// const obj={
//     name:"karthik",
//     age:22,
//     state:{
//         city:"tanuku",
//         mandal:"IM"
//     },
//     hobby:"drawing"
// }
//console.log(obj.address);//HERE we got undefined 

//and when we write
//console.log(obj.address.city);//here we got big error bcoz structure : obj.undefined.city ,undefined of undefined gives the big error

//SO FOR THAT WE USE OPTIONAL CHAINING 
//console.log(obj.address?.city); // here Optional chaining("?") checks whether adress is defined or not 
//if its not then it gives undefined and it didnt got for city

//so if we want to check whether these 2 obj,\.address.city then 
//1st option if condition 
// if(obj.state!=undefined){
//     console.log(obj.state.city);//so now here we got tanuku
// }

//2nd option ,optional chaining 

//console.log(obj.address?.city);

//now those undefined properties only work with property ,not with methods

// const obj={
//     name:"karthik",
//     age:22,
//     bye(){

//     }
// }
//console.log(obj.bye());//here we got undefined bcoz the bye() method doesnt have any properties 
//console.log(obj.greet());//here we got big error ,bcoz of we tried to print the undefined method 

//so here also we can use optional chaining 

//console.log(obj.greet?.());//now we got undefined

//HOMEWORK
// let name="username";
// let lname="lastname";

// age="userage";
// const readlinesync=require("readline-sync");
// let nameValue=readlinesync.question("enter the name - ");

// let ageValue=readlinesync.question("enter your age - ");


// const obj={
//     [name]:{
//         firstname:nameValue,
//         [lname]:"kona"
//     },
//     [age]:ageValue
// }

// // now calling these 

// console.log(obj[name]?.[lname]);


//RECOGNIZING THE OBJECT 

// const obj={
//     name:"karthik"
// }
// console.log(typeof obj=="object");









