import React from 'react'
import HeaderElement from './HeaderElement'
import textData from '../Data/TextData'
import TextElement from './TextElement'
import rightimg from '../Media/Asset 1 2.png'

const Customize = () => {
    return (
        <div>
            <HeaderElement data={textData[2]} />
            <div className="work-container">
                <div className="custom-upper">
                    <TextElement data={textData[3]} />
                    <div className="right-work">
                        <img className='workimg' src={rightimg} alt="rightimg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customize