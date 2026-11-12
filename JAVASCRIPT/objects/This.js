// //THIS : THIS keyword refers to the object that executes the function
// const obj={
//     name:"karthik",
//     age:22,
//     bye(){
//         console.log(this);//so here this refers to the obj that executes the bye function
//     }
// }
// obj.bye();

//BUT INCASE OF NORMAL FUNCTIONS 

// function bye(){
//     console.log(this);
// }
// bye();//this refers to the global window object ,bcoz of this function doesnt have object 


// NESTED FUNCTIONS

const obj={
    name:"karthik",
    age:22,
    showaddress(){
       console.log("name",this.name);
       function hi(){
        console.log(this.name);
       }
        
       
    }
}


console.log(obj.showaddress);



