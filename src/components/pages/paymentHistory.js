import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './../assets/custom-style.css'
import iconn from '../assets/Images/icon-imgg.png'

import logo from '../assets/Images/logo.png'
import message from '../assets/Images/vuesax-bulk-sms.png'

const PaymentHistory = () => {
    let navigate = useNavigate();

    const [newlink, setNewlink] = useState("general-setting")

    let url = window.location.href;
    let n = url.lastIndexOf('/');
    let active = url.substring(n + 1);

    const Val = (val) => {

        setNewlink(val)
        console.log("click", val);

    }
    return (
        <>
            <div className="header-mainn border-bottom-dotted bg-light">
                <div className="header-mainn-inner container">
                    <nav className="navbar navbar-expand-lg navbar-light py-4">
                        <div className="container-fluid px-0">
                            <a className="navbar-brand" href="#"><img src={iconn} alt="" height="44px" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end mt-3 mt-lg-0" id="navbarNav">
                                <ul className="navbar-nav ">
                                    <li className="nav-item me-0 mb-2 mb-lg-0 me-lg-2 text-center">
                                        {/* <Link id='general-setting' onClick={() => Val('general-setting')} className={`nav-link ${newlink === "general-setting" ? "active" : ""} `} aria-current="page" to='/general-setting' >General Settings</Link> */}
                                        <span id='general-setting' onClick={() => Val('general-setting')} className={`nav-link ${newlink === "general-setting" ? "active" : ""} `} aria-current="page" >General Settings</span>
                                    </li>
                                    <li className="nav-item me-0 mb-2 mb-lg-0 me-lg-2 text-center">
                                        {/* <Link id='theme' onClick={() => Val("theme")} className={`nav-link ${newlink === "theme" ? "active" : ""} `} to='/theme' >Theme Settings</Link> */}
                                        <span id='theme' onClick={() => Val("theme")} className={`nav-link ${newlink === "theme" ? "active" : ""} `} >Theme Settings</span>
                                    </li>
                                    <li className="nav-item text-center">
                                        {/* <Link id="premium" onClick={() => Val('premium')} className={`nav-link ${newlink === "premium" ? "active" : "/premium"} `} to='' >Premium Features</Link> */}
                                        <span id="premium" onClick={() => Val('premium')} className={`nav-link ${newlink === "premium" ? "active" : ""} `} >Premium Features</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}


export default PaymentHistory