import {
  loadCurrentLocationWeather,
  loadHourlyWeather,
} from "./modules/load-data";
import { getWeather } from "./modules/fetch-data";
import "./css/index.css";

navigator.geolocation.getCurrentPosition((pos) => {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;

  getWeather(lat, long).then((data) => {
    loadCurrentLocationWeather(lat, long, data.current);
    loadHourlyWeather(data.hourly);
  });
});
