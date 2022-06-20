import React from "react";
import logo from '../.../../../assets/images/logo.svg' 


const Header = () =>{
    return (
        <header className="site-header">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <a className="logo" href="index.html">
                    <img src={logo} alt="Quantree - Robo Advisor for Smart Investments" />
                </a>
                <a href="/"
                    aria-expanded="false"
                    data-bs-toggle="collapse"
                    aria-controls="navTrigger"
                    data-bs-target="#navTrigger"
                    className="nav-trigger d-lg-none"
                    aria-label="Toggle Navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className="navbar" id="navTrigger">
                    <ul className="nav flex-column flex-lg-row align-items-lg-center">
                        <li className="nav-item">
                            <a href="index.html" className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="how-it-works.html" className="nav-link">How it Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="contact.html" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="login.html" className="btn btn-secondary">Invest</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

    )
}

export default Header;

