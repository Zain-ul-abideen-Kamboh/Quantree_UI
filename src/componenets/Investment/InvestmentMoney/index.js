import React from "react";
import money_invest_blur from '../../../assets/images/money-invest-blur.png';
import money_invest from '../../../assets/images/money-invest.png';


const InvestmentMoney = () =>{
    return (
        <section className="section money-invest purple-circle">
        <div className="container">
            <div className="row flex-md-row-reverse align-items-md-center">
                <div className="col-md-6 col-xxl-7">
                    <a
                        href="/"
                        // className="card-image"  //bluring the image is not working
                        style={{"backgroundImage" : `url(${money_invest_blur})`}}
                        title="I have some money and want to invest it"
                        data-image-full={money_invest_blur}>
                        <img
                            className="d-block img-fluid"
                            src={money_invest}
                            alt="I have some money and want to invest it" />
                    </a>
                </div>
                <div className="col-md-6 col-xxl-5">
                    <h2>I have some money and want to <span className="highlight-text">invest it</span></h2>
                    <p>We ask you a few questions to give you the most suitable advice.</p>
                    <p>We analyse how much risk you're ready to take.</p>
                    <p>Our intelligent process picks a basket of mutual funds to help you achieve your goals</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="login.html" className="btn btn-primary btn-lg me-md-2">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    )
}

export default InvestmentMoney;