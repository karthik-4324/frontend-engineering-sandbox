// let obj={
//     name:"karthik",
//     age:22,
//     address:{
//         state:"ap",
//         city:"mumbai"
//     },
//     courses:['html','css','reactjs','javascript']
// }
// //DESTRUCTING THE OBJECT
// let{name,age,address:{state,city},courses}=obj;
// console.log(address);//this will not work,bcoz of we already destruct the array,so now object
// //doesnt have any properties

// //IF WE WANT TO CHANGE THE NAME OF A VARIABLE THEN

// let{name:username}=obj;
// console.log(username);

const frnds={
    engineers:{
        4302:{
            name:"vara bajji",
            age:22,
            city:"polla"
        },
        4306:{
            name:"Naidu",
            age:22,
            city:"pallakollu"
        }
    },
    degree:{
        beeru:{
            name:"veerababu",
            age:22,
            city:"eastvipparru"
        },
        karthik:{
            name:"karthik",
            age:22,
            city:"tanuku"
        }
    },
    Inter:{
        name:"venky",
        age:20,
        city:"eastvipparru"

    }
}
let{engineers,degree:{beeru,karthik},Inter}=frnds;
console.log(beeru);




