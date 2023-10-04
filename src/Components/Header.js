import React from 'react'
import arrow from '../Media/Arrow.svg'
import '../Style/Header.css'
import Elements from './Elements'
import rightimg from '../Media/Asset 1 2.png'
const Header = () => {
    return (
        <div style={{position:"relative"}}>
            <Elements />
            <div className='header-container'>
                <div className="left-header">
                    <div className="upper-left">
                        <div className="upper-left1">Get More Done with whitepace</div>
                        <div className="upper-left2">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</div>
                    </div>
                    <button className="try-button try-button-2">
                        <div className="button-text">Try Whitespace Free</div>
                        <img src={arrow} alt="arrow" />
                    </button>
                </div>
                <div className="right-header">
                    <img className='rightimg' src={rightimg} alt="rightimg" />
                </div>
            </div>
        </div>
    )
}

export default Header