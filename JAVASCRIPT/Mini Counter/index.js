const counter = document.querySelector(".counter");
const number = document.querySelector(".inc");

let intervalID;
let count = 0;

counter.addEventListener("click", () => {

    // Prevent multiple intervals if Start is clicked again
    if (intervalID) return;

    startCounter();

});

function startCounter() {

    intervalID = setInterval(() => {

        count++;

        number.innerHTML += count + "<br>";

        if (count % 10 === 0) {

            clearInterval(intervalID);
            intervalID = null;

            number.innerHTML += `<strong>${count} seconds Completed</strong><br><br>`;

            if (count === 60) {
                number.innerHTML += "<h3>Program Finished 🎉</h3>";
                return;
            }

            setTimeout(() => {
                startCounter();
            }, 10000);

        }

    }, 1000);

}