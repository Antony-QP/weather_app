// Initialize weather object
const weather = new Weather('London');
// Init ui
const ui = new UI()
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// changeLocationEvent
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  // Change the location
  weather.changeLocation(city);
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