# [weather-app](https://jacob-song.github.io/weather-app/)

## Weather Application 

This project displays weather information using HTML5 [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation), [Dark Skys](https://darksky.net/dev/), [Skycons](https://darkskyapp.github.io/skycons/) and [Google Maps API](https://developers.google.com/maps/documentation/).

Here's a preview:
![Preview](https://i.imgur.com/DZyTUIm.gif)

## Technologies Used
* HTML & CSS
* Dark Sky API
* JavaScript/JQuery
* Google Maps API

## Description

This Weather Application designed and implemented by [me](https://github.com/jacob-song) displays weather information of your current geographical location or by searching any location via the search bar. 

The web application has an input field that autocompletes locations via the Google Places API. It has two buttons which is used to choose between using the user's geographical location or any searched location. 

With the user's permission, uses HTML5 [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation) to display several weather informations from the user's geocraphical location. 

By searching a general location (Preferably City or Zip Code) on the search bar and submitting the information with the "Search" button,
the application will find the exact location searched or get the closest/likely search results of the location via autocomplete. 

Weather information details include corresponding [Skycon](https://darkskyapp.github.io/skycons/), current location and state/country, summary of the current weather condition, temperature and apparent temperature, precipitation chance, humidity, and windspeed.

The featured animated weather icons are called [Skycons](https://darkskyapp.github.io/skycons/). These animated icons correspond to local location's current weather conditions and diplays a nice-looking animated icons to help you glimpse the current weather right away. 

The background of the website is an animated gradient using CSS. Colors are relative to the current weather condition and blends two relative color together to create a flowing gradient animation bouncing between the two.

## TO-DOs:
(Hopefully work on them when I feel like it): 
* ~~Make web application media responsive~~
* Fix weather details not showing up on mobile
* Request Dark Sky API weather data via Proxy API Server instead
* Add local time to weather description
* ~~Use Google Maps Geocoding API to integrate a search bar to see weather in other locations~~
* Fahrenheit and Celsius conversion according to country code

