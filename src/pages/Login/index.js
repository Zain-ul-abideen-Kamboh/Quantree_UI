import React, {Fragment} from "react";
import logo from "../../assets/images/logo.svg"
import login_google from "../../assets/images/login-google.png"

const Login = () =>{
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
                <h1>Login</h1>
                <p>Welcome back! Please enter your details</p>
            </div>
            <form action="">
                <div class="form-group">
                    <label class="form-label" for="inputEmail">Email or Phone Number</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter Email or Phone Number" />
                </div>
                <div class="form-group">
                    <label class="form-label" for="inputPassword">Password*</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Enter Password" />
                    <div class="form-text text-end"><a href="#">Forgot password?</a></div>
                </div>
                <button class="btn btn-primary btn-lg">Sign In</button>
            </form>
            <a class="google-signup" href="#">
                <img src={login_google} alt="Signup using Google" />
            </a>
            <div class="login-row">
                <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
            </div>
        </div>
    </section>
        </Fragment>
    )
}

export default Login;