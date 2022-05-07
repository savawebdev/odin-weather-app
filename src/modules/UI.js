import { formatDate, formatCurrentDetailsData } from "./helpers";

// Display the city name
function displayLocation(location) {
  const mainTitle = document.querySelector(".main__title");

  mainTitle.textContent = location.region;
}

// Display the weather summary below the city name
function displayWeatherSummary(data) {
  const mainDateTime = document.querySelector(".main__date-time");
  const mainCurrentWeather = document.querySelector(".main__current-weather");

  const date = new Date(data.dt * 1000);
  mainDateTime.textContent = formatDate(date);

  const description = data.weather[0].main;
  const temp = Math.round(data.temp);
  mainCurrentWeather.innerHTML = `${description} - ${temp}&deg; C`;
}

// Display the hourly weather
function displayHourlyWeather(data) {
  const hourlyGrid = document.querySelector(".hourly__grid");

  data.forEach((el, i) => {
    const date = new Date(el.dt * 1000);
    const time = i === 0 ? "now" : date.getHours();
    const temp = Math.round(el.temp);
    const icon = el.weather[0].icon;
    const precipitationChance = el.pop;
    const description = el.weather[0].description;

    const gridElement = createHourlyCard(
      time,
      temp,
      icon,
      precipitationChance,
      description
    );
    hourlyGrid.appendChild(gridElement);
  });
}

// Create the hourly weather card
function createHourlyCard(time, temp, icon, precipitationChance, description) {
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

  const hourlyPrecipitationChance = document.createElement("span");
  hourlyPrecipitationChance.classList.add("hourly__precipitation-chance");
  hourlyPrecipitationChance.textContent = `${precipitationChance}%`;

  const hourlyDescription = document.createElement("span");
  hourlyDescription.classList.add("hourly__description");
  hourlyDescription.textContent = description;

  hourlyCard.append(
    hourlyTime,
    hourlyTemp,
    hourlyIcon,
    hourlyPrecipitationChance,
    hourlyDescription
  );

  return hourlyCard;
}

// Display the current weather details
function displayCurrentDetails(data) {
  console.log(data);
  const currentDetailsGrid = document.querySelector(".current-details__grid");
  const dataArray = formatCurrentDetailsData(data);

  console.log(dataArray);

  dataArray.forEach((el) => {
    const gridElement = createCurrentDetailsCard(el.name, el.data);
    currentDetailsGrid.appendChild(gridElement);
  });
}

// Create the details card to show in current details
function createCurrentDetailsCard(title, data) {
  const currentDetailsCard = document.createElement("div");
  currentDetailsCard.classList.add("current-details__card");

  const currentDetailsTitle = document.createElement("span");
  currentDetailsTitle.classList.add("current-details__title");
  currentDetailsTitle.textContent = title;

  const currentDetailsData = document.createElement("span");
  currentDetailsData.classList.add("current-details__data");
  currentDetailsData.textContent = data;

  currentDetailsCard.append(currentDetailsTitle, currentDetailsData);

  return currentDetailsCard;
}

export {
  displayLocation,
  displayWeatherSummary,
  displayHourlyWeather,
  displayCurrentDetails,
};
