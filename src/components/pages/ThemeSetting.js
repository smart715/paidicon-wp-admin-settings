import React from 'react'
import Header from '../Header'
const ThemeSetting = () =>{
    return (
        <>
        <Header />
        <div className="header-title-main  bg-light">
            <div className="header-title-main-inner container ">
                <h1 className="mb-0 py-4 page-titlee text-center  text-md-left">Theme Settings</h1>
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
                                    <select className="form-select bg-light" aria-label="Default select example">
                                        <option defaultValue>Primary Color</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-6 col-xl-3 col-md-6 col-12 mb-4">
                                    <label className="mb-2">Secondary Color</label>
                                    <select className="form-select bg-light" aria-label="Default select example">
                                        <option defaultValue>Secondary Color</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
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

        </>
    )
}

export default ThemeSetting