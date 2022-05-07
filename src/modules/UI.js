import { formatDate } from "./helpers";

function displayLocation(location) {
  const mainTitle = document.querySelector(".main__title");

  mainTitle.textContent = location.region;
}

function displayWeatherSummary(data) {
  const mainDateTime = document.querySelector(".main__date-time");
  const mainCurrentWeather = document.querySelector(".main__current-weather");

  const date = new Date(data.dt * 1000);
  mainDateTime.textContent = formatDate(date);

  const description = data.weather[0].main;
  const temp = Math.round(data.temp);
  mainCurrentWeather.innerHTML = `${description} - ${temp}&deg; C`;
}

function displayHourlyWeather(data) {
  const hourlyGrid = document.querySelector(".hourly__grid");

  console.log(data);

  data.forEach((el, i) => {
    const date = new Date(el.dt * 1000);
    const time = i === 0 ? "now" : date.getHours();
    const temp = Math.round(el.temp);
    const icon = el.weather[0].icon;
    const description = el.weather[0].description;

    const gridElement = createHourlyCard(time, temp, icon, description);
    hourlyGrid.appendChild(gridElement);
  });
}

function createHourlyCard(time, temp, icon, description) {
  const hourlyCard = document.createElement("div");
  hourlyCard.classList.add("hourly__card");

  const hourlyTime = document.createElement("span");
  hourlyTime.classList.add("hourly__time");
  hourlyTime.textContent = time;

  const hourlyTemp = document.createElement("span");
  hourlyTemp.classList.add("hourly__temp");
  hourlyTemp.innerHTML = `${temp}&deg; C`;

  const hourlyIcon = document.createElement("img");
  hourlyIcon.classList.add("hourly__icon");
  hourlyIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );

  const hourlyDescription = document.createElement("span");
  hourlyDescription.classList.add("hourly__description");
  hourlyDescription.textContent = description;

  hourlyCard.append(hourlyTime, hourlyTemp, hourlyIcon, hourlyDescription);

  return hourlyCard;
}

export { displayLocation, displayWeatherSummary, displayHourlyWeather };
