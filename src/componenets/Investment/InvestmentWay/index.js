import React from "react";
import InvestmentEasy from "../InvestmentEasy";
import right_invest_trip from "../../../assets/images/right-invest-trip.svg";
import right_invest_home from "../../../assets/images/right-invest-home.svg";
import right_invest_wedding from "../../../assets/images/right-invest-wedding.svg";
import right_invest_young from "../../../assets/images/right-invest-young.svg";
import right_invest_education from "../../../assets/images/right-invest-education.svg";
import right_invest_wealth from "../../../assets/images/right-invest-wealth.svg";
import right_invest_expense from "../../../assets/images/right-invest-expense.svg";
import right_invest_emergency from "../../../assets/images/right-invest-emergency.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Row, Col } from "react-bootstrap";

const InvestmentWay = () => {
  return (
    <section className="section curve-parent right-invest">
      <div className="section-top-curve"></div>
      <div className="container">
        <div className="section-heading">
          <h2 className="text-center">
            The right way to invest? It's up to you.
          </h2>
          <p className="text-center">
            Everyone has different goals when it comes to thier life, their
            money and their investment plans.
          </p>
        </div>
        <div className="flexslider carousel">
          <ul className="slides" style={{ width: "100%",  marginLeft: "0%" }}>
            <Carousel style={{ minWidth: "100%" }}>
              <Row style={{ marginBottom: "100px" }}>
                <Col lg={3} md={4} sm={6}>
                  <span>
                    <div className="card"  data-aos-once="true">
                      <div className="card-body" >
                        <div className="card-img" >
                          <img
                            src={right_invest_trip}
                            alt="Take the trip of a lifetime"
                            width="149"
                            height="160"
                          />
                        </div>
                        <p>Take the trip of a lifetime</p>
                      </div>
                    </div>
                  </span>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <span>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img">
                          <img
                            src={right_invest_home}
                            alt="Buy a home for your family"
                            width="232"
                            height="119"
                          />
                        </div>
                        <p>Buy a home for your family</p>
                      </div>
                    </div>
                  </span>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <span>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img">
                          <img
                            src={right_invest_wedding}
                            alt="Pay for a wedding"
                            width="120"
                            height="119"
                          />
                        </div>
                        <p>Pay for a wedding</p>
                      </div>
                    </div>
                  </span>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <span>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img">
                          <img
                            src={right_invest_young}
                            alt="Retire at your young age"
                            width="258"
                            height="151"
                          />
                        </div>
                        <p>Retire at your young age</p>
                      </div>
                    </div>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={4} sm={6}>
                  <span>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img">
                          <img
                            src={right_invest_education}
                            alt="Save for kid's education"
                            width="169"
                            height="190"
                          />
                        </div>
                        <p>Save for kid's education</p>
                      </div>
                    </div>
                  </span>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <span>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img">
                          <img
                            src={right_invest_wealth}
                            alt="Build your wealth"
                            width="138"
                            height="82"
                          />
                        </div>
                        <p>Build your wealth</p>
                      </div>
                    </div>
                  </span>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <span>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img">
                          <img
                            src={right_invest_expense}
                            alt="Plan for future Expense"
                            width="242"
                            height="95"
                          />
                        </div>
                        <p>Plan for future Expense</p>
                      </div>
                    </div>
                  </span>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <span>
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img">
                          <img
                            src={right_invest_emergency}
                            alt="Save for any emergencies"
                            width="139"
                            height="92"
                          />
                        </div>
                        <p>Save for any emergencies</p>
                      </div>
                    </div>
                  </span>
                </Col>
              </Row>
            </Carousel>
          </ul>
        </div>
      </div>
      <InvestmentEasy />
    </section>
  );
};

export default InvestmentWay;
