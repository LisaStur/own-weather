import React from 'react'

export const CurrentTemp = ({ temp, feelsLike }) => {
  if (temp !== feelsLike) {
    return <h1>Currently {Math.round(temp)}° but feels like {Math.round(feelsLike)}°</h1>
  } else {
    return <h1>Currently {Math.round(temp)}</h1>
  }
}