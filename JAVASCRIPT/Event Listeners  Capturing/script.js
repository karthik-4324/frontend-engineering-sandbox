const grand = document.querySelector(".grand");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// grand.addEventListener("click", () => {
//     alert("Grand Parent");
// });

// parent.addEventListener("click", () => {
//     alert("Parent");
// });

// child.addEventListener("click", (e) => {

//     e.stopPropagation();

//     alert("Child");

// });


grand.addEventListener("click", () => {
    alert("Grand Parent");
});

parent.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Parent");
});

child.addEventListener("click", () => {
    alert("Child");
});


