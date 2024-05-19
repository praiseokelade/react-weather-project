import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Manchester"/>
        <footer>
          This project was coded by Praise Okelade and is open-sourced on{" "}
          <a
            href="https://github.com/praiseokelade/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

