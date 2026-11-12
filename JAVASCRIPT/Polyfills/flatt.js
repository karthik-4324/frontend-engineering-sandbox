const arr = [1,2,3,4,[5,6]];

Array.prototype.myFilter = function(depth=1){
    let tempArr=[];
    function getFlateedArr(array,depth){
        for(let element of array){
            if(Array.isArray(element)){
                getFlateedArr(element,depth-1);
            }
            else{
                tempArr.push(element);
            }
        }
        return tempArr;
    }
    return getFlateedArr(this,depth);
}
const result = arr.myFilter();
console.log(result);