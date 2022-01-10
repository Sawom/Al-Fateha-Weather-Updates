const apiKey = `c08188fc147ad34b927998b1a09ccd50`;
const loadCity = () => {
    const inputCity = document.getElementById('inputField');
    const inputValue = inputCity.value;
    inputCity.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayTemperature(data));
}
const insideText = (id,idValue) => {
    document.getElementById(id).innerText = idValue;
}
const displayTemperature = temperature => {
    console.log(temperature);
    insideText('cityName', temperature.name);
    insideText('cityTemperature',temperature.main.temp);
    insideText('minTemp', temperature.main.temp_min);
    insideText('maxTemp', temperature.main.temp_max);
    insideText('weatherCondition',temperature.weather[0].description);
    // icon setup
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src',url);
}