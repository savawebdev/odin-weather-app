async function getLocation(lat, long) {
  const API_KEY = "27789636179621174688x78507";

  const res = await fetch(
    `https://geocode.xyz/?locate=${lat},${long}&json=1&auth=${API_KEY}`
  );

  const data = await res.json();

  return data;
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

export { getLocation, getWeather };
