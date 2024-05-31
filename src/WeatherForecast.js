import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherDayForecast from "./WeatherDayForecast.js";

export default function WeatherForecast(props) {
  let [dailyForecast, setDailyForecast] = useState("");
  let [loaded, setLoaded] = useState(false);

  function manageResponse(response) {
    setDailyForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherDayForecast date={dailyForecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.data.coordinates.longitude;
    let latitude = props.data.coordinates.latitude;
    let apiKey = `017e2af483beec2b2e23fafdtf1f298o`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(manageResponse);

    return "";
  }
}
