import React, { Fragment } from "react";
import logo from "../../assets/images/logo.svg"
import signup_google from "../../assets/images/signup-google.png"

const SignUp = () =>{
    return(
        <Fragment>
             <section class="box-page">
        <div class="box">
            <div class="logo-row">
                <a href="#">
                    <img src={logo} alt="Quantree is an easy to use Robo Investment Advisor" />
                </a>
            </div>
            <div class="title-row">
                <h1>Get Started</h1>
            </div>
            <form action="">
                <div class="option-row">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="signupEmail" id="signupEmail" checked />
                        <label class="form-check-label" for="signupEmail">Signup with Email</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="signupNumber" id="signupNumber" />
                        <label class="form-check-label" for="signupNumber">Signup with number</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label" for="inputFullName">Full Name*</label>
                    <input type="text" class="form-control" id="inputFullName" placeholder="Enter Full Name" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="inputEmail">Email*</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter Email" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="inputPassword">Password*</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Enter Password" />
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="inputTerms" />
                    <label class="form-check-label" for="inputTerms">I have read and agree with <a href="#">Terms of Services</a> and our <a href="#">Privacy Policy</a>.</label>
                </div>
                <button class="btn btn-primary btn-lg">Sign Up</button>
            </form>
            <a class="google-signup" href="#">
                <img src={signup_google} alt="Signup using Google" />
            </a>
            <div class="login-row">
                <p>Already have an account? <a href="login.html">Login</a></p>
            </div>
        </div>
    </section>
        </Fragment>
    )
}

export default SignUp;