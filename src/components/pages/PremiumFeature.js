import React from 'react'
import Header from '../Header'

const PremiumFeature = () =>{
    return(
        <>
        <Header />
        <div class="header-title-main  bg-light">
            <div class="header-title-main-inner container ">
                <h1 class="mb-0 py-4 page-titlee">Premium Features</h1>
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
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2">API Key</label>
                                    <input type="text" class="form-control bg-light" placeholder="API Key" />
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2">Restrict To Categories</label>
                                    <select class="form-select bg-light" aria-label="Default select example">
                                        <option selected>Categories</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2">Restrict Icon To Pages</label>
                                    <select class="form-select bg-light" aria-label="Default select example">
                                        <option selected>Pages</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2">Footer Text</label>
                                    <input type="text" class="form-control bg-light" placeholder="Footer Text" />
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2">Back Up Settings</label>
                                    <input type="text" class="form-control bg-light" placeholder="Enable" />
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

export default PremiumFeature