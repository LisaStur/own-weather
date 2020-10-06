import React, { useEffect, useState } from 'react'

export const Home = () => {
  const WEATHER_API = 'https://api.openweathermap.org/data/2.5/onecall?lat=59.334591&lon=18.063240&exclude=minutely&appid=00620bb638ed0fa5525452696e39c3ed'
  const [weather, setWeather] = useState('')

  useEffect(() => {
    fetch(WEATHER_API)
      .then((res) => res.json())
      .then((json) => setWeather(json.current))
  }, [])
  console.log(weather)

  return (
    <div>
      {weather.clouds}
    </div>
  )
}