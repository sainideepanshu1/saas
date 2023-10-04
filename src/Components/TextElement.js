import React from 'react'
import arrow from '../Media/Arrow.svg'

const TextElement = (props) => {
    const data = props.data;
    return (
        <div className="ul">
            <div className="ul-text">
                <div className="ul1">{data[0]}</div>
                <div className="ul2">{data[1]}</div>
            </div>
            <button className="try-button try-button-2">
                <div className="button-text">{data[2]}</div>
                <img src={arrow} alt="arrow" />
            </button>
        </div>
    )
}

export default TextElement