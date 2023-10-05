import React, { useState } from 'react';
import '../Style/Navbar.css';
import logosvg from '../Media/Logo Icon.svg'
import dropdown from '../Media/Vector.svg'
import nav_items from '../Data/NavbarData';
import arrow from '../Media/Arrow.svg'

const Navbar = () => {
    const [tgl, setTgl] = useState(false);
    const toggleBtn = () =>{
        console.log(tgl);
        setTgl(!tgl);
        console.log(tgl);
    }
    return (
        <div className='nav-container'>
            <div className="logo">
                <img src={logosvg} alt="logo" />
                <div className="logo-name">whitespace</div>
            </div>
            <div className={tgl?"mobile-nav-right" :"nav-right"}>
                <div className={tgl?"mobile-nav-menu" :"nav-menu"}>
                    {
                        nav_items.map((i,index) => {
                            return (<div key={index} className="nav-menu-box">
                                <a className='nav-links' href={i.link}>
                                    {i.name}
                                    <img src={dropdown} alt="" />
                                </a>
                            </div>)
                        })
                    }
                </div>
                <div className="buttons">
                    <button className="login-button">
                        Login
                    </button>
                    <button className="nav-try-button">
                        <div className="button-text">Try Whitespace Free</div>
                        <img src={arrow} alt="arrow" />
                    </button>
                </div>
            </div>
            <div onClick={toggleBtn} className="toggle_btn"><i className={tgl ? "fa fa-xmark" : "fa fa-bars"}  aria-hidden="true"></i></div>
        </div>
    )
}

export default Navbar