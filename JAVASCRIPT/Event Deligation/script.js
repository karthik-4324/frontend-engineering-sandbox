const fruits = document.querySelector(".fruits");

fruits.addEventListener("click",(e)=>{
    alert(e.target.innerText);
    if(e.target.innerText==="Apple"){
        document.body.style.background="red";
    }
})