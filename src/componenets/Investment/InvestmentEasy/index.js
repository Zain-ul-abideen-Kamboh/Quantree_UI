import React, { useState } from "react";
// import InputRange from 'react-input-range';
import Slider from "react-input-slider";

const InvestmentEasy = () => {
  const [year, setYear] = useState({ x: 5 });
  const [amount, setAmount] = useState({ x: 50000 });
  return (
    <>
      <div className="calculator-container" style={{ marginTop: "0px" }}>
        <div className="container">
          <div className="section-heading">
            <h2 className="text-center">Easy Investment Calculator</h2>
          </div>
          <div className="d-flex justify-content-center risk-btn-group">
            <button type="button" className="btn btn-primary active">
              Low Risk
            </button>
            <button type="button" className="btn btn-outline-primary">
              Medium Risk
            </button>
            <button type="button" className="btn btn-outline-primary">
              High Risk
            </button>
          </div>
          <div className="card investment-calculator">
            <div className="card-body">
              <div className="slider-row">
                <div className="slider-label">
                  <label className="form-label">Invest Amount</label>
                </div>
                <div className="slider">
                  <Slider
                    style={{ marginBottom: 5, marginTop: 15, minWidth: "100%" }}
                    numberOnly
                    axis="x"
                    xstep={1}
                    xmin={1}
                    xmax={500000}
                    x={amount.x}
                    onChange={({ x }) => setAmount({ x })}
                  />
                  {/* <div id="investment-slider"></div> */}
                </div>
                <div className="slider-input input-group">
                  <span className="input-group-text">PKR</span>
                  <input
                    type="number"
                    readonly
                    className="form-control"
                    id="investment-total"
                    aria-label="Total Investment"
                    value={amount.x}
                  />
                </div>
              </div>
              <div className="slider-row">
                <div className="slider-label">
                  <label for="customRange2" className="form-label">
                    For how Long?
                  </label>
                </div>
                <div className="slider">
                  <Slider
                    style={{ marginBottom: 5, marginTop: 15, minWidth: "100%" }}
                    numberOnly
                    axis="x"
                    xstep={1}
                    xmin={1}
                    xmax={10}
                    x={year.x}
                    onChange={({ x }) => setYear({ x })}
                  />
                  {/* <div id="year-slider"></div> */}
                </div>
                <div className="slider-input input-group">
                  <div className="input-group">
                    <span className="input-group-text">Years</span>
                    <input
                      type="number"
                      readonly
                      id="year-total"
                      className="form-control"
                      aria-label="Years to Invest"
                      value={year.x}
                    />
                  </div>
                </div>
              </div>
              <p className="lead text-center">
                You are projected to get a return of{" "}
              </p>
              <h3 className="display-4 text-center">PKR 675,767</h3>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <a href="/" className="btn btn-primary btn-lg">
              Invest Now
            </a>
          </div>
        </div>
      </div>
      <div className="section-bottom-curve"></div>
    </>
  );
};

export default InvestmentEasy;
