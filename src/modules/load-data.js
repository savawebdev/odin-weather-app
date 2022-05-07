import {
  displayLocation,
  displayWeatherSummary,
  displayHourlyWeather,
} from "./UI";
import { getLocation } from "./fetch-data";

function loadCurrentLocationWeather(lat, long, data) {
  getLocation(lat, long).then((location) => {
    displayLocation(location);
  });

  displayWeatherSummary(data);
}

function loadHourlyWeather(data) {
  displayHourlyWeather(data.slice(0, 10));
}

export { loadCurrentLocationWeather, loadHourlyWeather };
