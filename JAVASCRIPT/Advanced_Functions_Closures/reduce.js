const arr=[1,2,3,4];

const reducerfun=((acc,curr)=>acc+curr);

const result=arr.reduce(reducerfun,0);
console.log(result);


