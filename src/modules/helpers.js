function formatDate(date) {
  const options = {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h24",
  };
  const formatedDate = date.toLocaleDateString("en-US", options);

  return formatedDate;
}

/*
  sunrise   sunset    feels like    humidity    
  UV index  visibility  wind speed   presure
*/

function formatCurrentDetailsData(data) {
  const sunrise = new Date(data.sunrise * 1000);
  const sunset = new Date(data.sunset * 1000);
  const sunriseTime = sunrise.toLocaleTimeString("en-GB");
  const sunsetTime = sunset.toLocaleTimeString("en-GB");

  const dataArray = [
    {
      name: "Sunrise",
      data: sunriseTime,
    },
    {
      name: "Sunset",
      data: sunsetTime,
    },
    {
      name: "Feels Like",
      data: Math.round(data.feels_like) + "\u00B0",
    },
    {
      name: "Humidity",
      data: data.humidity + "%",
    },
    {
      name: "UV Index",
      data: data.uvi,
    },
    {
      name: "Visibility",
      data: `${data.visibility / 1000} km`,
    },
    {
      name: "Wind",
      data: `${degToCompass(data.wind_deg)}: ${data.wind_speed} m/s`,
    },
    {
      name: "Pressure",
      data: data.pressure + "hPa",
    },
  ];

  return dataArray;
}

function degToCompass(num) {
  let val = parseInt(num / 22.5 + 0.5);
  let arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  return arr[val % 16];
}

export { formatDate, formatCurrentDetailsData };
