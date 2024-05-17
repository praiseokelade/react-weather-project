import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

   function convertToCelsius(event) {
     event.preventDefault();
     setUnit("celsius");
   }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{props.celsius}</strong>
        <span className="temp-unit">
          °C |{" "}
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
      let fahrenheit = Math.round((props.celsius * 9/5) + 32)
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{fahrenheit}</strong>
        <span className="temp-unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
