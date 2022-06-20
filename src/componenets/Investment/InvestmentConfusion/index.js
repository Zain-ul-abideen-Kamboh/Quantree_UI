import React from "react";
import problem_statement_avenues from "../../../assets/images/problem-statement-avenues.svg";
import problem_statement_product from '../../../assets/images/problem-statement-product.svg';
import problem_statement_process from '../../../assets/images/problem-statement-process.svg';
import problem_statement_portfolio from '../../../assets/images/problem-statement-portfolio.svg'

const InvestmentConfusion = () =>{
    return(
        <section className="section g-logo-white-bg problem-statement">
        <div className="container">
            <div className="section-heading">
                <h2 className="text-center">Why is investing Confusing?</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <img src={problem_statement_avenues} alt="Too many avenues"/>
                            <h2>Too many<br />avenues</h2>
                            <p>Mutual funds, fixed deposits, shares, insurance.. there are so many avenues to invest in and not enough knowledge about them!</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <img src={problem_statement_product} alt="Choosing the right product"/>
                            <h2>Choosing the right<br />product</h2>
                            <p>Lengthy names and lengthier promises full of jargon -  how does one make the right choice.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <img src={problem_statement_process} alt="Complicated Processes"/>
                            <h2>Complicated<br />Processes</h2>
                            <p>Investment processes can be long, unwieldy and off-putting.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <img src={problem_statement_portfolio} alt="Tracking your Portfolio" />
                            <h2>Tracking your<br />Portfolio</h2>
                            <p>Compiling, tracking and staying on top of your portofolio is challenging.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default InvestmentConfusion;