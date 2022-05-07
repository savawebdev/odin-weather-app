async function getLocation(lat, long) {
  const API_KEY = "99854c2dd0b3b868ba56a5c296587926";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`
  );

  const data = await res.json();

  return {
    city: data.name,
    country: data.sys.country,
  };
}

async function getCoordinates(location) {
  const API_KEY = "99854c2dd0b3b868ba56a5c296587926";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`
  );

  const data = await res.json();

  return {
    lat: data.coord.lat,
    long: data.coord.lon,
  };
}

async function getWeather(lat, long) {
  const API_KEY = "99854c2dd0b3b868ba56a5c296587926";

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`,
    { mode: "cors" }
  );

  const data = await res.json();

  return data;
}

export { getLocation, getCoordinates, getWeather };
