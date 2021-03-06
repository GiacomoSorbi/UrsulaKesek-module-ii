import React from "react";
import "./SingleWeatherCard.css";

function SingleWeatherCard({ city,data }) {
  return (
    <div className="weather-card">
      <div className="temp">
        <h3>Temperature</h3>
      </div>
      <div className="minmaxhum">
        <h4>
          {data.main.temp_min
            ? ` Min:${(data.main.temp_min - 273.15).toFixed(0)} ° C`
            : ""}
        </h4>
        <h4>
          {data.main.temp_max
            ? ` Max:${(data.main.temp_max - 273.15).toFixed(0)} ° C`
            : ""}
        </h4>
        <h5>{data.main.humidity ? `Humidity:${data.main.humidity}` : ""}</h5>
      </div>
      <div className="minmaxf">
        <h4>
          {data.main.temp_min
              ? `Min:${((data.main.temp_min - 273.15) * 1.8 + 32).toFixed(0)} ° F`
              : ""}
        </h4>
        <h4>
          {data.main.temp_max
              ? `Max:${((data.main.temp_max - 273.15) * 1.8 + 32).toFixed(0)} ° F`
              : ""}
        </h4>
      </div>
      <h4>
        {data.rain
          ? `Chances of rain in ${city}:${(data.rain["1h"] * 100).toFixed(0)}%`
          : `Chances of rain in ${city} is 0%`}
      </h4>
      <h4>
        {data.weather[0].description
          ? `What's it like out there:${data.weather[0].description}`
          : ""}
      </h4>
      <div className="icons">
        <h1>
          <img
            alt="weather-icon"
            className="icon"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          />
        </h1>
      </div>

    </div>
  );
}
export default SingleWeatherCard;
