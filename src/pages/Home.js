import React from 'react'
import { CurrentWeather } from 'components/CurrentWeather'
import { DailyForecast } from 'components/DailyForecast'
import { HourlyForecast } from 'components/HourlyForecast'

export const Home = () => {
  return (
    <div>
      <CurrentWeather />
      <DailyForecast />
      <HourlyForecast />
    </div>
  )
}