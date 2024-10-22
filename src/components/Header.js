import React, { useState } from 'react'
import './assets/custom-style.css'
import logo from '../components/assets/Images/logo.png'
import { Link } from 'react-router-dom'
const Header = (props) => {

    // const [activeLink, setActiveLink] = useState("")


    let url = window.location.href;
    let n = url.lastIndexOf('/');
    let active = url.substring(n + 1);

    const Val = (val) => {
        // if(val == 'general'){
        //     val==='general'
        // }else if(val == 'theme'){
        //    val === 'theme'
        // }else if(val =='premium'){
        //     val === "premium"
        // }
        
    }

    return (
        <div className="header-mainn border-bottom-dotted bg-light">
            <div className="header-mainn-inner container">
                <nav className="navbar navbar-expand-lg navbar-light py-4">
                    <div className="container-fluid px-0">
                        <a className="navbar-brand" href="#"><img src={logo} alt="" height="44px" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end mt-3 mt-lg-0" id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item me-0 mb-2 mb-lg-0 me-lg-2 text-center">
                                    <span id='general' onClick={() => Val('general')} className={`nav-link ${active === "general-setting" ? "active" : ""} `} aria-current="page" to="/general-setting">General Settings</span>
                                </li>
                                <li className="nav-item me-0 mb-2 mb-lg-0 me-lg-2 text-center">
                                    <span id='theme' onClick={() => Val("theme")} className={`nav-link ${active === "theme" ? "active" : ""} `} to="/theme">Theme Settings</span>
                                </li>
                                <li className="nav-item text-center">
                                    <span id="premium" onClick={() => Val('premium')} className={`nav-link ${active === "premium" ? "active" : ""} `} to="/premium">Premium Features</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header