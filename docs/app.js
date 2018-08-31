$(document).ready(function() {
    //latitude and longitude
    var lat, long;
    var apiKey = config.MY_DARK_KEY;
    //var location = document.getElementById("location");

    //HTML5 geolocation
    navigator.geolocation.getCurrentPosition(getCoordinates, error);

    function getCoordinates(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        getCityName(lat, long);
        getWeatherInfo(lat, long);    
    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }
    
    //Retrieves address components with latitude and longitude using google's api
    function getCityName(lat, long){
        var cityName;
        var areaName;
        var countryCode;
        var countryName;
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ lat + "," + long;

        $.getJSON(url, function(data) {
              var arr_address_comp = data.results[0].address_components;
              arr_address_comp.forEach(function(val) {
                  if (val.types[0] === "locality"){
                     cityName = val.long_name;
                  }
                  if (val.types[0] === "administrative_area_level_1") {
                      areaName = val.short_name;
                  }
                  if (val.types[0] === "country"){
                       countryCode = val.short_name;
                       countryName = val.long_name;
                  }
            });

            if (countryCode === "US") {
                $("#location").text(cityName + ", " + areaName);
            } else {
                $("#location").text(cityName + ", " + countryName);
            }
               
        });
      }

      //Retrieves current weather information using dark sky api
      function getWeatherInfo(lat, long) {
        var url = "https://api.forecast.io/forecast/" + apiKey + "/" + lat + "," + long + "?callback=?";

        $.getJSON(url, function(data) {
            //skycons();
            var skycons = new Skycons({"color": "#000000"});
            $("#temperature").html(data.currently.temperature + "° F");
            $("#weather-condition").html(data.currently.summary);
            skycons.add(document.getElementById("skycon"), data.currently.icon);
            skycons.play();
            // $("#image").append("<canvas class=" + data.currently.icon + "width='64' height='64'></canvas>");
            
        });
      }
});