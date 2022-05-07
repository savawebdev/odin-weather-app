import "./css/index.css";

const { getLocation } = require("./modules/location");

navigator.geolocation.getCurrentPosition((pos) => {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;

  getLocation(lat, long).then((res) => console.log(res));
});
