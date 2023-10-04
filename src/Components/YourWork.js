import React from 'react'
import '../Style/YourWork.css'
import arrow from '../Media/Arrow.svg'
const YourWork = () => {
  return (
    <div className='yw-container'>
        <div className="yw-heading">
            <div className="yw-text-block">
                <div className="yw-text1">Your work, everywhere you are</div>
                <div className="yw-text2">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</div>
            </div>
            <button className='taskey-button'>Try Taskey <img src={arrow} alt="arrow" /></button>
        </div>
    </div>
  )
}

export default YourWork 