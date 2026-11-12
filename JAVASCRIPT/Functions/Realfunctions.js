//CALL BACK FUNCTION

// function greet(){
//     console.log("hi");
// }
// function bye(hello){
//     console.log("welocme");
//     hello();
// }
// bye(greet);

// //real time
// setTimeout(function(){
//     console.log("welcome executed after 3 seconds")
// },3000)


//Promise

// function getmarks(){
//     return new Promise((resolve,reject)=>{
//         let pass=true;
//         if(pass){
//             resolve(90);
//         }
//         else{
//             reject("failure");
//         }
//     });
// }

// getmarks().then((value)=>{
//     console.log(value);
// })

// .catch((error)=>{
//     console.log(error);
// });



//REAL WORLD EXAMPLE
async function fetchdata(url){
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
}
fetchdata("https://jsonplaceholder.typicode.com/users/1")


