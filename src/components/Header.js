import React from 'react'
import './assets/custom-style.css'
import logo from  '../components/assets/Images/logo.png'
const Header = () => {
    return (
        <div class="header-mainn border-bottom-dotted bg-light">
            <div class="header-mainn-inner container">
                <nav class="navbar navbar-expand-lg navbar-light py-4">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={logo} alt="" height="44px"/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav ">
                                <li class="nav-item me-2">
                                    <a class="nav-link active" aria-current="page" href="/general-setting">General Settings</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="nav-link" href="/theme">Theme Settings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/premium">Premium Features</a>
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