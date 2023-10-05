import React from 'react'
import arrow from '../Media/Arrow.svg'
const BlueButton = (props) => {
  return (
    <button className="try-button">{props.text}
    <img src={arrow} alt="arrow" /></button>
  )
}

export default BlueButton