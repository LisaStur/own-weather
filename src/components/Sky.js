import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchSky } from 'reducers/weatherReducer'
import cloudy from 'assets/cloudy.png'
import sun from 'assets/sun.png'
import rain from 'assets/rain.png'
import snow from 'assets/snow.png'
import thunder from 'assets/thunder.png'
import either from 'assets/either.png'

const Image = styled.img`
  width: 100%;
  height: auto
`

export const Sky = () => {
  const dispatch = useDispatch()
  const sky = useSelector((store) => store.reducer.sky)

  useEffect(() => {
    dispatch(fetchSky())
  }, [dispatch])

  if (sky.main === 'Clouds') {
    return <Image src={cloudy} />
  } else if (sky.main === 'Clear') {
    return <Image src={sun} />
  } else if (sky.main === 'Snow') {
    return <Image src={snow} />
  } else if (sky.main === 'Rain') {
    return <Image src={rain} />
  } else if (sky.main === 'Drizzle') {
    return <Image src={rain} />
  } else if (sky.main === 'Thuderstorm') {
    return <Image src={thunder} />
  } else {
    return <Image src={either} />
  }
}