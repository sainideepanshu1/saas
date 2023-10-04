import React from 'react'
import '../Style/WorkManagement.css'
import rightimg from '../Media/Asset 1 2.png'
import wtimg from '../Media/Work Together Image.png'
import TextElement from './TextElement'
import textData from '../Data/TextData';

const WorkManagement = () => {
  return (
    <>
      <div className="work-container">
        <div className="work-upper">
          <TextElement data={textData[0]}/>
          <div className="right-work">
            <img className='workimg' src={rightimg} alt="rightimg" />
          </div>
        </div>
        <div className="work-below">
          <img className='wtimg' src={wtimg} alt="" />
          <TextElement data={textData[1]} />
        </div>
      </div>
    </>
  )
}

export default WorkManagement