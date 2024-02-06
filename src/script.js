function updateTime(){
let nairobiElement= document.querySelector("#nairobi");
if (nairobiElement){
let nairobiDateElement = nairobiElement.querySelector(".date");
nairobiTimeElement = nairobiElement.querySelector(".time");
let nairobiTime = moment().tz("Africa/Nairobi");
nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
nairobiTimeElement.innerHTML = nairobiTime.format("hh:mm:ss [<small>]A[</small>]");
}

let lisbonElement= document.querySelector("#lisbon");
if (lisbonElement){
let lisbonDateElement = lisbonElement.querySelector(".date");
lisbonTimeElement = lisbonElement.querySelector(".time");
let lisbonTime = moment().tz("Europe/Lisbon");
lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
lisbonTimeElement.innerHTML = lisbonTime.format("hh:mm:ss [<small>]A[</small>]");
}
}

function updateCity (event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime =moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href class="all-cities"="/">Back to all cities</a>
    `;
}


updateTime();
setInterval(updateTime, 1000);



let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity)