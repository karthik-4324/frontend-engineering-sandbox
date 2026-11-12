// pattern
// let symbol="*";
// for(let i=0;i<5;i++){
//     console.log(symbol.repeat(i));
// }
// finding string length
// let count=0;
// let name="kona";
// for(let i=0;i<name.length;i++){
//     count++
// }
// console.log(count);

//checking if number is even or odd 


//checking whether the string has vowels or not
let Vowels="a,e,i,o,u,A,E,I,O,U";
let InputString="hEllo";
for(let i=0;i<InputString.length;i++){
    if(Vowels.includes(InputString[i])){
        console.log(`${InputString[i]} is a vowel`)
    }
    else{
        console.log(`${InputString[i]} is not a vowel`)
    }
}
