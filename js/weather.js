let weather = {
    // "city": "Batu",
    "apiKey": "22db2ee13247ae1ecd1b90d3338e477c",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(icon, description, temp, humidity, speed)

        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "humidity : " + humidity + '%';
        document.querySelector(".wind").innerText = "wind speed : " + speed + ' km/h';
    },
};




const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    
    const time = new Date();
    
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();

    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12: hour
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM'

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000);


// + ':' + seconds + ' ' 





























