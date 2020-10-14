import React from 'react'
import { CurrentWeather } from 'components/CurrentWeather'
import { DailyForecast } from 'components/DailyForecast'
import { HourlyForecast } from 'components/HourlyForecast'
import { Sky } from 'components/Sky'

export const Home = () => {
  return (
    <div>
      <Sky />
      <CurrentWeather />
      <DailyForecast />
      <HourlyForecast />
    </div>
  )
}