import React from 'react'
import "./App"
import WeatherCard from './Components/WeatherCard'

const App = () => {
  return (
   <>
   <WeatherCard
   name={"Jaipur"}
    data={"30°"}
    Wind={"10km/h"}>

   </WeatherCard>

      <WeatherCard
        name={"Mumbai"}
        data={"20°"}
        Wind={"15km/h"}>
      </WeatherCard>
   </>

  )
}

export default App
