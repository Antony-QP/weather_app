let geolocation = null;


if (window.navigator && window.navigator.geolocation) {
  geolocation = window.navigator.geolocation;
}

if (geolocation) {
  geolocation.getCurrentPosition(function (position) {
    let longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    // console.log(longitude);
    // console.log(latitude);
  });
}