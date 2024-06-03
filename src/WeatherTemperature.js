import React from "react";

export default function WeatherTemperature(props) {
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{props.celsius}</strong>
        <span className="temp-unit">
          °C 
        </span>
      </div>
    );
}
