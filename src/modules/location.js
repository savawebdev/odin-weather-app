import { displayLocation, displayWeatherSummary } from "./UI";
import { getWeather } from "./weather";

async function getLocation(lat, long) {
  const API_KEY = "27789636179621174688x78507";

  const res = await fetch(
    `https://geocode.xyz/?locate=${lat},${long}&json=1&auth=${API_KEY}`
  );

  const data = await res.json();

  return data;
}

function loadCurrentLocationWeather() {
  navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;

    getLocation(lat, long).then((location) => {
      // console.log(location);
      displayLocation(location);
    });

    getWeather(lat, long).then((weather) => {
      console.log(weather.current);
      displayWeatherSummary(weather.current);
    });
  });
}

export { loadCurrentLocationWeather };
