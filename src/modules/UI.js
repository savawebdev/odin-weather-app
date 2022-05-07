import { formatDate } from "./helpers";

function displayLocation(location) {
  const mainTitle = document.querySelector(".main__title");

  mainTitle.textContent = location.region;
}

function displayWeatherSummary(weather) {
  const mainDateTime = document.querySelector(".main__date-time");
  const mainCurrentWeather = document.querySelector(".main__current-weather");

  const date = new Date(weather.dt * 1000);
  mainDateTime.textContent = formatDate(date);

  const description = weather.weather[0].main;
  const temp = Math.round(weather.temp);
  mainCurrentWeather.innerHTML = `${description} - ${temp}&deg; C`;
}

export { displayLocation, displayWeatherSummary };
