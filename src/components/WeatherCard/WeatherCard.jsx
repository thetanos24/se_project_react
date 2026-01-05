import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContex from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContex);

  const isDaytime = weatherData?.isDay ?? true;

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData?.isDay &&
      option.condition === weatherData?.condition
    );
  });

  let weatherOption;
  let weatherConditionForAlt = weatherData?.condition;

  if (filteredOptions.length === 0) {
    weatherOption = isDaytime
      ? defaultWeatherOptions.day
      : defaultWeatherOptions.night;
    weatherConditionForAlt = "unknown";
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]}&deg;{currentTemperatureUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Weather card showing ${
          isDaytime ? "day" : "night"
        }time ${weatherConditionForAlt} weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
