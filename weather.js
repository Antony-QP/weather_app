class Weather {
  constructor(long, lang) {
    this.apiKey = 'b296d0e86384886403f861b58ae58d98';
    this.longitude = longitude;
    this.latitude = latitude;
  }

  // Fetch weather from the API 

  async getWeather() {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apiKey}`)

    const responseData = await response;

    return responseData
  }
}