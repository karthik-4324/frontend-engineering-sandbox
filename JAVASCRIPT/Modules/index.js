// import greet from "./Math.js"
// let x=greet(2,5);
// console.log(x);

const Mathrequired=false;
if(Mathrequired){
    const{add}=await import("./Math.js");
    console.log(add(2,4));
}
else{
    console.log("not required");
}
