const arr = [1,2,3,4,5];
function getSquareNum(number){
    return number ** 2;
}

//creating a polyfill

Array.prototype.myMap = function(callback){
    let tempArr=[];
    for(let i=0;i<this.length;i++){
        tempArr.push(callback(this[i]));
    }
    return tempArr;
}
let SquaredNum = arr.myMap(getSquareNum);
console.log(SquaredNum);