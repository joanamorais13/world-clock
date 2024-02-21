let cityTimeZone;

// PART OF ANOTHER SOLUTION
// function buildInitialClock(timezoneName, tagId) {
//     let element= document.querySelector(tagId);
//     if (element){
//         let dateElement = element.querySelector(".date");
//         let timeElement = element.querySelector(".time");
//         let time = moment().tz(timezoneName);
//         dateElement.innerHTML = time.format("MMMM Do YYYY");
//         timeElement.innerHTML = time.format("hh:mm:ss [<small>]A[</small>]");
//     }
// }

function updateTime(){
    if (cityTimeZone) {
        // If there is a selected city timezone, build it's clock
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityTime =moment().tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = `
        <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <div class="all-cities">
        <a href="">Back to all cities</a>
        </div>
        `;
    } else {
        // Build NY's clock
        let newYorkElement= document.querySelector("#new-york");
        if (newYorkElement){
            let newYorkDateElement = newYorkElement.querySelector(".date");
            newYorkTimeElement = newYorkElement.querySelector(".time");
            let newYorkTime = moment().tz("America/New_York");
            newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
            newYorkTimeElement.innerHTML = newYorkTime.format("hh:mm:ss [<small>]A[</small>]");
        }

        // Build Lisbon's clock
        let lisbonElement= document.querySelector("#lisbon");
        if (lisbonElement){
            let lisbonDateElement = lisbonElement.querySelector(".date");
            lisbonTimeElement = lisbonElement.querySelector(".time");
            let lisbonTime = moment().tz("Europe/Lisbon");
            lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
            lisbonTimeElement.innerHTML = lisbonTime.format("hh:mm:ss [<small>]A[</small>]");
        }

        // Build Tokyo's clock
        let tokyoElement= document.querySelector("#tokyo");
        if (tokyoElement){
            let tokyoDateElement = tokyoElement.querySelector(".date");
            tokyoTimeElement = tokyoElement.querySelector(".time");
            let tokyoTime = moment().tz("Asia/Tokyo");
            tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
            tokyoTimeElement.innerHTML = tokyoTime.format("hh:mm:ss [<small>]A[</small>]");
        }
    }
    // ANOTHER SOLUTION
    // } else {
    //     // Otherwise, build the hardcoded initial 3 cities' clocks
    //     // Build NY's clock
    //     buildInitialClock("America/New_York", "#new-york");

    //     // Build Lisbon's clock
    //     buildInitialClock("Europe/Lisbon", "#lisbon");

    //     // Build Tokyo's clock
    //     buildInitialClock("Asia/Tokyo", "#tokyo");
    // }
}

function updateCity (event){
    cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    // Clear the ongoing clock interval and reset it for the currently selected
    // city
    clearInterval(interval);
    updateTime();
    interval = setInterval(updateTime, 1000);
}


updateTime();
let interval = setInterval(updateTime, 1000);



let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity)

