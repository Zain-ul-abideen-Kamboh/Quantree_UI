import React, { Fragment } from "react";
import logo from "../../assets/images/logo.svg";

const OTP = () => {
  return (
    <Fragment>
      <section class="box-page blue-circle">
        <div class="box">
          <div class="logo-row">
            <a href="#">
              <img
                src={logo}
                alt="Quantree is an easy to use Robo Investment Advisor"
              />
            </a>
          </div>
          <div class="title-row">
            <h1>OTP Verification</h1>
            <p>
              We have sent you a verification code to{" "}
              <span>aliraza@gmail.com</span>
            </p>
          </div>
          <form action="">
            <div class="form-group d-flex justify-content-center otp-form-control">
              <input type="text" class="form-control" value="8" />
              <input type="text" class="form-control" value="2" />
              <input type="text" class="form-control" value="5" />
              <input type="text" class="form-control" value="7" />
            </div>
            <div class="title-row">
              <p>
                If you don't recieve the code in 30 seconds, tap below to have
                it re-sent, or re-check if you have entered the correct email
                address <a href="#">send again</a>
              </p>
            </div>
            <button class="btn btn-primary btn-lg">Submit</button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default OTP;
