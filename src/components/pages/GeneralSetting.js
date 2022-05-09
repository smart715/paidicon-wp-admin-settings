import React from 'react'
import { Row } from 'react-bootstrap'
import Header from '../Header'
import SearchElement from '../SearchElement'
import './../assets/custom-style.css'

const GeneralSetting = () => {
    return(
        <>
        <Header />
        <SearchElement />
        <div class="header-title-main  bg-light">
            <div class="header-title-main-inner container ">
                <h1 class="mb-0 py-4 page-titlee">General Settings</h1>
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
                                    <label class="mb-2">Title</label>
                                    <input type="text" class="form-control bg-light" placeholder="Title" />
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2">Icon</label>
                                    <input type="text" class="form-control bg-light" placeholder="Title" />
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2">Category</label>
                                    <select class="form-select bg-light" aria-label="Default select example">
                                        <option selected>Category</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2">Number Of Products</label>
                                    <input type="text" class="form-control bg-light" placeholder="Number Of Products" />
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2">Stripe Key</label>
                                    <input type="text" class="form-control bg-light" placeholder="Stripe Key" />
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12 mb-4">
                                    <label class="mb-2 d-flex justify-content-between">Referral Code <span class="light-blue">Add To Save Money!</span></label>
                                    <input type="text" class="form-control bg-light" placeholder="Referral Code" />
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

        <div class="container">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            POPUP DESIGN
        </button>
        <div class="modal fade popup-gery" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body text-center">
                    <svg width="88" height="88" viewBox="0 0 48 48" class="bg-gradiwnt rounded-pill p-3">
                        <g id="vuesax_bulk_setting" data-name="vuesax/bulk/setting" transform="translate(-236 -188)">
                            <g id="setting" transform="translate(236 188)">
                            <path id="Vector" d="M32.22,6.835,21.88.855a7.715,7.715,0,0,0-7.06,0L4.38,6.875C.24,9.675,0,10.095,0,14.555v10.86c0,4.46.24,4.9,4.46,7.74l10.34,5.98a7.191,7.191,0,0,0,3.54.86,7.061,7.061,0,0,0,3.52-.86l10.44-6.02c4.14-2.8,4.38-3.22,4.38-7.68V14.555C36.68,10.095,36.44,9.675,32.22,6.835Z" transform="translate(5.66 4.005)" fill="#fff" opacity="0.4"/>
                            <path id="Vector-2" data-name="Vector" d="M13,6.5A6.5,6.5,0,1,1,6.5,0,6.5,6.5,0,0,1,13,6.5Z" transform="translate(17.5 17.5)" fill="#fff"/>
                            <path id="Vector-3" data-name="Vector" d="M0,0H48V48H0Z" fill="none" opacity="0"/>
                            </g>
                        </g>
                    </svg>
                    <h1 class="mt-3 mb-3 text-white">Import Backup Settings</h1>
                    <p class="text-white">Do you want to import the last backup of your settings from Monday April 18 at 09:45 am? You won’t be able to do this later.</p>
                    </div>
                    <div class="modal-footer border-top-dotted">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                        <button type="button" class="btn btn-primary">Continue</button>
                    </div>
                </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default GeneralSetting