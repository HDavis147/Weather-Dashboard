var key = "056678b1d6cbca43eca05770f121bc62";

var input = "";

var city = "San+Francisco"


var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  key +
  "&units=imperial";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });

