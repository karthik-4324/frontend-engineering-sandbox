const student={
    name:"karthik",
    age:22
};

function getStudentinfo(...state){
    console.log(`The student info is ${this.name} and ${this.age} years old,${state}`);
}

getStudentinfo.apply(student,["andhra pradesh","sikkim"]);

//Creating a own call polyfill
// Function.prototype.myapply=function(context,args){
//     context.showMessage=this;
//     context.showMessage(args);

// }

// getStudentinfo.myCall(student,"Andhra Pradesh")