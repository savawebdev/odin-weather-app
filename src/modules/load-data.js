import { displayLocation, displayWeatherSummary } from "./UI";
import { getLocation } from "./fetch-data";

function loadCurrentLocationWeather(lat, long, data) {
  getLocation(lat, long).then((location) => {
    displayLocation(location);
  });

  displayWeatherSummary(data);
}

function loadHourlyWeather(data) {}

export { loadCurrentLocationWeather, loadHourlyWeather };
