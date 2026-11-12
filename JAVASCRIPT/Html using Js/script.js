//creating parent
const container = document.getElementById("parent");

//now creating the div

const parent = document.createElement("div");
//now creating the img class

const image = document.createElement("img");
const para=document.createElement("p");
image.classList.add("img");
image.setAttribute("src","travel.jpg");
image.setAttribute("width","300");

//now appending the image to the parent container

parent.append(image);

// now paragraph

para.innerText="every milestone start from one step";

parent.append(para);


container.append(parent);


