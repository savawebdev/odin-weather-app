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

function createHourlyCard() {
  const hourlyCard = document.createElement("div");
  hourlyCard.classList.add("hourly__card");

  const hourlyTime = document.createElement("span");
  hourlyTime.classList.add("hourly__time");

  const hourlyTemp = document.createElement("span");
  hourlyTemp.classList.add("hourly__temp");

  const hourlyIcon = document.createElement("img");
  hourlyIcon.classList.add("hourly__icon");

  const hourlyDescription = document.createElement("span");
  hourlyDescription.classList.add("hourly__description");
}

export { displayLocation, displayWeatherSummary, createHourlyCard };
