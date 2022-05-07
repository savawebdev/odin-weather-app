import { getWeather } from "./weather";

async function loadHourlyWeather(lat, long) {
  const data = await getWeather();
}

export { loadHourlyWeather };
