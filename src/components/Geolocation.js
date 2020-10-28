import React from 'react'
import { useDispatch } from 'react-redux'
import { weatherReducer } from 'reducers/weatherReducer'
import { usePosition } from 'use-position'

export const Geolocation = () => {
  const dispatch = useDispatch()
  const { latitude, longitude, error } = usePosition()
  dispatch(weatherReducer.actions.setLocation({ latitude, longitude, error }))

  return (
    <div>
      latitude: {latitude}<br />
      longitude: {longitude}<br />
      {error}
    </div>
  )
}