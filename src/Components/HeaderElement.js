import React from 'react'
import arrow from '../Media/Arrow.svg'
import rightimg from '../Media/Asset 1 2.png'
const HeaderElement = (props) => {
    const data=props.data;
  return (
    <div className='header-container'>
            <div className="left-header">
                <div className="upper-left">
                    <div className="upper-left1">{data[0]}</div>
                    <div className="upper-left2">{data[1]}</div>
                </div>
                <button className="try-button try-button-2">
                    <div className="button-text">{data[2]}</div>
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
            <div className="right-header">
                <img className='rightimg' src={rightimg} alt="rightimg" />
            </div>
        </div>
  )
}

export default HeaderElement