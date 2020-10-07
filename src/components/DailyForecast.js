import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchDailyForecasts } from 'reducers/weatherReducer'

const DailySection = styled.section`
  background-color: lightblue;
`

export const DailyForecast = () => {
  const dispatch = useDispatch()
  const dailyForecasts = useSelector((store) => store.reducer.dailyForecasts)

  useEffect(() => {
    dispatch(fetchDailyForecasts())
  }, [dispatch])
  const dailies = Array.from(dailyForecasts)

  return (
    <DailySection>
      {dailies.map((daily) => (
        <div key={daily.dt}>
          <p>{daily.clouds}</p>
        </div>
      ))}
    </DailySection>
  )
}