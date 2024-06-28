let todayDay = document.querySelector(".todayDay")
let todayDate = document.querySelector(".todayDate")
let cityName = document.querySelector(".cityName")
let degree = document.querySelector(".degree")
let icon = document.querySelector(".icon")
let text = document.querySelector(".text")
let tomorowDay = document.querySelectorAll(".tomorowDay")
let tomorowIcon = document.querySelectorAll(".tomorowIcon")
let tomorowText = document.querySelectorAll(".tomorowText")
let tomorowMaxDegreee = document.querySelectorAll(".tomorowMaxDegree")
let tomorowMinDegreee = document.querySelectorAll(".tomorowMinDegree")
let search = document.querySelector(".search");


var allWeather = [];

var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var month = ["January","February","March","April","May","June","July","August","Septemper","Octobr","November","December"]

async function getWeather(parameter) {
    var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=be4052faf09243a9bb290741242606&q=${parameter}&days=7`);
    allWeather = await res.json();
    displayToday();
    displayTomorow();
}
getWeather("Tanta");


function displayToday() {
    var date = new Date();
    todayDay.innerHTML= week[date.getDay()];
    todayDate.innerHTML = month[date.getMonth()];
    cityName.innerHTML = allWeather.location.name;
    degree.innerHTML = allWeather.current.temp_c +`<sup>o</sup>c`;
    icon.setAttribute("src", `https:${allWeather.current.condition.icon}`)
    text.innerHTML = allWeather.current.condition.text;
}


function displayTomorow() {
    for (let i = 0; i < tomorowDay.length; i++) {
        tomorowDay[i].innerHTML=week[new Date(allWeather.forecast.forecastday[i+1].date).getDay()];
        tomorowIcon[i].setAttribute("src",`https:${allWeather.forecast.forecastday[i+1].day.condition.icon}`);
        tomorowMaxDegreee[i].innerHTML=allWeather.forecast.forecastday[i+1].day.maxtemp_c+`<sup>o</sup>c`;
        tomorowMinDegreee[i].innerHTML=allWeather.forecast.forecastday[i+1].day.mintemp_c+`<sup>o</sup>c`;
        tomorowText[i].innerHTML=allWeather.forecast.forecastday[i+1].day.condition.text;

        
    }
    
}

search.addEventListener("keyup",function () {

    let city=search.value;
    getWeather(city);
})


// function getLocation() {
//     navigator.geolocation.getCurrentPosition(showWeather)
// }
// function showWeather(position) {
//     var lat = position.coords.latitude;
//     var lon = position.coords.longitude;
//     var apiKey = "e8f1f1ed74c29f2f2c8eb51e8b8aec63"
//     var url =` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
//     fetch(url).then(response =>response.json()).then(data => {
//         var locate = `
//         <h3>${data.name}</h3>
//         `;
//         document.querySelector(".cityName").innerHTML = locate;
//     })
     
// }
