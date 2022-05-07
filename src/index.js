import {
  loadCurrentLocationWeather,
  loadHourlyWeather,
  loadCurrentDetails,
  loadDailyWeather,
} from "./modules/load-data";
import { getWeather, getCoordinates } from "./modules/fetch-data";
import "./css/index.css";

navigator.geolocation.getCurrentPosition((pos) => {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;

  getWeather(lat, long).then((data) => {
    loadCurrentLocationWeather(lat, long, data.current);
    loadHourlyWeather(data.hourly);
    loadCurrentDetails(data.current);
    loadDailyWeather(data.daily);
  });
});

const mastheadBtn = document.querySelector(".masthead__btn");
const mastheadForm = document.querySelector(".masthead__form");

async function handleForm(e) {
  e.preventDefault();
  const { lat, long } = await getCoordinates(e.target[0].value);

  getWeather(lat, long).then((data) => {
    loadCurrentLocationWeather(lat, long, data.current);
    loadHourlyWeather(data.hourly);
    loadCurrentDetails(data.current);
    loadDailyWeather(data.daily);
  });
}

mastheadForm.addEventListener("submit", handleForm);
