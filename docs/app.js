function get_weather() {
    var location = document.getElementById("location");
    var apiKey = config.MY_DARK_KEY;
    var url = "https://api.forecast.io/forecast/";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        location.innerHTML = 
            "Latitude: " + lat + "°\nLongitude: " + long + "°";
        
        $.getJSON(url + apiKey + "/" + lat + "," + long + "?callback=?",
            function(data) {
                console.log(data);
                $("#temperature").html(data.currently.temperature + "° F");
                $("#weather-condition").html(data.currently.summary);
            }
        );

    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }
}

get_weather();