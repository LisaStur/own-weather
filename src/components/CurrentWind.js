import React from 'react'

export const CurrentWind = ({ windSpeed, windDirection }) => {
  if (windDirection > 341) {
    return <h1>N and {windSpeed}</h1>
  } else if (windDirection > 321) {
    return <h1>N/NW and {windSpeed}</h1>
  } else if (windDirection > 301) {
    return <h1>NW and {windSpeed}</h1>
  } else if (windDirection > 281) {
    return <h1>W/NW and {windSpeed}</h1>
  } else if (windDirection > 251) {
    return <h1>W and {windSpeed}</h1>
  } else if (windDirection > 231) {
    return <h1>W/SW and {windSpeed}</h1>
  } else if (windDirection > 211) {
    return <h1>SW and {windSpeed}</h1>
  } else if (windDirection > 191) {
    return <h1>S/SW and {windSpeed}</h1>
  } else if (windDirection > 161) {
    return <h1>S and {windSpeed}</h1>
  } else if (windDirection > 141) {
    return <h1>S/SE and {windSpeed}</h1>
  } else if (windDirection > 121) {
    return <h1>SE and {windSpeed}</h1>
  } else if (windDirection > 101) {
    return <h1>E/SE and {windSpeed}</h1>
  } else if (windDirection > 71) {
    return <h1>E and {windSpeed}</h1>
  } else if (windDirection > 51) {
    return <h1>E/NE and {windSpeed}</h1>
  } else if (windDirection > 31) {
    return <h1>NE and {windSpeed}</h1>
  } else if (windDirection > 11) {
    return <h1>N/NE and {windSpeed}</h1>
  } else {
    return <h1>Not sure and {windSpeed}</h1>
  }
}