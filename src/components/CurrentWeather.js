import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchCurrentWeather } from 'reducers/weatherReducer'
import { CurrentCard } from './CurrentCard'

const CurrentSection = styled.section`
  displey: flex;
`

export const CurrentWeather = () => {
  const dispatch = useDispatch()
  const currentWeather = useSelector((store) => store.reducer.currentWeather)

  useEffect(() => {
    dispatch(fetchCurrentWeather())
  }, [dispatch])

  return (
    <CurrentSection>
      <CurrentCard
        clouds={currentWeather.clouds}
        temp={currentWeather.temp}
        feelsLike={currentWeather.feels_like}
        windSpeed={currentWeather.wind_speed}
        windDirection={currentWeather.wind_deg} />
    </CurrentSection>
  )
}