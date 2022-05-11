import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Row } from 'react-bootstrap'
// import Header from '../Header'
// import SearchElement from '../SearchElement'
import './../assets/custom-style.css'
import iconn from '../assets/Images/icon-imgg.png'
// import { Button } from 'bootstrap'
// import { Carousel } from 'bootstrap'
import logo from '../assets/Images/logo.png'


const GeneralSetting = () => {

    const [newlink, setNewlink] = useState("general-setting")

    let url = window.location.href;
    let n = url.lastIndexOf('/');
    let active = url.substring(n + 1);

    const Val = (val) => {
        
        setNewlink(val)
        console.log("click", val);

    }

  function previewFile() {
    var preview = document.querySelector('.file-upload-iconn');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
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
            {/* <SearchElement /> */}

            <div className={newlink === 'general-setting' ? " " : "display-none"}>
                <div className="header-title-main  bg-light">
                    <div className="header-title-main-inner container ">
                        <h1 className="mb-0 py-4 page-titlee text-center  text-md-left">General Settings </h1>
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

                <div className="container">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                    <h1 className="mt-3 mb-3 text-white">Import Backup Settings</h1>
                                    <p className="text-white">Do you want to import the last backup of your settings from Monday April 18 at 09:45 am? You won’t be able to do this later.</p>
                                </div>
                                <div className="modal-footer border-top-dotted justify-content-center">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='Theme-Settings' className={newlink === 'theme' ? " " : "display-none"}  >
                {/* <Header /> */}
                <div className="header-title-main  bg-light">
                    <div className="header-title-main-inner container ">
                        <h1 className="mb-0 py-4 page-titlee text-center  text-md-left">Theme Settings</h1>
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
                                                <option defaultValue>Rounded</option>
                                                <option value="medium">Medium</option>
                                                <option value="large">Large</option>
                                                <option value="extra-large">Extra Large</option>
                                            </select>
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

            <div id='Premium-Features' className={newlink === 'premium' ? " " : "display-none" }>
                {/* <Header />  */}
                 <div className="header-title-main  bg-light">
                <div className="header-title-main-inner container ">
                    <h1 className="mb-0 py-4 page-titlee text-center  text-md-left">Premium Features</h1>
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

        </>
    )
}

export default GeneralSetting