import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { weatherReducer } from 'reducers/weatherReducer'
import { Home } from './pages/Home'

const reducers = combineReducers(weatherReducer)

/* eslint no-underscore-dangle:
["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
)

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
