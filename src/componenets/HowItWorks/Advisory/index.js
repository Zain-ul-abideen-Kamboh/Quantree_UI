import React, { Fragment } from "react";
// import robo_advisor_blur from "../../../assets/images/robo-advisor-blur.png";
import robo_advisor from "../../../assets/images/robo-advisor.png";

const Advisory = () => {
  return (
    <Fragment>
      <section class="robo-advisor curve-parent">
        <div class="container">
          <div class="row flex-md-row-reverse align-items-md-center">
            <div
              class="col-md-6 col-xxl-7"
            >
              <a
                href="#"
                class="card-image"
                style={{ backgroundImage: `url(${robo_advisor})` }}
                //    It should be this "robo_advisor_blur"

                title="Quantree is an easy to use Robo Investment Advisor"
                data-image-full={robo_advisor}
              >
                <img
                  class="d-block img-fluid"
                  src={robo_advisor}
                  //    It should be this "robo_advisor_blur"
                  alt="Quantree is an easy to use Robo Investment Advisor"
                />
              </a>
            </div>
            <div class="col-md-6 col-xxl-5">
              <p>
                The biggest advantage of a robo advisor is that it helps you to
                avoid costly investing mistakes.
              </p>
              <p>
                Many a times it happens that investors make emotional decisions
                at the market high or market low based on their gut feeling.
              </p>
              <p>
                Robo advisor doesn't make these mistakes. It suggests you the
                best option available at that point of time.
              </p>
            </div>
          </div>
        </div>
        <div class="section-bottom-curve"></div>
      </section>
    </Fragment>
  );
};

export default Advisory;
