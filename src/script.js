function updateTime(){
let newYorkElement= document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");
newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");


let londonElement= document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
};
updateTime();
setInterval(updateTime, 1000);


