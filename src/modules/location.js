async function getLocation(lat, long) {
  const API_KEY = "27789636179621174688x78507";

  const res = await fetch(
    `https://geocode.xyz/?locate=${lat},${long}&json=1&auth=${API_KEY}`
  );

  const data = await res.json();

  return data;
}

export { getLocation };
