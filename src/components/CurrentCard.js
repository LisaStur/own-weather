import React from 'react'
import { CurrentTemp } from './CurrentTemp'
import { CurrentWind } from './CurrentWind'

export const CurrentCard = ({ temp, feelsLike, windDirection, windSpeed }) => {
  return (
    <div>
      <CurrentTemp temp={temp} feelsLike={feelsLike} />
      <CurrentWind windSpeed={windSpeed} windDirection={windDirection} />
    </div>
  )
}
