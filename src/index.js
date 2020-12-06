let now = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let date = now.getDate();
let hour = now.getHours();

let min = now.getMinutes();

let dateTime = document.querySelector("#current-date");
dateTime.innerHTML = `${month} ${date}, ${hour}:${min}`;

// display city

function displayCity(event) {
  event.preventDefault();
  let showCity = document.querySelector("#current-city");
  let city = document.querySelector("#search-city");
  showCity.innerHTML = city.value;
  defineCity(city);
}

let currentCity = document.querySelector("#search");
currentCity.addEventListener("submit", displayCity);

// current conditions

function currentConditions(response) {
  let h1 = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconelement = document.querySelector("#icon");
  h1.innerHTML = `${temperature}ºC`;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconelement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

function defineCity(city) {
  let apiKey = "013da9ae1bd8d6b9c0dd6dfd35f601c3";
  let cityValue = document.querySelector("#search-city").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
  axios.get(url).then(currentConditions);
}
