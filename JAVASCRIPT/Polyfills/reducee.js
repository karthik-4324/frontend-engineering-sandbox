const arr=[1,2,3];

function total(acc,cur){
    return acc=acc+cur;
}

Array.prototype.myFilter = function (callback,initialValue){
    let acc= initialValue ? initialValue : this[0];
    for(let i= initialValue ? 0 : 1 ; i<this.length; i++){
        acc=callback(acc,this[i]);
    }
    return acc;
}

let result = arr.myFilter(total);
console.log(result);