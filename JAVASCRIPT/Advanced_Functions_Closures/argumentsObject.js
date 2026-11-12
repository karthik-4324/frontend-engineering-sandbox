//Arguments Object are same like the arrays object
//but here we cannot use array methods in this arguments object
//this arguments Object also have indexing like {'0':1...}
//arguments objects are only inside on the default functions

// function argumentsObject(...rest){
//     console.log(arguments);
//     console.log([...rest]);
// }
// argumentsObject(1,2,3,4,5,5)

//Add Numbers

// function add(...rest){
//     let total=0;
//     for(let value of rest){
//         total+=value;
//     }
//     console.log(total);
// }
// add(1,2,3,4,5)


//add using only arguments

// function add(){
//     let total=0;
//     for(let value of arguments){
//         total+=value;
//     }
//     console.log(total);
// }
// add(1,2,3,4);


function test(a){
    console.log("Before:");
    console.log(a);
    console.log(arguments[0]);

    a = 100;

    console.log("After:");
    console.log(a);
    console.log(arguments[0]);
}

test(10);
