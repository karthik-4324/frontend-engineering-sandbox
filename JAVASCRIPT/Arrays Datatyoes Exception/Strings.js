//iterate over strings

//let displayMessage="im a student at geeksforgeeks";
// for(let char of displayMessage){
//     console.log(char);
// }

// //CHARAT(index)

// console.log(displayMessage.charAt(3));
//console.log(displayMessage.charAt(200));//whenever if we give index that are not
//  in range ,then the charAT functin gives the empty index

//console.log(displayMessage.charCodeAt(3));//charCodeAt gives the ASCII value

// console.log(displayMessage.indexOf("s"));

// console.log(displayMessage.indexOf("s",7));//the 7 defines that the character is above the 7th index

//console.log(displayMessage.indexOf("z"));//whenever we give the character that 
// are not in the string then it returns -1


// let text="geeks";
// let char="s"

// let fucntion1=(text,char)=>console.log(text.indexOf(char));
// fucntion1(text,char);

// const fun2=(text,char)=>{
//     return text.indexOf(char)==-1?"not found":"found";
// }
// console.log(fun2("great","r"));

//INCLUDES

// let name="karthik kona";
// if(name.includes("kona")){ // string or char
//     console.log("found");
// }
// else{
//     console.log("not found");
// }

// let name="KARTHIK";
// console.log(name.toUpperCase());

// const name="karthik kona";
// const substring=name.substring(0,3);
// console.log(substring); //chere 0 to 3 means it print start to end-1

//STRING METHOD TRIM 

const name="             karthik       "
//console.log(name);

console.log(name.trim());



