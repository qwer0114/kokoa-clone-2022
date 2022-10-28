const timeBar = document.querySelector("#timeBar");

function getTime() {
    const date = new Date();

    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");

    timeBar.innerText = hour + ":" + min;


}

getTime();
setInterval(getTime, 1000);

