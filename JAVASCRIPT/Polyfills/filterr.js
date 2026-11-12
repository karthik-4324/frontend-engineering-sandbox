// const arr=[1,2,3,4,5];

// function getFilteredEle(number){
//     return number>3;
// }

// Array.prototype.myFilter = function(callback) {
//     let tempArr = [];
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i])){
//             tempArr.push(this[i]);
//         }
//     }
//     return tempArr;
// }

// let result = arr.myFilter(getFilteredEle);
// console.log(result);

const arr = [10,15,20,25];

function check(num){
    return num % 20 === 0;
}

const ans = arr.filter(check);

console.log(ans);