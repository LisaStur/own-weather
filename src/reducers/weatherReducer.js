import { createSlice } from '@reduxjs/toolkit'

export const weatherReducer = createSlice({
  name: 'weatherReducer',
  initialState: {
    location: [],
    sky: [],
    currentWeather: [],
    dailyForecasts: [],
    hourlyForecasts: []
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },
    setSky: (state, action) => {
      state.sky = action.payload
    },
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload
    },
    setDailyForecasts: (state, action) => {
      state.dailyForecasts = action.payload
    },
    setHourlyForecasts: (state, action) => {
      state.hourlyForecasts = action.payload
    }
  }
})

const WEATHER_API = `https://api.openweathermap.org/data/2.5/onecall?lat=59.334591&lon=18.063240&exclude=minutely,alerts&units=metric&appid=00620bb638ed0fa5525452696e39c3ed`

export const fetchSky = () => {
  return (dispatch) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=59.334591&lon=18.063240&exclude=minutely,alerts&units=metric&appid=00620bb638ed0fa5525452696e39c3ed`)
      .then((res) => res.json())
      .then((json) => dispatch(weatherReducer.actions.setSky(json.current.weather[0])))
  }
}

export const fetchCurrentWeather = () => {
  return (dispatch) => {
    fetch(WEATHER_API)
      .then((res) => res.json())
      .then((json) => dispatch(weatherReducer.actions.setCurrentWeather(json.current)))
  }
}

export const fetchDailyForecasts = () => {
  return (dispatch) => {
    fetch(WEATHER_API)
      .then((res) => res.json())
      .then((json) => dispatch(weatherReducer.actions.setDailyForecasts(json.daily)))
  }
}

export const fetchHourlyForecasts = () => {
  return (dispatch) => {
    fetch(WEATHER_API)
      .then((res) => res.json())
      .then((json) => dispatch(weatherReducer.actions.setHourlyForecasts(json.hourly)))
  }
}
