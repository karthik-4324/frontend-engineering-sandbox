let output=document.querySelector(".output");

let count=0;
let IntervalId
document.querySelector(".start").addEventListener("click",()=>{
    IntervalId = setInterval(() =>{
        count++;
        // output.innerHTML += count + "<br>";
        let p = document.createElement("p");
        p.textContent = count;
        output.appendChild(p);
    },1000)
});

document.querySelector(".clear").addEventListener("click",()=>{
    clearInterval(IntervalId);
    output.textContent = "Interval Stopped";
})


