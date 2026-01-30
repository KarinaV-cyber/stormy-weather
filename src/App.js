import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="New York" />

      <footer>
        This project was coded by Karina and is open-sourced{" "}
        <a
          className="App-link"
          href="https://github.com/KarinaV-cyber/stormy-weather"
          target="_blank"
          rel="noopener noreferrer"
        >
          on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}

export default App;




