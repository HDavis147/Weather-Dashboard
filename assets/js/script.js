// Openweathermap API key
var key = "056678b1d6cbca43eca05770f121bc62";

// DOM elements used
var inputEl = $("#citySearch");
var searchBtn = $("#searchBtn");

// Get city from local storage and set query URL
var city = localStorage.getItem('city');
var cityQuery = city.replaceAll(' ', '+');
var dailyURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityQuery + "&units=imperial&appid=" + key;

// Function to set city in local storage, tied to button click
function setCity() {
  localStorage.setItem('city', inputEl.val());
};

// Append city search history to page
for (var i = 0; i < localStorage.length; i++) {
  $("#history").append("<p>" + localStorage.getItem(localStorage.key(i)) + "</p>")
}

// Call to openweathermap API to get current weather
$.ajax({
  url: dailyURL,
  method: "GET",
}).then(function (response) {
  var cityName = response.name;
  var temp = response.main.temp.toFixed(0);
  var humidity = response.main.humidity;
  var wind = response.wind.speed;
  var iconUrl = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";

  $("#weatherDisplay").html("<h3>City: " + cityName + "</h3><br>Temperature: " + temp + "°F<br>Humidity: " + humidity + "%<br>Wind Speed: " + wind + " mph<br><img src='" + iconUrl + "'>");
});



searchBtn.on('click', setCity);
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
