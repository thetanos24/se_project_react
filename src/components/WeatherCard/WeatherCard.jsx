import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
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
      <p className="weather-card__temp">{weatherData?.temp?.F}&deg; F</p>
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
