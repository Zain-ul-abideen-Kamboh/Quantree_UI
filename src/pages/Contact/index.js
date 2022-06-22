import React, { Fragment } from "react";
import Body from "../../layouts/Body";

const Contact = () => {
  return (
    <Fragment>
        <Body>
      <div class="page-heading curve-parent">
        <div class="container">
          <h1>Contact Us</h1>
        </div>
        <div class="section-bottom-curve"></div>
      </div>
      <section class="section contact-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-heading left-aligned">
                <h2>Get in touch</h2>
                <p>We're here for you! How Can We Help you?</p>
              </div>
              <dl>
                <dt>Address</dt>
                <dd>7515 Tariq Road, Karachi, Pakistan</dd>
              </dl>
              <dl>
                <dt>Phone</dt>
                <dd>321-376-5427</dd>
              </dl>
              <dl>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:info@quantree.co">info@quantree.co</a>
                </dd>
              </dl>
            </div>
            <div class="col-lg-6">
              <div class="contact-box">
                <form>
                  <div class="form-group">
                    <label class="form-label" for="inputFullName">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputFullName"
                      placeholder="Enter your Full Name"
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="inputEmail">
                      Email*
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="inputPhone">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPhone"
                      placeholder="Enter your Phone Number"
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="inputMessage">
                      Message*
                    </label>
                    <textarea
                      id="inputMessage"
                      class="form-control"
                      placeholder="Enter your Message"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section faq">
        <div class="container">
          <div class="section-heading">
            <h2 class="text-center">Frequently Asked Questions</h2>
          </div>
          <div class="faq-list" id="accordion">
            <h3>What is automated investing?</h3>
            <div>
              <p>
                Automated Investing uses computer algorithms to provide
                financial guidance and portfolio management for investors.
              </p>
              <p>
                For more information on the idea of Automated Investing, read
                our <a href="#">Automated Investing 101 Guide</a>.
              </p>
            </div>

            <h3>Is auto investing the same as Robo investing?</h3>
            <div>
              <p>
                These terms are often used interchangeably. Robo Advisors use
                the same idea of algorithmic based investing and financial
                advice for clients, as opposed to humans or self driven research
                and wealth management.
              </p>
            </div>

            <h3>Is automated investing a good idea?</h3>
            <div>
              <p>
                Using an Automated Investing platform has several perks,
                particularly affordability, convenience, and the avoidance of
                potential human errors. This type of investment strategy allows
                clients to use a “hands off” approach, which many people may
                prefer over the time consuming research and management required
                for active trading.
              </p>
            </div>

            <h3>How does auto investing with SoFi work?</h3>
            <div>
              <p>
                SoFi aims to understand your investment goals from the start,
                and then automates the investing needed to get there. We invest
                in a wide array of assets to reduce risk.
              </p>
              <p>
                SoFi Invest provides you complimentary access to our financial
                advisors. When the markets fluctuate and change, we will handle
                the rebalancing needed to maintain the strongest portfolio.
              </p>
            </div>

            <h3>How do you start auto investing with little money?</h3>
            <p>
              SoFi Invest requires no minimum investment to get started. We
              offer investing services to users of all levels
            </p>
          </div>
        </div>
      </section>
      </Body>
    </Fragment>
  );
};

export default Contact;
