import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchCurrentWeather } from 'reducers/weatherReducer'

const CurrentSection = styled.section`
  background-color: pink;
`

export const CurrentWeather = () => {
  const dispatch = useDispatch()
  const currentWeather = useSelector((store) => store.reducer.currentWeather)

  useEffect(() => {
    dispatch(fetchCurrentWeather())
  }, [dispatch])

  return (
    <CurrentSection>
      <p>{currentWeather.clouds}</p>
      <p>{currentWeather.wind_speed}</p>
      <p>{currentWeather.temp}</p>
    </CurrentSection>
  )
}