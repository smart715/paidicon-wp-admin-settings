import React from 'react'
import Header from '../Header'
const ThemeSetting = () =>{
    return (
        <>
        <Header />
        <div class="header-title-main  bg-light">
            <div class="header-title-main-inner container ">
                <h1 class="mb-0 py-4 page-titlee">Theme Settings</h1>
            </div>
        </div>
        <div class="form-mainn-div">
            <div class="position-relative form-mainn-div-inner bg-light">
                <div class="search-save-btn-main container pt-2 pb-4 mb-2">
                    <div class="search-save-btn-main-inner">
                        <div class="row">
                            <div class="col-md-6 col-12 col-lg-4 formsearch-coll">
                                <form class="search-formm">
                                    <div class="form-group position-relative">
                                        <input type="email" class="form-control search-inputt" placeholder="Search Something…" />
                                        <button class="btn btn-secondary search-btnn">Go</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-content-mainn bg-white mb-5">
                    <form class="container pt-4">
                        <div class="border-dotted rounded-3 p-4 mt-3">
                            <div class="row">
                                <div class="form-group col-lg-3 col-md-6 col-12">
                                    <label class="mb-2">Size</label>
                                    <select class="form-select bg-light" aria-label="Default select example">
                                        <option selected>Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12">
                                    <label class="mb-2">Primary Color</label>
                                    <select class="form-select bg-light" aria-label="Default select example">
                                        <option selected>Primary Color</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12">
                                    <label class="mb-2">Secondary Color</label>
                                    <select class="form-select bg-light" aria-label="Default select example">
                                        <option selected>Secondary Color</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12">
                                    <label class="mb-2">Design</label>
                                    <select class="form-select bg-light" aria-label="Default select example">
                                        <option selected>Rounded</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
                                </div>
                            </div>
                            <div class="formbtn-main-roww">
                                <button type="submit" class="btn btn-primary">Save Changes</button>
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