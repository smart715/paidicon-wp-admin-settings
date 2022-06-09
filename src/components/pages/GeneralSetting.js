import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Row } from 'react-bootstrap'
// import Header from '../Header'
// import SearchElement from '../SearchElement'
import './../assets/custom-style.css'
import iconn from '../assets/Images/icon-imgg.png'
import blacklogoo from '../assets/Images/paidicon-logo.png'
import whitelogoo from '../assets/Images/Paidicon.png'
// import { Button } from 'bootstrap'
// import { Carousel } from 'bootstrap'
import logo from '../assets/Images/logo.png'
import message from '../assets/Images/vuesax-bulk-sms.png'

const GeneralSetting = () => {
    let navigate = useNavigate();

    const [newlink, setNewlink] = useState("general-setting")
    const [activeClass, setactiveClass] = useState("inactivee")

    let url = window.location.href;
    let n = url.lastIndexOf('/');
    let active = url.substring(n + 1);

    const Val = (val) => {

        setNewlink(val)
        console.log("click", val);

    }

    function previewFile() {
        var preview = document.querySelector('.file-upload-iconn');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        console.log("running");

        reader.onloadend = function () {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }


    return (
        <div className={activeClass}>
            <div className="header-mainn border-bottom-dotted bg-light">
                <div className="header-mainn-inner px-0">
                    <nav className="navbar navbar-expand-lg navbar-light py-4 px-2">
                        <div className="container">
                            <a className="navbar-brand" href="#"><img src={blacklogoo} alt="" height="64px" /></a>
                            <div className='nav_notif-outerr'>
                                <ul className='notif_main-outer'>
                                    <li className='dropdown notification_bar ms-2 mt-0'>

                                        

                                        <button className="btn btn-secondary dropdown-toggle body_activee" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" className='with_hoverrr'>
                                                <g id="vuesax_bulk_notification-bing" data-name="vuesax/bulk/notification-bing" transform="translate(-108 -188)">
                                                    <g id="notification-bing" transform="translate(108 188)">
                                                        <path id="Vector" d="M19.786,16.66A3.062,3.062,0,0,1,17.873,18.5a25.934,25.934,0,0,1-3.862.957c-.128.023-.257.047-.385.058-.21.035-.42.058-.63.082-.257.035-.525.058-.793.082-.735.058-1.458.093-2.193.093s-1.493-.035-2.228-.1c-.315-.023-.618-.058-.922-.1-.175-.023-.35-.047-.513-.07-.128-.023-.257-.035-.385-.058a24.121,24.121,0,0,1-3.827-.945A3.1,3.1,0,0,1,.175,16.66,3.1,3.1,0,0,1,.478,14L1.8,11.807a4.775,4.775,0,0,0,.537-1.96V7.677a7.671,7.671,0,1,1,15.342,0v2.17a4.615,4.615,0,0,0,.548,1.96L19.541,14A3.1,3.1,0,0,1,19.786,16.66Z" transform="translate(4.014 2.392)" fill="#fff" opacity="0.4" />
                                                        <path id="Vector-2" data-name="Vector" d="M.887,5.39A.886.886,0,0,1,0,4.5V.887a.887.887,0,0,1,1.773,0V4.5A.9.9,0,0,1,.887,5.39Z" transform="translate(13.113 7.163)" fill="#fff" />
                                                        <path id="Vector-3" data-name="Vector" d="M6.592.012a3.517,3.517,0,0,1-3.3,2.322A3.459,3.459,0,0,1,.817,1.3,3.221,3.221,0,0,1,0,0C.152.023.3.035.467.058c.268.035.548.07.828.093C1.96.21,2.637.245,3.313.245S4.643.21,5.3.152c.245-.023.49-.035.723-.07Z" transform="translate(10.71 23.333)" fill="#fff" />
                                                        <path id="Vector-4" data-name="Vector" d="M0,0H28V28H0Z" fill="none" opacity="0" />
                                                    </g>
                                                </g>
                                            </svg>
                                            <svg width="28" height="28" viewBox="0 0 28 28" className='without_hoverrr'>
                                                <defs>
                                                    <linearGradient id="linear-gradient" y1="1" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                        <stop offset="0" stopColor='#008bd0' />
                                                        <stop offset="1" stopColor='#00c4f0' />
                                                    </linearGradient>
                                                </defs>
                                                <g id="vuesax_bulk_notification-bing1" data-name="vuesax/bulk/notification-bing1" transform="translate(-108 -188)">
                                                    <g id="notification-bing1" transform="translate(108 188)">
                                                        <path id="Vector"
                                                            d="M19.786,16.66A3.062,3.062,0,0,1,17.873,18.5a25.934,25.934,0,0,1-3.862.957c-.128.023-.257.047-.385.058-.21.035-.42.058-.63.082-.257.035-.525.058-.793.082-.735.058-1.458.093-2.193.093s-1.493-.035-2.228-.1c-.315-.023-.618-.058-.922-.1-.175-.023-.35-.047-.513-.07-.128-.023-.257-.035-.385-.058a24.121,24.121,0,0,1-3.827-.945A3.1,3.1,0,0,1,.175,16.66,3.1,3.1,0,0,1,.478,14L1.8,11.807a4.775,4.775,0,0,0,.537-1.96V7.677a7.671,7.671,0,1,1,15.342,0v2.17a4.615,4.615,0,0,0,.548,1.96L19.541,14A3.1,3.1,0,0,1,19.786,16.66Z"
                                                            transform="translate(4.014 2.392)" opacity="0.4" fill="url(#linear-gradient)" />
                                                        <path id="Vector-2" data-name="Vector"
                                                            d="M.887,5.39A.886.886,0,0,1,0,4.5V.887a.887.887,0,0,1,1.773,0V4.5A.9.9,0,0,1,.887,5.39Z"
                                                            transform="translate(13.113 7.163)" fill="url(#linear-gradient)" />
                                                        <path id="Vector-3" data-name="Vector"
                                                            d="M6.592.012a3.517,3.517,0,0,1-3.3,2.322A3.459,3.459,0,0,1,.817,1.3,3.221,3.221,0,0,1,0,0C.152.023.3.035.467.058c.268.035.548.07.828.093C1.96.21,2.637.245,3.313.245S4.643.21,5.3.152c.245-.023.49-.035.723-.07Z"
                                                            transform="translate(10.71 23.333)" fill="url(#linear-gradient)" />
                                                        <path id="Vector-4" data-name="Vector" d="M0,0H28V28H0Z" fill="none" opacity="0" />
                                                    </g>
                                                </g>
                                            </svg>
                                            <span className='notif_countt'></span>
                                        </button>
                                        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton1" >
                                            <div className="row border-bottom-dotted  mb-3">
                                                <div className="notif-iconn_mainn">
                                                    <div className='svg_notif'>
                                                        <svg width="28" height="28" viewBox="0 0 28 28">
                                                            <defs>
                                                                <linearGradient id="linear-gradient11" y1="1" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                                    <stop offset="0" stopColor='#008bd0' />
                                                                    <stop offset="1" stopColor='#00c4f0' />
                                                                </linearGradient>
                                                            </defs>
                                                            <g id="vuesax_bulk_notification-bing111" data-name="vuesax/bulk/notification-bing111" transform="translate(-108 -188)">
                                                                <g id="notification-bing111" transform="translate(108 188)">
                                                                    <path id="Vector"
                                                                        d="M19.786,16.66A3.062,3.062,0,0,1,17.873,18.5a25.934,25.934,0,0,1-3.862.957c-.128.023-.257.047-.385.058-.21.035-.42.058-.63.082-.257.035-.525.058-.793.082-.735.058-1.458.093-2.193.093s-1.493-.035-2.228-.1c-.315-.023-.618-.058-.922-.1-.175-.023-.35-.047-.513-.07-.128-.023-.257-.035-.385-.058a24.121,24.121,0,0,1-3.827-.945A3.1,3.1,0,0,1,.175,16.66,3.1,3.1,0,0,1,.478,14L1.8,11.807a4.775,4.775,0,0,0,.537-1.96V7.677a7.671,7.671,0,1,1,15.342,0v2.17a4.615,4.615,0,0,0,.548,1.96L19.541,14A3.1,3.1,0,0,1,19.786,16.66Z"
                                                                        transform="translate(4.014 2.392)" opacity="0.4" fill="url(#linear-gradient11)" />
                                                                    <path id="Vector-2" data-name="Vector"
                                                                        d="M.887,5.39A.886.886,0,0,1,0,4.5V.887a.887.887,0,0,1,1.773,0V4.5A.9.9,0,0,1,.887,5.39Z"
                                                                        transform="translate(13.113 7.163)" fill="url(#linear-gradient11)" />
                                                                    <path id="Vector-3" data-name="Vector"
                                                                        d="M6.592.012a3.517,3.517,0,0,1-3.3,2.322A3.459,3.459,0,0,1,.817,1.3,3.221,3.221,0,0,1,0,0C.152.023.3.035.467.058c.268.035.548.07.828.093C1.96.21,2.637.245,3.313.245S4.643.21,5.3.152c.245-.023.49-.035.723-.07Z"
                                                                        transform="translate(10.71 23.333)" fill="url(#linear-gradient11)" />
                                                                    <path id="Vector-4" data-name="Vector" d="M0,0H28V28H0Z" fill="none" opacity="0" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="notf-content_mainn">
                                                    <h6>Notification Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam…</p>
                                                </div>
                                            </div>
                                            <div className="row border-bottom-dotted  mb-3">
                                                <div className="notif-iconn_mainn">
                                                    <div className='svg_notif'>
                                                        <svg width="28" height="28" viewBox="0 0 28 28">
                                                            <defs>
                                                                <linearGradient id="linear-gradient222" y1="1" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                                    <stop offset="0" stopColor='#008bd0' />
                                                                    <stop offset="1" stopColor='#00c4f0' />
                                                                </linearGradient>
                                                            </defs>
                                                            <g id="vuesax_bulk_notification-bing3" data-name="vuesax/bulk/notification-bing3" transform="translate(-108 -188)">
                                                                <g id="notification-bing3" transform="translate(108 188)">
                                                                    <path id="Vector2"
                                                                        d="M19.786,16.66A3.062,3.062,0,0,1,17.873,18.5a25.934,25.934,0,0,1-3.862.957c-.128.023-.257.047-.385.058-.21.035-.42.058-.63.082-.257.035-.525.058-.793.082-.735.058-1.458.093-2.193.093s-1.493-.035-2.228-.1c-.315-.023-.618-.058-.922-.1-.175-.023-.35-.047-.513-.07-.128-.023-.257-.035-.385-.058a24.121,24.121,0,0,1-3.827-.945A3.1,3.1,0,0,1,.175,16.66,3.1,3.1,0,0,1,.478,14L1.8,11.807a4.775,4.775,0,0,0,.537-1.96V7.677a7.671,7.671,0,1,1,15.342,0v2.17a4.615,4.615,0,0,0,.548,1.96L19.541,14A3.1,3.1,0,0,1,19.786,16.66Z"
                                                                        transform="translate(4.014 2.392)" opacity="0.4" fill="url(#linear-gradient222)" />
                                                                    <path id="Vector-22" data-name="Vector"
                                                                        d="M.887,5.39A.886.886,0,0,1,0,4.5V.887a.887.887,0,0,1,1.773,0V4.5A.9.9,0,0,1,.887,5.39Z"
                                                                        transform="translate(13.113 7.163)" fill="url(#linear-gradient222)" />
                                                                    <path id="Vector-32" data-name="Vector"
                                                                        d="M6.592.012a3.517,3.517,0,0,1-3.3,2.322A3.459,3.459,0,0,1,.817,1.3,3.221,3.221,0,0,1,0,0C.152.023.3.035.467.058c.268.035.548.07.828.093C1.96.21,2.637.245,3.313.245S4.643.21,5.3.152c.245-.023.49-.035.723-.07Z"
                                                                        transform="translate(10.71 23.333)" fill="url(#linear-gradient222)" />
                                                                    <path id="Vector-42" data-name="Vector" d="M0,0H28V28H0Z" fill="none" opacity="0" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="notf-content_mainn">
                                                    <h6>Notification Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam…</p>
                                                </div>
                                            </div>
                                            <div className="row border-bottom-dotted  mb-3">
                                                <div className="notif-iconn_mainn">
                                                    <div className='svg_notif'>
                                                        <svg width="28" height="28" viewBox="0 0 28 28">
                                                            <defs>
                                                                <linearGradient id="linear-gradient333" y1="1" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                                    <stop offset="0" stopColor='#008bd0' />
                                                                    <stop offset="1" stopColor='#00c4f0' />
                                                                </linearGradient>
                                                            </defs>
                                                            <g id="vuesax_bulk_notification-bing" data-name="vuesax/bulk/notification-bing4" transform="translate(-108 -188)">
                                                                <g id="notification-bing4" transform="translate(108 188)">
                                                                    <path id="Vector3" d="M19.786,16.66A3.062,3.062,0,0,1,17.873,18.5a25.934,25.934,0,0,1-3.862.957c-.128.023-.257.047-.385.058-.21.035-.42.058-.63.082-.257.035-.525.058-.793.082-.735.058-1.458.093-2.193.093s-1.493-.035-2.228-.1c-.315-.023-.618-.058-.922-.1-.175-.023-.35-.047-.513-.07-.128-.023-.257-.035-.385-.058a24.121,24.121,0,0,1-3.827-.945A3.1,3.1,0,0,1,.175,16.66,3.1,3.1,0,0,1,.478,14L1.8,11.807a4.775,4.775,0,0,0,.537-1.96V7.677a7.671,7.671,0,1,1,15.342,0v2.17a4.615,4.615,0,0,0,.548,1.96L19.541,14A3.1,3.1,0,0,1,19.786,16.66Z" transform="translate(4.014 2.392)" opacity="0.4" fill="url(#linear-gradient333)" />
                                                                    <path id="Vector-23" data-name="Vector" d="M.887,5.39A.886.886,0,0,1,0,4.5V.887a.887.887,0,0,1,1.773,0V4.5A.9.9,0,0,1,.887,5.39Z" transform="translate(13.113 7.163)" fill="url(#linear-gradient333)" />
                                                                    <path id="Vector-33" data-name="Vector" d="M6.592.012a3.517,3.517,0,0,1-3.3,2.322A3.459,3.459,0,0,1,.817,1.3,3.221,3.221,0,0,1,0,0C.152.023.3.035.467.058c.268.035.548.07.828.093C1.96.21,2.637.245,3.313.245S4.643.21,5.3.152c.245-.023.49-.035.723-.07Z" transform="translate(10.71 23.333)" fill="url(#linear-gradient333)" />
                                                                    <path id="Vector-43" data-name="Vector" d="M0,0H28V28H0Z" fill="none" opacity="0" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="notf-content_mainn">
                                                    <h6>Notification Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam…</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="notif-iconn_mainn">
                                                    <div className='svg_notif'>
                                                        <svg width="28" height="28" viewBox="0 0 28 28">
                                                            <defs>
                                                                <linearGradient id="linear-gradient444" y1="1" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                                    <stop offset="0" stopColor='#008bd0' />
                                                                    <stop offset="1" stopColor='#00c4f0' />
                                                                </linearGradient>
                                                            </defs>
                                                            <g id="vuesax_bulk_notification-bing" data-name="vuesax/bulk/notification-bing5" transform="translate(-108 -188)">
                                                                <g id="notification-bing5" transform="translate(108 188)">
                                                                    <path id="Vector4"
                                                                        d="M19.786,16.66A3.062,3.062,0,0,1,17.873,18.5a25.934,25.934,0,0,1-3.862.957c-.128.023-.257.047-.385.058-.21.035-.42.058-.63.082-.257.035-.525.058-.793.082-.735.058-1.458.093-2.193.093s-1.493-.035-2.228-.1c-.315-.023-.618-.058-.922-.1-.175-.023-.35-.047-.513-.07-.128-.023-.257-.035-.385-.058a24.121,24.121,0,0,1-3.827-.945A3.1,3.1,0,0,1,.175,16.66,3.1,3.1,0,0,1,.478,14L1.8,11.807a4.775,4.775,0,0,0,.537-1.96V7.677a7.671,7.671,0,1,1,15.342,0v2.17a4.615,4.615,0,0,0,.548,1.96L19.541,14A3.1,3.1,0,0,1,19.786,16.66Z"
                                                                        transform="translate(4.014 2.392)" opacity="0.4" fill="url(#linear-gradient444)" />
                                                                    <path id="Vector-24" data-name="Vector"
                                                                        d="M.887,5.39A.886.886,0,0,1,0,4.5V.887a.887.887,0,0,1,1.773,0V4.5A.9.9,0,0,1,.887,5.39Z"
                                                                        transform="translate(13.113 7.163)" fill="url(#linear-gradient444)" />
                                                                    <path id="Vector-34" data-name="Vector"
                                                                        d="M6.592.012a3.517,3.517,0,0,1-3.3,2.322A3.459,3.459,0,0,1,.817,1.3,3.221,3.221,0,0,1,0,0C.152.023.3.035.467.058c.268.035.548.07.828.093C1.96.21,2.637.245,3.313.245S4.643.21,5.3.152c.245-.023.49-.035.723-.07Z"
                                                                        transform="translate(10.71 23.333)" fill="url(#linear-gradient444)" />
                                                                    <path id="Vector-44" data-name="Vector" d="M0,0H28V28H0Z" fill="none" opacity="0" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="notf-content_mainn">
                                                    <h6>Notification Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam…</p>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                </ul>
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
                        </div>
                    </nav>
                </div>
            </div>
            {/* <SearchElement /> */}

            <div className={newlink === 'general-setting' ? " " : "display-none"}>
                <div className="header-title-main  bg-light">
                    <div className="header-title-main-inner pb-lg-4 container ">
                        <h1 className="mb-0 py-4 page-titlee text-center  text-md-left">General Settings </h1>
                        <div className='feature-purchase d-flex d-flex align-items-center justify-content-between mt-2'>
                            <div>
                                <p className="access-para-line mb-0">Access Premium Features Now!</p>
                            </div>
                            <div>
                                <button type="button" className="btn btn-secondary mr-3">Purchase License</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-mainn-div">
                    <div className="position-relative form-mainn-div-inner bg-light">
                        {/* <div className="search-save-btn-main container pt-2 pb-4 mb-2">
                            <div className="search-save-btn-main-inner">
                                <div className="row">
                                    <div className="col-md-6 col-12 col-lg-4 formsearch-coll pb-5 pb-md-0 mb-4 mb-md-0">
                                        <form className="search-formm">
                                            <div className="form-group position-relative">
                                                <input type="email" className="form-control search-inputt" placeholder="Search Something…" />
                                                <button className="btn btn-secondary search-btnn">Go</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="form-content-mainn bg-white mb-5">
                            <form className="container pt-4">
                                <div className="border-dotted rounded-3 px-4 py-4 mt-3">
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Title</label>
                                            <input type="text" className="form-control bg-light" placeholder="Title" />
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4 ">
                                            <label className="mb-2">Icon</label>
                                            <div className="position-relative">
                                                <img src={iconn} height="42px" className="file-upload-iconn" />
                                                {/* <img src={logo} height="42px" alt="Image preview..." /> */}
                                                <label className="file-upload-labell" htmlFor="file-upload-input"></label>
                                                <input type="file" onChange={previewFile} className="form-control bg-light opacity-0" placeholder="Title" id="file-upload-input" />

                                            </div>

                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4 multiselct-dropp">
                                            <label className="mb-2 w-100">Category</label>
                                            <select className="form-select selectpicker" multiple aria-label="Default select example">
                                                <option defaultValue disabled>Category</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Number Of Products</label>
                                            <input type="text" className="form-control bg-light" placeholder="Number Of Products" />
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Stripe Key</label>
                                            <input type="text" className="form-control bg-light" placeholder="Stripe Key" />
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2 d-flex justify-content-between">Referral Code <span className="light-blue">Add To Save Money!</span></label>
                                            <input type="text" className="form-control bg-light" placeholder="Referral Code" />
                                        </div>
                                    </div>
                                    <div className="formbtn-main-roww">
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container mb-5">
                    <div className='popup-btn-row'>
                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            POPUP DESIGN
                        </button>
                        <div className="modal fade popup-gery" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt rounded-pill p-3">
                                            <g id="vuesax_bulk_setting" data-name="vuesax/bulk/setting" transform="translate(-236 -188)">
                                                <g id="setting" transform="translate(236 188)">
                                                    <path id="Vector" d="M32.22,6.835,21.88.855a7.715,7.715,0,0,0-7.06,0L4.38,6.875C.24,9.675,0,10.095,0,14.555v10.86c0,4.46.24,4.9,4.46,7.74l10.34,5.98a7.191,7.191,0,0,0,3.54.86,7.061,7.061,0,0,0,3.52-.86l10.44-6.02c4.14-2.8,4.38-3.22,4.38-7.68V14.555C36.68,10.095,36.44,9.675,32.22,6.835Z" transform="translate(5.66 4.005)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M13,6.5A6.5,6.5,0,1,1,6.5,0,6.5,6.5,0,0,1,13,6.5Z" transform="translate(17.5 17.5)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h1 className="mt-3 mb-1 text-white">Import Backup Settings</h1>
                                        <p className="popup-paragraph text-white mb-0">Do you want to import the last backup of your settings from Monday April 18 at 09:45 am? You won’t be able to do this later.</p>
                                    </div>
                                    <div className="modal-footer border-top-dotted justify-content-center">
                                        <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/******Payment-Successful****/}
                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModalsuccess">
                            Payment Successful
                        </button>
                        <div className="modal fade popup-gery" id="exampleModalsuccess" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt-green rounded-pill p-3">
                                            <g id="vuesax_bulk_tick-circle" data-name="vuesax/bulk/tick-circle" transform="translate(-748 -188)">
                                                <g id="tick-circle" transform="translate(748 188)">
                                                    <path id="Vector" d="M40,20A20,20,0,1,1,20,0,20,20,0,0,1,40,20Z" transform="translate(4 4)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M7.155,14.335a1.5,1.5,0,0,1-1.06-.44L.435,8.235a1.5,1.5,0,0,1,2.12-2.12l4.6,4.6L17.435.435a1.5,1.5,0,0,1,2.12,2.12L8.215,13.895A1.5,1.5,0,0,1,7.155,14.335Z" transform="translate(14.005 16.825)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h1 className="mt-3 mb-1 text-white">Payment Successful</h1>
                                        <p className="popup-paragraph text-white mb-0">Your license is 98FmDbdbxaEfxpUDlODcYM and this license expires on 01 December, 2022. This license has also been sent to your email address.</p>
                                    </div>
                                    <div className="modal-footer border-top-dotted justify-content-center">
                                        <button type="button" className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/******Payment-fail****/}
                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModalfail">
                            Payment Failed
                        </button>
                        <div className="modal fade popup-gery" id="exampleModalfail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt-red rounded-pill p-3">
                                            <g id="vuesax_bulk_info-circle" data-name="vuesax/bulk/info-circle" transform="translate(-364 -252)">
                                                <g id="info-circle" transform="translate(364 252)">
                                                    <path id="Vector" d="M40,20A20,20,0,1,1,20,0,20,20,0,0,1,40,20Z" transform="translate(4 4)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M1.5,13A1.511,1.511,0,0,0,3,11.5V1.5A1.511,1.511,0,0,0,1.5,0,1.511,1.511,0,0,0,0,1.5v10A1.511,1.511,0,0,0,1.5,13Z" transform="translate(22.5 14.5)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M3.84,1.23A2.309,2.309,0,0,0,3.42.57,2.309,2.309,0,0,0,2.76.15a2,2,0,0,0-1.52,0A2.309,2.309,0,0,0,.58.57a2.309,2.309,0,0,0-.42.66A1.991,1.991,0,0,0,0,1.99a1.991,1.991,0,0,0,.16.76,2.065,2.065,0,0,0,.42.66,2.309,2.309,0,0,0,.66.42A1.991,1.991,0,0,0,2,3.99a1.991,1.991,0,0,0,.76-.16,2.309,2.309,0,0,0,.66-.42,2.065,2.065,0,0,0,.42-.66A1.991,1.991,0,0,0,4,1.99,1.991,1.991,0,0,0,3.84,1.23Z" transform="translate(22 30.01)" fill="#fff" />
                                                    <path id="Vector-4" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>

                                        <h1 className="mt-3 mb-1 text-white">Payment Failed</h1>
                                        <p className="popup-paragraph text-white mb-0">We’re having trouble processing your payment at the moment. Please try again later.</p>
                                    </div>
                                    <div className="modal-footer border-top-dotted justify-content-center">
                                        <button type="button" className="btn btn-primary">Try again</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/******verifyapikey****/}
                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModalapi">
                            Verifying API Key
                        </button>
                        <div className="modal fade popup-gery" id="exampleModalapi" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt rounded-pill p-3">
                                            <g id="vuesax_bulk_password-check" data-name="vuesax/bulk/password-check" transform="translate(-556 -188)">
                                                <g id="password-check" transform="translate(556 188)">
                                                    <path id="Vector" d="M1.5,40A1.511,1.511,0,0,1,0,38.5V1.5A1.511,1.511,0,0,1,1.5,0,1.511,1.511,0,0,1,3,1.5v37A1.511,1.511,0,0,1,1.5,40Z" transform="translate(28.5 4)" fill="#fff" />
                                                    <path id="Vector-2" data-name="Vector" d="M8,32H20V0H8A8,8,0,0,0,0,8V24A8,8,0,0,0,8,32Z" transform="translate(5 8)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-3" data-name="Vector" d="M6,32H0V0H6a8,8,0,0,1,8,8V24A8,8,0,0,1,6,32Z" transform="translate(30 8)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-4" data-name="Vector" d="M2,4a1.991,1.991,0,0,1-.76-.16,2.309,2.309,0,0,1-.66-.42,2.922,2.922,0,0,1-.44-.66A1.971,1.971,0,0,1,0,2,2.1,2.1,0,0,1,.58.582l.3-.24a1.514,1.514,0,0,1,.36-.18A1.271,1.271,0,0,1,1.6.042a2,2,0,0,1,1.82.54A2.1,2.1,0,0,1,4,2a1.991,1.991,0,0,1-.16.76,2.309,2.309,0,0,1-.42.66,2.309,2.309,0,0,1-.66.42A1.991,1.991,0,0,1,2,4Z" transform="translate(9.5 21.998)" fill="#fff" />
                                                    <path id="Vector-5" data-name="Vector" d="M2,3.975a1.991,1.991,0,0,1-.76-.16A2.309,2.309,0,0,1,.58,3.4a1.98,1.98,0,0,1-.42-2.18A2.065,2.065,0,0,1,.58.555a2.094,2.094,0,0,1,2.84,0A2.1,2.1,0,0,1,4,1.975a1.991,1.991,0,0,1-.16.76,2.309,2.309,0,0,1-.42.66,2.309,2.309,0,0,1-.66.42A1.991,1.991,0,0,1,2,3.975Z" transform="translate(16.5 22.025)" fill="#fff" />
                                                    <path id="Vector-6" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h1 className="mt-3 mb-1 text-white">Verifying API Key</h1>
                                        <p className="popup-paragraph text-white">Please wait! We are verifying your API key. You’ll receive a response shortly.</p>
                                    </div>
                                    {/* <div className="modal-footer border-top-dotted justify-content-center">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary">Continue</button>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        {/******processing****/}
                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModalpay">
                            Processing Payment
                        </button>
                        <div className="modal fade popup-gery" id="exampleModalpay" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt rounded-pill p-3">
                                            <g id="vuesax_bulk_card" data-name="vuesax/bulk/card" transform="translate(-492 -508)">
                                                <g id="card" transform="translate(492 508)">
                                                    <path id="Vector" d="M40,0V14.92a8.288,8.288,0,0,1-8.3,8.28H8.3A8.288,8.288,0,0,1,0,14.92V0Z" transform="translate(4 18)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M40,8.28V11.2H0V8.28A8.288,8.288,0,0,1,8.3,0H31.7A8.288,8.288,0,0,1,40,8.28Z" transform="translate(4 6.8)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M5.5,3h-4A1.511,1.511,0,0,1,0,1.5,1.511,1.511,0,0,1,1.5,0h4A1.511,1.511,0,0,1,7,1.5,1.511,1.511,0,0,1,5.5,3Z" transform="translate(10.5 31.5)" fill="#fff" />
                                                    <path id="Vector-4" data-name="Vector" d="M9.5,3h-8A1.511,1.511,0,0,1,0,1.5,1.511,1.511,0,0,1,1.5,0h8A1.511,1.511,0,0,1,11,1.5,1.511,1.511,0,0,1,9.5,3Z" transform="translate(19.5 31.5)" fill="#fff" />
                                                    <path id="Vector-5" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>

                                        <h1 className="mt-3 mb-1 text-white">Processing Payment</h1>
                                        <p className="popup-paragraph text-white">Please wait! We are processing your payment request. You’ll receive a response shortly.</p>
                                    </div>
                                    {/* <div className="modal-footer border-top-dotted justify-content-center">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary">Continue</button>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        {/* enter-key */}
                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModall">
                            Enter Licence Key
                        </button>
                        <div className="modal fade popup-gery" id="exampleModall" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt rounded-pill p-3">
                                            <g id="vuesax_bulk_key" data-name="vuesax/bulk/key" transform="translate(-684 -188)">
                                                <g id="key" transform="translate(684 188)">
                                                    <path id="Vector" d="M35.585,4.425a15.154,15.154,0,0,0-25.18,15.2l-9.4,9.4a4.03,4.03,0,0,0-.98,2.98l.6,4.36a3.775,3.775,0,0,0,3,3l4.36.6a3.886,3.886,0,0,0,2.98-1l1.64-1.64a.99.99,0,0,0,0-1.42l-3.88-3.88a1.5,1.5,0,0,1,2.12-2.12l3.9,3.9a1,1,0,0,0,1.4,0l4.24-4.22a15.136,15.136,0,0,0,15.2-25.16Zm-10.58,15.56a5,5,0,1,1,5-5A5,5,0,0,1,25.005,19.985Z" transform="translate(3.995 4.015)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M10,5A5,5,0,1,1,5,0,5,5,0,0,1,10,5Z" transform="translate(24 14)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h1 className="mt-3 mb-1 text-white text-center">Enter License Key</h1>
                                        <p className="popup-paragraph text-white">Please enter your existing license key in order to continue using the premium features.</p>

                                    </div>
                                    <div className='licence-form position-relative px-3'>
                                        <input type="email" className="form-controll" id="exampleFormControlInput1" placeholder="Licence key" />
                                        <span className='must-we position-absolute'>Must Be UUID4 With 32 Characters</span>
                                    </div>
                                    <div className="modal-footer border-top-dotted justify-content-center">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Verify Licence Key</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModalsuccess22">
                            Verification Successful
                        </button>
                        <div className="modal fade popup-gery" id="exampleModalsuccess22" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt-green rounded-pill p-3">
                                            <g id="vuesax_bulk_tick-circle" data-name="vuesax/bulk/tick-circle" transform="translate(-748 -188)">
                                                <g id="tick-circle" transform="translate(748 188)">
                                                    <path id="Vector" d="M40,20A20,20,0,1,1,20,0,20,20,0,0,1,40,20Z" transform="translate(4 4)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M7.155,14.335a1.5,1.5,0,0,1-1.06-.44L.435,8.235a1.5,1.5,0,0,1,2.12-2.12l4.6,4.6L17.435.435a1.5,1.5,0,0,1,2.12,2.12L8.215,13.895A1.5,1.5,0,0,1,7.155,14.335Z" transform="translate(14.005 16.825)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h1 className="mt-3 mb-1 text-white">Verification Successful</h1>
                                        <p className="popup-paragraph text-white mb-0">You’re API key has been verified successfully. Do you want to import your last saved settings?</p>
                                    </div>
                                    <div className="modal-footer border-top-dotted justify-content-center">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Import Lost Saved Settings</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModalstandn">
                            Verification Failed
                        </button>
                        <div className="modal fade popup-gery" id="exampleModalstandn" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt-red rounded-pill p-3">
                                            <g id="vuesax_bulk_info-circle" data-name="vuesax/bulk/info-circle" transform="translate(-364 -252)">
                                                <g id="info-circle" transform="translate(364 252)">
                                                    <path id="Vector" d="M40,20A20,20,0,1,1,20,0,20,20,0,0,1,40,20Z" transform="translate(4 4)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M1.5,13A1.511,1.511,0,0,0,3,11.5V1.5A1.511,1.511,0,0,0,1.5,0,1.511,1.511,0,0,0,0,1.5v10A1.511,1.511,0,0,0,1.5,13Z" transform="translate(22.5 14.5)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M3.84,1.23A2.309,2.309,0,0,0,3.42.57,2.309,2.309,0,0,0,2.76.15a2,2,0,0,0-1.52,0A2.309,2.309,0,0,0,.58.57a2.309,2.309,0,0,0-.42.66A1.991,1.991,0,0,0,0,1.99a1.991,1.991,0,0,0,.16.76,2.065,2.065,0,0,0,.42.66,2.309,2.309,0,0,0,.66.42A1.991,1.991,0,0,0,2,3.99a1.991,1.991,0,0,0,.76-.16,2.309,2.309,0,0,0,.66-.42,2.065,2.065,0,0,0,.42-.66A1.991,1.991,0,0,0,4,1.99,1.991,1.991,0,0,0,3.84,1.23Z" transform="translate(22 30.01)" fill="#fff" />
                                                    <path id="Vector-4" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h1 className="mt-3 mb-1 text-white text-center">Verification Failed</h1>
                                        <p className="popup-paragraph text-white">The API key has been used on another WordPress installation. Provide the IP address of the server which currently uses this API key and click on continue to use it here instead.</p>

                                    </div>
                                    <div className='licence-form position-relative px-3'>
                                        <input type="email" className="form-controll" id="exampleFormControlInput1" placeholder="IP Address" />
                                        <span className='must-we-r-k position-absolute'>2 Retries Left</span>
                                    </div>
                                    <div className="modal-footer border-top-dotted justify-content-center">
                                        <button type="button" className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModalstandn22">
                            Verification Failed 2
                        </button>
                        <div className="modal fade popup-gery" id="exampleModalstandn22" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt-red rounded-pill p-3">
                                            <g id="vuesax_bulk_info-circle" data-name="vuesax/bulk/info-circle" transform="translate(-364 -252)">
                                                <g id="info-circle" transform="translate(364 252)">
                                                    <path id="Vector" d="M40,20A20,20,0,1,1,20,0,20,20,0,0,1,40,20Z" transform="translate(4 4)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M1.5,13A1.511,1.511,0,0,0,3,11.5V1.5A1.511,1.511,0,0,0,1.5,0,1.511,1.511,0,0,0,0,1.5v10A1.511,1.511,0,0,0,1.5,13Z" transform="translate(22.5 14.5)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M3.84,1.23A2.309,2.309,0,0,0,3.42.57,2.309,2.309,0,0,0,2.76.15a2,2,0,0,0-1.52,0A2.309,2.309,0,0,0,.58.57a2.309,2.309,0,0,0-.42.66A1.991,1.991,0,0,0,0,1.99a1.991,1.991,0,0,0,.16.76,2.065,2.065,0,0,0,.42.66,2.309,2.309,0,0,0,.66.42A1.991,1.991,0,0,0,2,3.99a1.991,1.991,0,0,0,.76-.16,2.309,2.309,0,0,0,.66-.42,2.065,2.065,0,0,0,.42-.66A1.991,1.991,0,0,0,4,1.99,1.991,1.991,0,0,0,3.84,1.23Z" transform="translate(22 30.01)" fill="#fff" />
                                                    <path id="Vector-4" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h1 className="mt-3 mb-3 text-white text-center">Verification Failed</h1>
                                        <p className="text-white">The API key you entered is invalid. Please purchase one by clicking the button below.</p>

                                    </div>
                                    <div className="modal-footer border-top-dotted justify-content-center">
                                        <button type="button" className="btn btn-primary">Purchase API Key</button>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModalstand">
                            Standard Package
                        </button>
                        <div className="modal fade popup-gery" id="exampleModalstand" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt rounded-pill p-3">
                                            <g id="vuesax_bulk_card" data-name="vuesax/bulk/card" transform="translate(-492 -508)">
                                                <g id="card" transform="translate(492 508)">
                                                    <path id="Vector" d="M40,0V14.92a8.288,8.288,0,0,1-8.3,8.28H8.3A8.288,8.288,0,0,1,0,14.92V0Z" transform="translate(4 18)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M40,8.28V11.2H0V8.28A8.288,8.288,0,0,1,8.3,0H31.7A8.288,8.288,0,0,1,40,8.28Z" transform="translate(4 6.8)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M5.5,3h-4A1.511,1.511,0,0,1,0,1.5,1.511,1.511,0,0,1,1.5,0h4A1.511,1.511,0,0,1,7,1.5,1.511,1.511,0,0,1,5.5,3Z" transform="translate(10.5 31.5)" fill="#fff" />
                                                    <path id="Vector-4" data-name="Vector" d="M9.5,3h-8A1.511,1.511,0,0,1,0,1.5,1.511,1.511,0,0,1,1.5,0h8A1.511,1.511,0,0,1,11,1.5,1.511,1.511,0,0,1,9.5,3Z" transform="translate(19.5 31.5)" fill="#fff" />
                                                    <path id="Vector-5" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h1 className="mt-3 mb-1 text-white text-center">Standard Package</h1>
                                        <p className="popup-paragraph text-white">Please purchase our annual standard package in order to continue using the application.</p>

                                    </div>
                                    <div className='licence-form position-relative px-3'>
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="form-controll-d text-white accor-btnn d-flex position-relative justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <span>ACH - Wire Transfer</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <g id="add-square" transform="translate(-620 -252)">
                                                                <path id="Vector" d="M0,0H8" transform="translate(628 264)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                <path id="Vector-2" data-name="Vector" d="M0,8V0" transform="translate(632 260)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                <path id="Vector-3" data-name="Vector" d="M7,20h6c5,0,7-2,7-7V7c0-5-2-7-7-7H7C2,0,0,2,0,7v6C0,18,2,20,7,20Z" transform="translate(622 254)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(620 252)" fill="none" opacity="0" />
                                                            </g>
                                                        </svg>
                                                    </button>

                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div className="form-group formm-grpp position-relative">
                                                            <input type="email" className="form-controll" placeholder="Account Number" id="exampleFormControlInput1" aria-describedby="emailHelp" />
                                                        </div>
                                                        <div className="form-group formm-grpp position-relative">
                                                            <input type="email" className="form-controll text-white my-2" placeholder="Routing Number" id="exampleFormControlInput1" aria-describedby="emailHelp" />
                                                        </div>
                                                        <div className="form-group formm-grpp position-relative">
                                                            <input type="email" className="form-controll text-white" placeholder="Name on Account" id="exampleFormControlInput1" aria-describedby="emailHelp" />
                                                        </div>
                                                        <div>
                                                            <select className="form-select form-controll my-2" id="exampleFormControlInput1" name="sellist1">
                                                                <option>Account Type</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="form-controll-d text-white collapsed accor-btnn d-flex position-relative justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <span>Credit / Debit Card</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <g id="add-square" transform="translate(-620 -252)">
                                                                <path id="Vector" d="M0,0H8" transform="translate(628 264)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                <path id="Vector-2" data-name="Vector" d="M0,8V0" transform="translate(632 260)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                <path id="Vector-3" data-name="Vector" d="M7,20h6c5,0,7-2,7-7V7c0-5-2-7-7-7H7C2,0,0,2,0,7v6C0,18,2,20,7,20Z" transform="translate(622 254)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                                <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(620 252)" fill="none" opacity="0" />
                                                            </g>
                                                        </svg>
                                                    </button>

                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="">
                                                        <div className="accordion-body">
                                                            <div className="form-group formm-grpp position-relative">
                                                                <input type="email" className="form-controll " placeholder="Card Number" id="exampleFormControlInput1" aria-describedby="emailHelp" />
                                                                <span className="position-absolute mustt">MM / YY  CVC</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer border-top-dotted justify-content-center">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Go Back</button>
                                        <button type="button" className="btn btn-primary">Pay Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModaltable">
                            Email Template
                        </button>
                        <div className="modal fade popup-gery" id="exampleModaltable" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <table style={{ width: '100%', background: 'transparent linear-gradient(90deg, #008BD0 0%, #00C4F0 100%) 0% 0% no-repeat padding-box', border: '1px solid #fff', borderRadius: '10px', overflow: 'hidden' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ fontSize: '16px', padding: '30px 10px 30px', textAlign: 'center', color: 'white' }}>
                                                        <a className="navbar-brand" href="#"><img src={whitelogoo} alt="" height="34px" /></a>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody style={{ background: 'white' }}>
                                                <tr style={{ background: 'white' }}>
                                                    <td style={{ fontSize: '24px', fontWeight: '600', lineHeight: '36px', padding: '30px 10px 10px', textAlign: 'center', color: 'black', background: 'white' }}>Email Header</td>
                                                </tr>
                                                <tr style={{ background: 'white' }}>
                                                    <td style={{ fontSize: '16px', fontWeight: '400', lineHeight: '36px', padding: '0px 10px 10px', textAlign: 'center', color: 'black', background: 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</td>
                                                </tr>
                                                <tr style={{ background: 'white' }}>
                                                    <td style={{ fontSize: '16px', fontWeight: '400', lineHeight: '36px', padding: '0px 10px 10px', textAlign: 'center', color: 'black', background: 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</td>
                                                </tr>
                                                <tr style={{ background: 'white' }}>
                                                    <td style={{ fontSize: '16px', fontWeight: '400', lineHeight: '36px', padding: '0px 10px 30px', marginTop: '10px', textAlign: 'center', color: 'black', background: 'white' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td style={{ padding: '30px 10px 30px', textAlign: 'center' }}><button type="button" style={{ fontSize: '16px', fontWeight: '400', lineHeight: '20px', padding: '10px 25px', textAlign: 'center', color: '#008BD0', borderRadius: '50px', border: '1px solid #fff' }}>Visit Now</button></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* MODAL END */}
                        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModalregister">
                            Register Now
                        </button>
                        <div className="modal fade popup-gery" id="exampleModalregister" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog register-marg">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="bg-gradiwnt rounded-pill p-3">
                                            <g id="vuesax_bulk_profile" data-name="vuesax/bulk/profile" transform="translate(-108 -252)">
                                                <g id="profile" transform="translate(108 252)">
                                                    <path id="Vector" d="M9.5,0a9.491,9.491,0,0,0-.24,18.98,1.613,1.613,0,0,1,.44,0h.14A9.493,9.493,0,0,0,9.5,0Z" transform="translate(14.5 4)" fill="#fff" opacity="0.4" />
                                                    <path id="Vector-2" data-name="Vector" d="M24.24,2.79C18.66-.93,9.56-.93,3.94,2.79,1.4,4.49,0,6.79,0,9.25s1.4,4.74,3.92,6.42a18.479,18.479,0,0,0,10.16,2.82,18.479,18.479,0,0,0,10.16-2.82c2.52-1.7,3.92-3.98,3.92-6.46C28.14,6.75,26.76,4.47,24.24,2.79Z" transform="translate(9.92 25.51)" fill="#fff" />
                                                    <path id="Vector-3" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>
                                        <h1 className="mt-3 mb-1 text-white text-center">Register Now</h1>
                                        <p className="popup-paragraph text-white">Already have a license? <a className='click-here-link-re text-decoration-none' href="#">Click Here</a> to enter your existing license and continue.</p>

                                    </div>
                                    <div className='px-3'>
                                        <div className='licence-form position-relative'>
                                            <input type="text" className="form-controll" id="exampleFormControlInput1" placeholder="Full Name" />
                                            <span className='must-we position-absolute'>Must Not Contain A Number</span>
                                        </div>
                                        <div className='licence-form-r position-relative'>
                                            <input type="email" className="form-controll" id="exampleFormControlInput1" placeholder="Email Address" />
                                            <span className='must-we-r position-absolute'>Valid Email Format</span>
                                        </div>
                                        <div className='licence-form-r position-relative'>
                                            <input type="text" className="form-controll" id="exampleFormControlInput1" placeholder="Company Name" />

                                        </div>
                                        <div className='licence-form-r position-relative'>
                                            <input type="text" className="form-controll" id="exampleFormControlInput1" placeholder="Address" />

                                        </div>
                                        <div className='licence-form-r position-relative'>
                                            <select className="form-select form-controll text-white" aria-label="Default select example">
                                                <option selected>Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                        </div>
                                        <div className='licence-form-r position-relative'>
                                            <input type="text" className="form-controll" id="exampleFormControlInput1" placeholder="Phone Number" />
                                            <span className='must-we-r-l position-absolute'>Valid Phone Number Format</span>
                                        </div>
                                        <div className='licence-form-r position-relative'>
                                            <input type="text" className="form-controll" id="exampleFormControlInput1" placeholder="State" />
                                        </div>
                                        <div className='licence-form-r position-relative'>
                                            <input type="text" className="form-controll" id="exampleFormControlInput1" placeholder="Town" />
                                        </div>
                                        <div className='licence-form-r-k position-relative'>
                                            <input type="text" className="form-controll" id="exampleFormControlInput1" placeholder="Referrer" />
                                            <span className='must-we-r-o position-absolute'>Optional</span>
                                        </div>
                                    </div>
                                    <div className="modal-footer border-top-dotted justify-content-center">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* MODAL END */}
                    </div>
                </div>
            </div>
            <div id='Theme-Settings' className={newlink === 'theme' ? " " : "display-none"}  >
                {/* <Header /> */}
                <div className="header-title-main  bg-light">
                    <div className="header-title-main-inner pb-lg-4 container ">
                        <h1 className="mb-0 py-4 page-titlee text-center  text-md-left">Theme Settings</h1>
                        <div className='feature-purchase d-flex d-flex align-items-center justify-content-between mt-2'>
                            <div>
                                <p className="access-para-line mb-0">Access Premium Features Now!</p>
                            </div>
                            <div>
                                <button type="button" className="btn btn-secondary mr-3">Purchase License</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-mainn-div">
                    <div className="position-relative form-mainn-div-inner bg-light">
                        {/* <div className="search-save-btn-main container pt-2 pb-4 mb-2">
                            <div className="search-save-btn-main-inner">
                                <div className="row">
                                    <div className="col-md-6 col-12 col-lg-4 formsearch-coll pb-5 pb-md-0 mb-4 mb-md-0">
                                        <form className="search-formm">
                                            <div className="form-group position-relative">
                                                <input type="email" className="form-control search-inputt" placeholder="Search Something…" />
                                                <button className="btn btn-secondary search-btnn">Go</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="form-content-mainn bg-white mb-5">
                            <form className="container pt-4">
                                <div className="border-dotted rounded-3 px-4 py-4  mt-3">
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Size</label>
                                            <select className="form-select bg-light" aria-label="Default select example">
                                                <option defaultValue>Small</option>
                                                <option value="medium">Medium</option>
                                                <option value="large">Large</option>
                                                <option value="extra-large">Extra Large</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Primary Color</label>
                                            {/* <select className="form-select bg-light" aria-label="Default select example">
                                                <option defaultValue>Primary Color</option>
                                                <option value="medium">Medium</option>
                                                <option value="large">Large</option>
                                                <option value="extra-large">Extra Large</option>
                                            </select> */}
                                            <input type="color" className="form-control bg-light overflow-hidden p-0" placeholder=""></input>
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Secondary Color</label>
                                            {/* <select className="form-select bg-light" aria-label="Default select example">
                                                <option defaultValue>Secondary Color</option>
                                                <option value="medium">Medium</option>
                                                <option value="large">Large</option>
                                                <option value="extra-large">Extra Large</option>
                                            </select> */}
                                            <input type="color" className="form-control bg-light overflow-hidden p-0" placeholder=""></input>
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Design</label>
                                            <select className="form-select bg-light" aria-label="Default select example">
                                                <option defaultValue >Rounded</option>
                                                <option value="medium">Medium</option>
                                                <option value="large">Large</option>
                                                <option value="extra-large">Extra Large</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Dark Theme Mode</label>
                                            <div className="form-check form-switch d-flex flex-wrap justify-content-between px-4 align-items-center bg-light">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="formbtn-main-roww">
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <div id='Premium-Features' className={newlink === 'premium' ? " " : "display-none"}>
                <div className='Premium Features-red-bg-nav'>
                    <p>Your license expires in 1 day. <a className='click-here-link text-decoration-none' href="#">Click Here</a> to renew now.</p>
                </div>
                {/* <Header />  */}
                <div className="header-title-main  bg-light">
                    <div className="header-title-main-inner pb-lg-4 container ">
                        <h1 className="mb-0 py-4 page-titlee text-center  text-md-left">Premium Features</h1>
                        <div className="premium-feature-btn-edit d-inline-flex align-items-center">
                            <div className="edit-account-payment-main d-flex">
                                <div className="edit-account">
                                    <button type="button" className="btn btn-edit  text-nowrap">Edit Account Info</button>
                                </div>
                                <div className="edit-account mx-2">
                                    <button type="button" onClick={() => Val('payment')} className={`px-2 btn btn-edit nav-link ${newlink === "premium" ? "active" : ""}`} style={{ width: '128px' }}>Payment History</button>
                                </div>
                            </div>
                            <div className='feature-purchase-entry d-flex d-flex align-items-center justify-content-between mt-2'>
                                <div>
                                    <p className="access-para-line-entry mb-0">License : AuLa2jkqXItWadmkxNyKHnWHFRMrqff8</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="access-para-line-entry px-lg-3 px-2 mb-0">Expiry : 01 . 06 . 2022</p>
                                    <button type="button" className="btn btn-secondary-renew">Renew Now</button>
                                </div>
                            </div>
                            <div className="msg-img ms-0 ms-lg-2">
                                <a href="#"><img src={message} alt="" height="28px" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-mainn-div">
                    <div className="position-relative form-mainn-div-inner bg-light">
                        {/* <div className="search-save-btn-main container pt-2 pb-4 mb-2">
                        <div className="search-save-btn-main-inner">
                            <div className="row">
                                <div className="col-md-6 col-12 col-lg-4 formsearch-coll pb-5 pb-md-0 mb-4 mb-md-0">
                                    <form className="search-formm">
                                        <div className="form-group position-relative">
                                            <input type="email" className="form-control search-inputt" placeholder="Search Something…" />
                                            <button className="btn btn-secondary search-btnn">Go</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                        <div className="form-content-mainn bg-white mb-5">
                            <form className="container pt-4">
                                <div className="border-dotted rounded-3 px-4 py-4 mt-3">
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">API Key</label>
                                            <input type="text" className="form-control bg-light" placeholder="API Key" />
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4 multiselct-dropp">
                                            <label className="mb-2">Restrict To Categories</label>
                                            <select className="form-select selectpicker" multiple aria-label="Default select example">
                                                <option defaultValue disabled>Categories</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4 multiselct-dropp">
                                            <label className="mb-2">Restrict Icon To Pages</label>
                                            <select className="form-select selectpicker" multiple aria-label="Default select example">
                                                <option defaultValue disabled>Pages</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Footer Text</label>
                                            <input type="text" className="form-control bg-light" placeholder="Footer Text" />
                                        </div>
                                        <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                            <label className="mb-2">Back Up Settings</label>
                                            <div className="form-check form-switch d-flex flex-wrap justify-content-between px-4 align-items-center bg-light">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="formbtn-main-roww">
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div id='payment' className={newlink === 'payment' ? " " : "display-none"}>
                {/* <Header />  */}
                <div className="header-title-main  bg-light">
                    <div className="header-title-main-inner pb-lg-4 container ">
                        <h1 className="mb-0 py-4 page-titlee text-center  text-md-left">Payment History</h1>
                        <div className="premium-feature-btn-edit d-flex align-items-center">
                            <div className="edit-account-payment-main d-flex">
                                <div className="edit-account">
                                    <button type="button" className="btn btn-edit">Edit Account Info</button>
                                </div>
                                <div className="edit-account mx-2">
                                    <button type="button" onClick={() => Val('payment')} className={`px-2 btn btn-edit nav-link ${newlink === "premium" ? "active" : ""}`} style={{ width: '128px' }}>Payment History</button>
                                </div>
                            </div>
                            <div className='feature-purchase-entry d-flex d-flex align-items-center justify-content-between mt-2'>
                                <div>
                                    <p className="access-para-line-entry mb-0">License : AuLa2jkqXItWadmkxNyKHnWHFRMrqff8</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="access-para-line-entry px-3 mb-0">Expiry : 01 . 06 . 2022</p>
                                    <button type="button" className="btn btn-secondary-renew">Renew Now</button>
                                </div>
                            </div>
                            <div className="msg-img">
                                <a href="#"><img src={message} alt="" height="28px" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="history_contentt">
                        <div className="container">
                            <table className='table table-responsive'>
                                <thead>
                                    <tr>
                                        <th style={{ minWidth: '250px' }}>Amount</th>
                                        <th style={{ width: '100%' }}>Payment Method</th>
                                        <th style={{ minWidth: '200px' }}>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                    <tr>
                                        <td>$100.00</td>
                                        <td>Credit Card</td>
                                        <td>May 31st, 2022</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={3}>
                                            <nav>
                                                <ul className="pagination justify-content-center pagination_custom">
                                                    <li className="page-item me-1 prevv"><a className="page-link rounded-pill" href="#">←</a></li>
                                                    <li className="page-item me-1 active"><a className="page-link rounded-pill" href="#">1</a></li>
                                                    <li className="page-item me-1"><a className="page-link rounded-pill" href="#">2</a></li>
                                                    <li className="page-item me-1"><a className="page-link rounded-pill" href="#">3</a></li>
                                                    <li className="page-item me-1 nextt"><a className="page-link rounded-pill" href="#">→</a></li>
                                                </ul>
                                            </nav>
                                        </td>

                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default GeneralSetting