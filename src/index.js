// https://api.weatherapi.com/v1/current.json?key=edf65ac3b32a48938e0221942232011&q=london

let weatherInfo = {};

const getWeatherData = async function(location) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=edf65ac3b32a48938e0221942232011&q=${location}&days=3`, {mode: 'cors'});
    response.json().then(weather => weatherJSON(weather));
}

let weatherJSON = function(response) {
    console.log(response);
    weatherInfo.location = response.location.name;
    weatherInfo.currentDate = response.forecast.forecastday[0].date;
    weatherInfo.currentMin = response.forecast.forecastday[0].day.mintemp_f;
    weatherInfo.currentMax = response.forecast.forecastday[0].day.maxtemp_f;
    weatherInfo.currentFTemp = response.current.temp_f;
    weatherInfo.currentHumidity = response.current.humidity;
    weatherInfo.currentPrecip = response.forecast.forecastday[0].day.daily_chance_of_rain;
    
    weatherInfo.secondDate = response.forecast.forecastday[1].date;
    weatherInfo.secondMin = response.forecast.forecastday[1].day.mintemp_f;
    weatherInfo.secondMax = response.forecast.forecastday[1].day.maxtemp_f;
    weatherInfo.secondPrecip = response.forecast.forecastday[1].day.daily_chance_of_rain;

    weatherInfo.thirdDate = response.forecast.forecastday[2].date;
    weatherInfo.thirdMin = response.forecast.forecastday[2].day.mintemp_f;
    weatherInfo.thirdMax = response.forecast.forecastday[2].day.maxtemp_f;
    weatherInfo.thirdPrecip = response.forecast.forecastday[2].day.daily_chance_of_rain;

    console.log(weatherInfo);
}

getWeatherData("london");