import {
  displayLocation,
  displayWeatherSummary,
  displayHourlyWeather,
  displayCurrentDetails,
  displayDailyWeather,
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

function loadCurrentDetails(data) {
  displayCurrentDetails(data);
}

function loadDailyWeather(data) {
  displayDailyWeather(data);
}

export {
  loadCurrentLocationWeather,
  loadHourlyWeather,
  loadCurrentDetails,
  loadDailyWeather,
};
