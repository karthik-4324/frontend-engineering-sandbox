const student={
    name:"karthik",
    age:22
};

function getStudentinfo(state,city){
    console.log(`The student info is ${this.name} and ${this.age} years old,${state} ,city  ${city}`);
}
// const bindData = getStudentinfo.bind(student,"AP");
// bindData();
//Creating a own call polyfill
Function.prototype.mybind=function(context,...args){
    context.wrapperfun=this;
    return function(...newargs){
        context.wrapperfun(...args,...newargs);
        delete context.wrapperfun;
    }
}

const finalbind=getStudentinfo.mybind(student,"Andhra Pradesh");
finalbind("tanuku");