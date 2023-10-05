import React from 'react'
import logo from '../Media/Logo Icon.svg'
import '../Style/Footer.css'
import FooterData from '../Data/FooterData'
import BlueButton from './BlueButton'
import globe from '../Media/Globe.svg';
import vector from '../Media/Vector.svg'
import FooterBootomData from '../Data/FooterBootomData'
import facebook from '../Media/landing-page-v-1-desktop-x-301-facebook.svg'
import twitter from '../Media/landing-page-v-1-desktop-twitter.svg'
import linkedin from '../Media/landing-page-v-1-desktop-linkedin.svg'
const Footer = () => {
    return (
        <div className="freetrial-container">
            <div className="footer-content">
                <div className="info">
                    <div className="logo-description">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            whitespace
                        </div>
                        <div className="logo-des">
                            whitepace was created for the new ways we live and work. We make a better workspace around the world
                        </div>
                    </div>
                    {FooterData.map((item, index) => {
                        return (
                            <div key={index} className="info2">
                                <div className="info2-1">{item.info1}</div>
                                <a href='/' className="info2-2">{item.info2}</a>
                                <a href='/' className="info2-2">{item.info3}</a>
                                <a href='/' className="info2-2">{item.info4}</a>
                            </div>
                        )
                    })}
                    <div className="try-btn">
                        <div className="try-header">Try It Today</div>
                        <div className="try-para">Get started for free.Add your whole team as your needs grow.</div>
                        <BlueButton text="Start Today"/>
                    </div>
                </div>
                <div className="line2"></div>
                <div className="bottom">
                    <div className="tnc">
                        <div className="lang">
                            <img src={globe} alt="" />
                            English
                            <img src={vector} alt="" />
                        </div>
                        {FooterBootomData.map((item,index)=>{
                            return(
                                <a key={index} href='/' className="info2-22">{item.name}</a>
                            )
                        })}
                    </div>
                    <div className="social-icons">
                        <a href="/"><img src={facebook} alt="" /></a>
                        <a href="/"><img src={twitter} alt="" /></a>
                        <a href="/"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer