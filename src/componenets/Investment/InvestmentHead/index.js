import React from "react";
// import masthead_blur from '../../../assets/images/masthead-pic-blur.png';
import masthead from '../../../assets/images/masthead-pic.png';


const InvestmentHead = () => {

  return (
    <div className="masthead-container curve-parent blue-circle">
      <div className="masthead">
        <div className="container">
          <div className="row flex-md-row-reverse align-items-md-center">
            <div className="col-md-6 col-xxl-7">
              <a
                href="/"
                className="card-image"
                style={{backgroundImage: `url(${masthead})`}}  //it should be "masthead_blur" also check main.css -> 'card-image' with filter: blur(3px) which is not working
                title="Invest in Mutual Funds Easily"
                data-image-full={masthead}
              >
                <img
                  className="d-block img-fluid"
                  src={masthead}  //it should be => masthead_blur
                  alt="Invest in Mutual Funds Easily"
                />
              </a>
            </div>
            <div className="col-md-6 col-xxl-5">
              <h1>
                Invest in <span className="highlight-text">Mutual Funds</span>{" "}
                Easily
              </h1>
              <p>
                Algorithmically selected mutual funds to grow your money and
                meet your life goals
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="login.html" className="btn btn-primary btn-lg me-md-2">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-bottom-curve"></div>
    </div>
  );
};

export default InvestmentHead;
