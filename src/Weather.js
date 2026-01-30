import React from "react";
import "./Weather.css";


export default function Weather (){
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
       <h1 className="mb-2 ml-5 mt-3">Lisbon</h1>
       <ul>
        <li>Wednesday 07:00 </li>
          <li>Mostly Cloudy </li>
       </ul>
       <div className="row">
        <div className="col-6">
                       <img src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg" alt="Mostly cloudy" className="float-left mb-4"/>
      
         <span className="temperature">6</span>
           <span className="unit mb-5">&deg; C</span>
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