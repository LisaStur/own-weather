import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchHourlyForecasts } from 'reducers/weatherReducer'

const HourlySection = styled.section`
  background-color: lightyellow;
`

export const HourlyForecast = () => {
  const dispatch = useDispatch()
  const hourlyForecasts = useSelector((store) => store.reducer.hourlyForecasts)

  useEffect(() => {
    dispatch(fetchHourlyForecasts())
  }, [dispatch])
  const hourlies = Array.from(hourlyForecasts)

  return (
    <HourlySection>
      {hourlies.map((hourly) => (
        <div key={hourly.dt}>
          <p>{hourly.temp}</p>
        </div>
      ))}
    </HourlySection>
  )
}