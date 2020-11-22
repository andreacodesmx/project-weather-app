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

// current temperature

function currentTemp(response) {
  let h1 = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${temperature}ºC`;
}

function defineCity(city) {
  let apiKey = "013da9ae1bd8d6b9c0dd6dfd35f601c3";
  let cityValue = document.querySelector("#search-city").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
  axios.get(url).then(currentTemp);
}