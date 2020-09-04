class Weather {
  constructor(city) {
    this.apiKey = 'b296d0e86384886403f861b58ae58d98';
    this.city = city
  }

  // Fetch weather from the API 

  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)

    const responseData = await response

    return responseData.json();
  }

  // Change weather location

  changeLocation(city) {
    this.city = city
  }
}