export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/DayConditions/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../images/DayConditions/cloudycondition.svg", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../images/DayConditions/fogcondition.svg", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../images/DayConditions/raincondition.svg", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../images/DayConditions/snowcondition.svg", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../images/DayConditions/stormcondition.svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../images/NightConditions/clearnight.svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../images/NightConditions/cloudnight.svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../images/NightConditions/fognight.svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../images/NightConditions/rainnight.svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../images/NightConditions/snownight.svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../images/NightConditions/stormnight.svg", import.meta.url)
      .href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../images/DayConditions/daydefault.svg", import.meta.url)
      .href,
  },
  night: {
    url: new URL("../images/NightConditions/nightdefault.svg", import.meta.url)
      .href,
  },
};

export const coordinates = {
  latitude: 33.629247,
  longitude: -112.368143,
};

export const apiKey = "176789e498e8f87baeca708340107615";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
