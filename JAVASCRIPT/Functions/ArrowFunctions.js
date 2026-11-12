// const CalculateSum=(x,y)=>{
//     return x+y;
// }
// console.log(CalculateSum(1,2));

//one line expression 
// const Calculateadd=(x,y)=>x>y?x+y:x-y;
// console.log(Calculateadd(1,2));

//sum of numb

function Sum(start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        sum=sum+i;
    }
    return sum;
}
let result=Sum(1,4);
console.log(result);

