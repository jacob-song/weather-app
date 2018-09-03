$(document).ready(function() {
    // var apiKey = config.MY_DARK_KEY;
    var apiKey = '4f6c57c2d0de4c3ec164834538671f6c';
    var lat, long, location, icon;
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
        var temperature, realTemp, rainChance, humidity, windspeed;
        var url = "https://api.forecast.io/forecast/" + apiKey + "/" + lat + "," + long + "?callback=?";

        $.getJSON(url, function(data) {
            icon = data.currently.icon;
            console.log(JSON.stringify(data));
            skycons.set(document.getElementById("skycon"), icon);
            skycons.play();

            //make numbers nice
            temperature = Math.round(data.currently.temperature * 10) / 10;
            realTemp = Math.round(data.currently.apparentTemperature * 10) /10;
            rainChance = Math.round(data.currently.precipProbability * 100);
            humidity = Math.round(data.currently.humidity * 100);
            windspeed = Math.round(data.currently.windSpeed);

            $("#location").text(location);
            $("#weather-condition").html(data.currently.summary);
            $("#temperature").html(temperature + "° F | " + realTemp + "° F");
            $("#precip").html("Precipitation: " + rainChance + "%");
            $("#humidity").html("Humidity: " + humidity + "%");
            $("#wind").html("Wind: " + windspeed + " MPH");
            handleBackground();
            // $("#image").append("<canvas class=" + data.currently.icon + "width='64' height='64'></canvas>");
        });
    }

    //kind of messy?
    function handleBackground() {
        if (icon === "clear-day") {
            document.documentElement.style.setProperty('--color-one', '#87bbff');
            document.documentElement.style.setProperty('--color-two', '#ffc949');
        } else if (icon === "clear-night") {
            document.documentElement.style.setProperty('--color-one', '#3d3f4f');
            document.documentElement.style.setProperty('--color-two', '#091047');
        } else if (icon === "partly-cloudy-day") {
            document.documentElement.style.setProperty('--color-one', '#87bbff');
            document.documentElement.style.setProperty('--color-two', '#C9CACA');
        } else if (icon === "partly-cloudy-night") {
            document.documentElement.style.setProperty('--color-one', '#091047');
            document.documentElement.style.setProperty('--color-two', '#7F706C');
        } else if (icon === "cloudy") {
            document.documentElement.style.setProperty('--color-one', '#C9CACA');
            document.documentElement.style.setProperty('--color-two', '#b3cdef');
        } else if (icon === "rain") {
            document.documentElement.style.setProperty('--color-one', '#3C424C');
            document.documentElement.style.setProperty('--color-two', '#395877');
        } else if (icon === "snow" || icon === "sleet") {
            document.documentElement.style.setProperty('--color-one', '#B8B8B8');
            document.documentElement.style.setProperty('--color-two', '#EEEEEE');
        } else if (icon === "wind") {
            document.documentElement.style.setProperty('--color-one', '#4ed3d3');
            document.documentElement.style.setProperty('--color-two', '#d8e9ff');
        } else { //fog
            document.documentElement.style.setProperty('--color-one', '#D3D2D3');
            document.documentElement.style.setProperty('--color-two', '#a5a5a5');
        }

    }
});