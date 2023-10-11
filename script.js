function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "f71ec7d4559d34b5b856ef3cf171dd0e";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}, ${data.sys.country}</h2>
                                      <p>Temperature: ${data.main.temp}°C</p>
                                      <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
        console.log(error);
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `<p>Couldn't fetch weather data. Please try again later.</p>`;
      });
  }