readLineSync = require('readline-sync');
let Question = readLineSync.question("who is your favourite cricketer? " );
console.log(`my favourite cricketer is ${Question}`)


let name = readLineSync.question("why is he : ");
console.log("thank you");


const age = readLineSync.question("what is his age? ");
let birthYear = 2026 - Number(age);
console.log(`his birth year is ${birthYear}`);