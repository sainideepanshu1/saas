import React from 'react'
import '../Style/YourData.css'
import element from '../Media/Element.png'

const YourData = () => {
  return (
    <div className="yd-container">
        <div className="yd-heading">
            <div className="yd-text">
                <div className="yd-text1">100% your data</div>
                <div className="yd-text2">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</div>
            </div>
        </div>
        <div className="element">
            <img src={element} alt="elements" />
        </div>
    </div>
  )
}

export default YourData