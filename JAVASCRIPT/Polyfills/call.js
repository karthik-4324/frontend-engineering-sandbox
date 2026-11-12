const student={
    name:"karthik",
    age:22
};

function getStudentinfo(state){
    console.log(`The student info is ${this.name} and ${this.age} years old,${state}`);
}

// getStudentinfo.call(student);

//Creating a own call polyfill
Function.prototype.myCall=function(context,args){
    context.showMessage=this;
    context.showMessage(args);

}

getStudentinfo.myCall(student,"Andhra Pradesh")