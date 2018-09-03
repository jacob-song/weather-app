$(document).ready(function() {
    //latitude and longitude
    var lat, long, location, icon;
    var apiKey = config.MY_DARK_KEY;
    var skycons = new Skycons({"color": "#ffffff"});

    // I think this slows it down too much??
    skycons.add(document.getElementById("skycon"), Skycons.PARTLY_CLOUDY_DAY);
    skycons.play();

    //HTML5 geolocation
    navigator.geolocation.getCurrentPosition(getCoordinates, error);

    function getCoordinates(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        getCityName(lat, long);
        getWeatherInfo(lat, long);    
    }

    function error() {
        document.getElementById("location").innerHTML = "Unable to retrieve your location!";
        skycons.pause();
        return;
    }
    
    //Retrieves address components with latitude and longitude using google's api
    function getCityName(lat, long){
        var cityName, areaName, countryCode, countryName;
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
                location = cityName + ", " + areaName;
            } else {
                location = cityName + ", " + countryName;
            }
               
        });
      }

    //Retrieves current weather information using dark sky api
    function getWeatherInfo(lat, long) {
        var temperature;
        var url = "https://api.forecast.io/forecast/" + apiKey + "/" + lat + "," + long + "?callback=?";

        $.getJSON(url, function(data) {
            icon = data.currently.icon;
            console.log(icon);
            skycons.set(document.getElementById("skycon"), icon);
            skycons.play();
            temperature = Math.round(data.currently.temperature * 10) / 10;
            $("#location").text(location);
            $("#temperature").html(temperature + "° F, " + data.currently.precipProbability + ", " + data.currently.humidity + ", " + data.currently.windSpeed);
            $("#weather-condition").html(data.currently.summary);
            // $("#image").append("<canvas class=" + data.currently.icon + "width='64' height='64'></canvas>");
            handleBackground();
        });
    }

    function handleBackground() {
        if (icon === "partly-cloudy-night") {
            document.documentElement.style.setProperty('--color-one', '#ffffff');
            document.documentElement.style.setProperty('--color-two', '#000000');
        }
    }
});