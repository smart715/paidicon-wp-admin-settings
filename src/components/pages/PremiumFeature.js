import React from 'react'
import Header from '../Header'

const PremiumFeature = () => {
    return (
        <>
            <Header />
            <div className="header-title-main  bg-light">
                <div className="header-title-main-inner container ">
                    <h1 className="mb-0 py-4 page-titlee text-center  text-md-left">Premium Features</h1>
                </div>
            </div>
            <div className="form-mainn-div">
                <div className="position-relative form-mainn-div-inner bg-light">
                    <div className="search-save-btn-main container pt-2 pb-4 mb-2">
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
                    </div>
                    <div className="form-content-mainn bg-white mb-5">
                        <form className="container pt-4">
                            <div className="border-dotted rounded-3 px-4 py-4 mt-3">
                                <div className="row">
                                    <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                        <label className="mb-2">API Key</label>
                                        <input type="text" className="form-control bg-light" placeholder="API Key" />
                                    </div>
                                    <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                        <label className="mb-2">Restrict To Categories</label>
                                        <select className="form-select bg-light" aria-label="Default select example">
                                            <option defaultValue>Categories</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                            <option value="extra-large">Extra Large</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                        <label className="mb-2">Restrict Icon To Pages</label>
                                        <select className="form-select bg-light" aria-label="Default select example">
                                            <option defaultValue>Pages</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                            <option value="extra-large">Extra Large</option>
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
        </>
    )
}

export default PremiumFeature