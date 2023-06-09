import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
            <Weather defaultCity="Winnipeg"/>
      <footer>
        This project was coded by Olesia Fatenko and is{" "}
        <a href="https://github.com/Folesia/react-weather-app" target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}
