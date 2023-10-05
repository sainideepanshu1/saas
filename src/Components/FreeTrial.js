import React from 'react'
import '../Style/FreeTrial.css'
import arrow from '../Media/Arrow.svg'
import apple from '../Media/apple-black-logo 2.svg'
import windows from '../Media/windows-logo 1.svg'
import android from '../Media/android-logo 1.svg'
const FreeTrial = () => {
    return (
        <div className="freetrial-container">
            <div className="free-heading">
                <div className="headings">
                    <div className="upper-head">Try Whitespace today</div>
                    <div className="lower-head">Get started for free. <br /> Add your whole team as your needs grow.</div>
                </div>
                <button className='try-button'>Try Taskey free
                <img src={arrow} alt='arrow'/></button>
                On a big team? Contact sales
                <div className="app-icon">
                    <img src={apple} alt="" />
                    <img src={windows} alt="" />
                    <img src={android} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FreeTrial