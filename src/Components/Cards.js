import React from 'react'
import clientData from '../Data/ClientData'

const Cards = () => {
    return (
        <div className="card-container">
            {
                clientData.map((i, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="comment">
                                <svg xmlns="http://www.w3.org/2000/svg" width="87" height="62" viewBox="0 0 87 62" fill="none">
                                    <path d="M86.3333 13.0668L83.5744 0.380859C63.709 1.29088 49.9385 9.55621 49.9385 33.8629V61.8411H84.6439V26.6767H71.5001C71.5003 18.8774 76.3938 14.2902 86.3333 13.0668Z" fill="white" />
                                    <path d="M36.7282 13.0671L33.9693 0.381104C14.1039 1.29113 0.333374 9.55668 0.333374 33.8634V61.8416H35.0402V26.6769H21.8882C21.8882 18.8777 26.7817 14.2904 36.7282 13.0671Z" fill="white" />
                                </svg>
                                {i.comment}
                            </div>
                            <div className="name-box">
                                <img src={i.av} alt="avatar" />
                                <div className="name">
                                    <div className="name-upper">{i.name}</div>
                                    <div className="name-lower">{i.desig}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards