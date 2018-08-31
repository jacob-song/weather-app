function get_weather() {
    var location = document.getElementById("location");
    var apiKey = config.MY_DARK_KEY;
    var url = "https://api.forecast.io/forecast/";

    //HTML5 geolocation
    //TODO: use google maps api for search bar instead of 
    //asking for location via geolocation
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        //TODO: use google maps api to display location name instead
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