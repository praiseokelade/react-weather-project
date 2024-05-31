import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDayForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.daily.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.daily.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.daily.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <WeatherIcon code={props.daily.condition.icon} size={36} />
      <div className="temperatures">
        <span className="temperature-max">{maxTemperature()}°</span>
        <span className="temperature-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
