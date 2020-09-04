// Init ui
const ui = new UI()
// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData()
// Initialize weather object
const weather = new Weather(weatherLocation.city);


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// changeLocationEvent
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  // Change the location
  weather.changeLocation(city);

  // Set location in local storage
  storage.setLocationData(city);
  // Fetch new weather with the new location
  getWeather();
  // Close Modal
  $('#locModal').modal('hide');
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}