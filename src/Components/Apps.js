import React from 'react'
import '../Style/Apps.css'
import apps from '../Media/Apps.png'
import textData from '../Data/TextData'
import TextElementWhite from './TextElementWhite'
const Apps = () => {
  return (
    <div className="apps-container">
        <div className="apps-image">
            <img src={apps} alt="apps" />
        </div>
        <TextElementWhite data={textData[4]}/>
    </div>
  )
}

export default Apps