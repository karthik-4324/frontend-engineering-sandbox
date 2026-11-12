const box = document.querySelector(".box");

box.addEventListener("mousedown",()=>{
    box.style.background = "red";
})

box.addEventListener("mouseup", () => {
    box.style.background = "green";
});


box.addEventListener("mouseenter", () => {
    box.innerText = "Welcome Buddy 😎";
});


box.addEventListener("mouseleave", () => {
    box.innerText = "Bye Buddy 👋";
});

box.addEventListener("mousemove", () => {
    console.log("Moving...");
});



box.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    alert("Right Click Disabled 😎");
});


