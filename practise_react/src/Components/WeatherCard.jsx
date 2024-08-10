import React from 'react'
import "./WeatherCard.css"

const WeatherCard = ({name ,data ,Wind}) => {
  return (
      <div className="card">
  <h2>{name}</h2>
  <h3>Cloudy<span>{Wind} <span className="dot">•</span> Precip 0%</span></h3>
  <h1>{data}</h1>
  <div className="sky">
    <div className="sun" />
    <div className="cloud">
      <div className="circle-small" />
      <div className="circle-tall" />
      <div className="circle-medium" />
    </div>
  </div>
  <table>
    <tbody><tr>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
        <td>30°</td>
        <td>34°</td>
        <td>36°</td>
        <td>34°</td>
        <td>37°</td>
      </tr>
      <tr>
        <td>17°</td>
        <td>22°</td>
        <td>19°</td>
        <td>23°</td>
        <td>19°</td>
      </tr>
    </tbody></table>
</div>

  )
}

export default WeatherCard
