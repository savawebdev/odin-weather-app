import { displayLocation, displayWeatherSummary } from "./UI";
import { getLocation } from "./location";

function loadCurrentLocationWeather(lat, long, data) {
  getLocation(lat, long).then((location) => {
    displayLocation(location);
  });

  displayWeatherSummary(data);
}

export { loadCurrentLocationWeather };
