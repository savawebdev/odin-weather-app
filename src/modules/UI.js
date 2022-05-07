import { formatDate, formatCurrentDetailsData } from "./helpers";

// Display the city name
function displayLocation(location) {
  const mainTitle = document.querySelector(".main__title");

  mainTitle.textContent = `${location.city}, ${location.country}`;
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
  hourlyGrid.innerHTML = "";

  data.forEach((el, i) => {
    const date = new Date(el.dt * 1000);
    const time = i === 0 ? "now" : date.getHours();
    const temp = Math.round(el.temp);
    const icon = el.weather[0].icon;
    const precipitationChance = el.pop * 100;
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
  const currentDetailsGrid = document.querySelector(".current-details__grid");
  currentDetailsGrid.innerHTML = "";
  const dataArray = formatCurrentDetailsData(data);

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

// Display the daily weather
function displayDailyWeather(data) {
  const dailyContent = document.querySelector(".daily__content");
  dailyContent.innerHTML = "";

  data.forEach((day) => {
    const date = new Date(day.dt * 1000).toLocaleDateString("en-GB", {
      weekday: "short",
      month: "long",
      day: "numeric",
    });
    const icon = day.weather[0].icon;
    const pop = day.pop;
    const temp = [Math.round(day.temp.day), Math.round(day.temp.night)];

    const element = createDailyCard(date, icon, pop, temp);
    dailyContent.appendChild(element);
  });
}

// Creat the daily card to show in daily weather
function createDailyCard(date, icon, pop, temp) {
  const dailyCard = document.createElement("div");
  dailyCard.classList.add("daily__card");

  const dailyDate = document.createElement("span");
  dailyDate.classList.add("daily__date");
  dailyDate.textContent = date;

  const dailyIcon = document.createElement("img");
  dailyIcon.classList.add("daily__icon");
  dailyIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );

  const dailyPrecipitationChance = document.createElement("span");
  dailyPrecipitationChance.classList.add("daily__precipitation-chance");
  dailyPrecipitationChance.textContent = pop * 100 + "%";

  const dailyTemp = document.createElement("span");
  dailyTemp.classList.add("daily__temp");
  dailyTemp.innerHTML = `${temp[0]}&deg;C / ${temp[1]}&deg;C`;

  dailyCard.append(dailyDate, dailyIcon, dailyPrecipitationChance, dailyTemp);

  return dailyCard;
}

export {
  displayLocation,
  displayWeatherSummary,
  displayHourlyWeather,
  displayCurrentDetails,
  displayDailyWeather,
};
