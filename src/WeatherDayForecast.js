import React from "react";

export default function WeatherDayForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <img src={props.data.condition.icon_url} alt={props.data.condition.icon} />
      <div className="temperatures">
        <span className="temperature-max">{maxTemperature()}°</span>
        <span className="temperature-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
