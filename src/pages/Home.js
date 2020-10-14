import React from 'react'
import styled from 'styled-components'
import { CurrentWeather } from 'components/CurrentWeather'
import { DailyForecast } from 'components/DailyForecast'
import { HourlyForecast } from 'components/HourlyForecast'
import { Sky } from 'components/Sky'

const HomeContainer = styled.section`
background: linear-gradient(to bottom, #0000 0%, #0d59cc 100%);
`

export const Home = () => {
  return (
    <HomeContainer>
      <Sky />
      <CurrentWeather />
      <DailyForecast />
      <HourlyForecast />
    </HomeContainer>
  )
}