class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.icon = document.getElementById('icon');
    this.temp = document.getElementById('temperature')
    this.description = document.getElementById('weather-info');
    this.feelsLike = document.getElementById('feels-like');
  }



  paint(weather) {


    this.location.textContent = weather.name
    this.temp.textContent = JSON.stringify(weather.main.temp) + " Degrees Celcius"
    this.description.textContent = weather.weather[0].description.toUpperCase()
    this.feelsLike.textContent = weather.main.feels_like + " Degrees Celcius"
  }
}