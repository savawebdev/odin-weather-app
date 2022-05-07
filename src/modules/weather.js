async function getWeather(lat, long) {
  const API_KEY = "99854c2dd0b3b868ba56a5c296587926";

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`,
    { mode: "cors" }
  );

  const data = await res.json();

  console.log(data);
}
