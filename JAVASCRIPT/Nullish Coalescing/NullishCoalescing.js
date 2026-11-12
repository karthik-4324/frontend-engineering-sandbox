// const firstname="";
// console.log(firstname);

// here in this cases we use logical || operator for this  by creating a nickname

// const nickname="nani";
// console.log(firstname||nickname); //yeah here we got this nickname

// console.log(Boolean("karthik"));//true
// console.log(Boolean(nickname));//true
// console.log(Boolean(firstname));// false


// console.log(undefined||NaN||null); // returns the last occurence of false value
// console.log("karthik"||NaN||null);//true returns coz of first occurence 




// let a=5;
// let b;
// console.log(a+(b||0));

// for && reverse of || operator 

// Nullish Coalescing 

let a =0;
console.log(a??"guess");// here ?? takes 0 as a number
console.log(a||"guess");// the OR operator takes 0 as a non number 