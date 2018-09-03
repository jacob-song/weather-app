# [weather-app](https://jacob-song.github.io/weather-app/)

### Local Weather Application 

This project displays local weather information using HTML5 [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation), [Dark Skys](https://darksky.net/dev/) and [Skycons](https://darkskyapp.github.io/skycons/).

Here's a preview:
![Preview](https://i.imgur.com/ZlB4nAf.gif)

### Technologies Used
* HTML & CSS
* Dark Sky API
* JavaScript and JQuery
* Google Maps Geocoding API

### Description

Using the HTML5 [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation), The web application displays several weather informations from that local location. 

Weather details include current location and state/country, summary of the current weather condition, temperature and apparent temperature, precipitation chance, humidity, and windspeed.

This simple weather application also features animated weather icons called [Skycons](https://darkskyapp.github.io/skycons/). These icons correspond to local location's current weather conditions and diplays a nice-looking animated icons to help you glimpse the current weather right away. 

The background of the website is an animated gradient using CSS. Colors are relative to the current weather condition and blends two relative color together to create a flowing gradient animation bouncing between the two.

### TO-DOs:
(Hopefully work on them when I feel like it): 
* ~~Make web application media responsive~~
* Request Dark Sky API weather data via Proxy API Server instead
* Add local time to weather description
* Use Google Maps Geocoding API to integrate a search bar to see weather in other locations
* Fahrenheit and Celsius conversion choice according to country code

