import React from 'react'
import '../Style/Sponsors.css'
import apple from '../Media/Apple.svg'
import microsoft from '../Media/microsoft 1.svg'
import slack from '../Media/Slack.svg'
import google from '../Media/Google.svg'
const Sponsors = () => {
  return (
    <div className="sponsors-container">
        Our sponsors
        <div className="sponsor">
          <img src={apple} alt="apple" />
          <img src={microsoft} alt="microsoft" />
          <img src={slack} alt="slack" />
          <img src={google} alt="google" />
        </div>
    </div>
  )
}

export default Sponsors