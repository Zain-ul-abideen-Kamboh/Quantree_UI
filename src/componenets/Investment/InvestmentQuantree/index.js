import React from "react";
import choose_quantree_security from '../../../assets/images/choose-quantree-security.svg'
import choose_quantree_fraud from '../../../assets/images/choose-quantree-fraud.svg'


const InvestmentQuantree = () =>{
    return(
        <section className="section choose-quantree">
        <div className="container">
            <div className="section-heading">
                <h2 className="text-center">Why Choose Quantree</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <img src={choose_quantree_security} alt="Security & Privacy" />
                            <h2>Security & Privacy</h2>
                            <p>We use the strongest browser encryption available, store all of our data on servers in a secure facility & implement systematic procedures for securing and storing data. We protect the privacy of your information and will never share your data with anyone</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <img src={choose_quantree_fraud} alt="Fraud Protection" />
                            <h2>Fraud Protection</h2>
                            <p>We are committed to protecting your account from unauthorized acitivity. If you see any unauthorized activity on your account, report if immediately. Do not share your account information or password with anyone. We protect the privacy of your information and will never share your data with anyone</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center button-row">
                <a href="how-it-works.html" className="btn btn-primary btn-lg">How it Works</a>
            </div>
        </div>
    </section>
    )
}

export default InvestmentQuantree;