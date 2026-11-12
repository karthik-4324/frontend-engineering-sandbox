// ==========================
// OUTPUT ELEMENT
// ==========================

const output = document.getElementById("output");

// ==========================
// LOCATION OBJECT
// ==========================

document.getElementById("currentURL").addEventListener("click", () => {
    output.textContent = location.href;
});

document.getElementById("google").addEventListener("click", () => {
    location.href = "https://www.google.com";
});

document.getElementById("reload").addEventListener("click", () => {
    location.reload();
});

// ==========================
// HISTORY OBJECT
// ==========================

document.getElementById("back").addEventListener("click", () => {
    history.back();
});

document.getElementById("forward").addEventListener("click", () => {
    history.forward();
});

// ==========================
// SCREEN OBJECT
// ==========================

document.getElementById("screenInfo").addEventListener("click", () => {

    output.innerHTML = `
        Width : ${screen.width}<br>
        Height : ${screen.height}<br>
        Available Width : ${screen.availWidth}<br>
        Available Height : ${screen.availHeight}
    `;

});

// ==========================
// NAVIGATOR OBJECT
// ==========================

document.getElementById("browserInfo").addEventListener("click", () => {

    output.innerHTML = `
        Browser : ${navigator.userAgent}<br>
        Language : ${navigator.language}<br>
        Platform : ${navigator.platform}
    `;

});

document.getElementById("onlineStatus").addEventListener("click", () => {

    output.textContent = navigator.onLine
        ? "You are Online"
        : "You are Offline";

});

// ==========================
// DIALOG BOXES
// ==========================

document.getElementById("alertBtn").addEventListener("click", () => {

    alert("Hello Buddy!");

});

document.getElementById("confirmBtn").addEventListener("click", () => {

    const result = confirm("Do you like JavaScript?");

    output.textContent = result
        ? "You clicked OK"
        : "You clicked Cancel";

});

document.getElementById("promptBtn").addEventListener("click", () => {

    const name = prompt("Enter your name");

    output.textContent = `Hello ${name}`;

});

// ==========================
// TIMERS
// ==========================

let timeoutID;
let intervalID;

// setTimeout

document.getElementById("timeoutBtn").addEventListener("click", () => {

    timeoutID = setTimeout(() => {

        output.textContent = "Timeout Executed after 3 seconds";

    }, 3000);

});

// clearTimeout

document.getElementById("clearTimeoutBtn").addEventListener("click", () => {

    clearTimeout(timeoutID);

    output.textContent = "Timeout Cleared";

});

// setInterval

document.getElementById("intervalBtn").addEventListener("click", () => {

    intervalID = setInterval(() => {

        output.textContent = new Date().toLocaleTimeString();

    }, 3000);

});

// clearInterval

document.getElementById("clearIntervalBtn").addEventListener("click", () => {

    clearInterval(intervalID);

    output.textContent = "Interval Stopped";

});