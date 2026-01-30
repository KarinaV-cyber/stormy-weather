import React from "react";
import "./Weather.css";


export default function Weather (){
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..."className="form-control" autoFocus="on"/>
           </div>
           <div className="col-3">
           < input type="submit" value="Search" className="btn btn-primary"/>
           </div>
           </div>
            </form>
       <h1>Lisbon</h1>
       <ul>
        <li>Wednesday 07:00 </li>
          <li>Mostly Cloudy </li>
       </ul>
       <div className="row">
        <div className="col-6">
            <img src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg" alt="Mostly cloudy"/>
          6 &deg; 
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 25%</li>
                <li> Wind: 13 km/h%</li>
                <li>Humidity: 72% </li>
            </ul>

        </div>
       </div>
    </div>
}