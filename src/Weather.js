import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";


export default function Weather (props){
    const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
      console.log("API response:", response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  useEffect(() => {
    const apiKey = "oa13410f1922d7b4t12b44ae83ead081";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.defaultCity]);

  if (!weatherData.ready) {
    return <p>Loading...</p>;
  }
    return <div className="Weather">
        <form className="mt-3">
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..."className="form-control" autoFocus="on"/>
           </div>
           <div className="col-3">
           < input type="submit" value="Search" className="btn btn-primary w-100"/>
           </div>
           </div>
            </form>
       <h1 className="mb-2 ml-5 mt-3">{weatherData.city}</h1>
       <ul>
        <li><FormattedDate date={weatherData.date}/></li>
          <li className="text-capitalize">{weatherData.description}</li>
       </ul>
       <div className="row">
        <div className="col-6">
                       <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left mb-4"/>
      
         <span className="temperature">{Math.round(weatherData.temperature)}</span>
           <span className="unit mb-5 fs-5">&deg;C</span>
 </div>
         
      
        <div className="col-6">
            <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li> Wind:{weatherData.wind}</li>
            </ul>
          
        </div>
       </div>
    </div>
}