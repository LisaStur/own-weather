import React from 'react'
import styled from 'styled-components'
import arrow from 'assets/arrow.png'

const ArrowN = styled.img`
transform: rotate(15deg);
  width: 10%; 
`
const ArrowNNW = styled.img`
  transform: rotate(-15deg);
  width: 10%;
`
const ArrowNW = styled.img`
  transform: rotate(-45deg);
  width: 10%;
`
const ArrowWNW = styled.img`
  transform: rotate(-60deg);
  width: 10%;
`
const ArrowW = styled.img`
  transform: rotate(-90deg); 
  width: 10%;
`
const ArrowWSW = styled.img`
  transform: rotate(-110deg); 
  width: 10%;
`
const ArrowSW = styled.img`
  transform: rotate(-135deg); 
  width: 10%;
`
const ArrowSSW = styled.img`
  transform: rotate(-155deg); 
  width: 10%;
`
const ArrowS = styled.img`
  transform: rotate(180deg); 
  width: 10%;
`
const ArrowSSE = styled.img`
  transform: rotate(155deg); 
  width: 10%;
`
const ArrowSE = styled.img`
  transform: rotate(135deg); 
  width: 10%;
`
const ArrowESE = styled.img`
  transform: rotate(110deg); 
  width: 10%;
`
const ArrowE = styled.img`
  transform: rotate(90deg);
  width: 10%;
`
const ArrowENE = styled.img`
  transform: rotate(60deg);
  width: 10%;
`
const ArrowNE = styled.img`
  transform: rotate(45deg);
  width: 10%;
`
const ArrowNNE = styled.img`
  transform: rotate(15deg); 
  width: 10%;
`

export const CurrentWind = ({ windSpeed, windDirection }) => {
  if (windDirection > 341) {
    return (
      <>
        <ArrowN src={arrow} alt="North" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 321) {
    return (
      <>
        <ArrowNNW src={arrow} alt="North North-West" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 301) {
    return (
      <>
        <ArrowNW src={arrow} alt="North-West" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 281) {
    return (
      <>
        <ArrowWNW src={arrow} alt="West North-West" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 251) {
    return (
      <>
        <ArrowW src={arrow} alt="West" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 231) {
    return (
      <>
        <ArrowWSW src={arrow} alt="West South-West" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 211) {
    return (
      <>
        <ArrowSW src={arrow} alt="South-West" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 191) {
    return (
      <>
        <ArrowSSW src={arrow} alt="South South-West" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 161) {
    return (
      <>
        <ArrowS src={arrow} alt="South" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 141) {
    return (
      <>
        <ArrowSSE src={arrow} alt="South South-East" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 121) {
    return (
      <>
        <ArrowSE src={arrow} alt="South-East" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 101) {
    return (
      <>
        <ArrowESE src={arrow} alt="East South-East" />
        <h1> {windSpeed}</h1>
      </>
    )
  } else if (windDirection > 71) {
    return (
      <>
        <ArrowE src={arrow} alt="North North East" />
        <h1>{windSpeed}</h1>
      </>
    )
  } else if (windDirection > 51) {
    return (
      <>
        <ArrowENE src={arrow} alt="North North East" />
        <h1>{windSpeed}</h1>
      </>
    )
  } else if (windDirection > 31) {
    return (
      <>
        <ArrowNE src={arrow} alt="North North East" />
        <h1>{windSpeed}</h1>
      </>
    )
  } else if (windDirection > 11) {
    return (
      <>
        <ArrowNNE src={arrow} alt="North North East" />
        <h1>{windSpeed}</h1>
      </>
    )
  } else {
    return (
      <>
        <ArrowN src={arrow} alt="North" />
        <h1> {windSpeed}</h1>
      </>
    )
  }
}