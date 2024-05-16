import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState({});
  let [description, setDescription] = useState({});
  let [humidity, setHumidity] = useState({});
  let [wind, setWind] = useState({});
  let [icon, setIcon] = useState({});
  let [date, setDate] = useState({})

  function handleSearch(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.temperature.current));
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(Math.round(response.data.wind.speed));
    setReady(true);
    setIcon(response.data.condition.icon_url);
    setDate("Wednesday 17:00");
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{props.city}</h1>
        <ul>
          <li>{date}</li>
          <li className="text-capitalize">{description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={icon} alt={description} />
            <strong className="temperature">{temperature}</strong>
            <span className="temp-unit">°C | F°</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {humidity}%</li>
              <li>Wind: {wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "017e2af483beec2b2e23fafdtf1f298o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);

    return "Loading...";
  }
}
