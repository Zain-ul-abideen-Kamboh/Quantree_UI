import React, { Fragment } from "react";
// import story_onboarding_blur from "../../../assets/images/story-onboarding-blur.png";
import story_onboarding from "../../../assets/images/story-onboarding.png";
// import story_goals_blur from "../../../assets/images/story-goals-blur.png";
import story_goals from "../../../assets/images/story-goals.png";
// import story_risk_blur from "../../../assets/images/story-risk-blur.png";
import story_risk from "../../../assets/images/story-risk.png";
// import story_monitoring_blur from "../../../assets/images/story-monitoring-blur.png";
import story_monitoring from "../../../assets/images/story-monitoring.png";

const OnBoarding = () => {
  return (
    <Fragment>
      <div class="page-heading curve-parent">
        <div class="container">
          <h1>How it Works</h1>
          <p>
            We cut out the noise and focus on building your long-term savings
          </p>
        </div>
        <div class="section-bottom-curve"></div>
      </div>

      <div class="story-line">
        <div class="container">
          <div class="story-item blue-circle">
            <div class="story-img">
              <a
                href="#"
                class="card-image"
                style={{ backgroundImage: `url(${story_onboarding})` }} 
            //    It should be this "story_onboarding_blur"
                title="Onboarding - Signing up is an easy process. Requires the investor to be KYC compliant"
                data-image-full={story_onboarding}
              >
                <img
                  class="d-block img-fluid"
                  src={story_onboarding}
            //    It should be this "story_onboarding_blur"
                  alt="Onboarding - Signing up is an easy process. Requires the investor to be KYC compliant"
                />
              </a>
            </div>
            <div class="story-card">
              <h3>Onboarding</h3>
              <p>
                Signing up is an easy process. Requires the investor to be KYC
                compliant
              </p>
            </div>
          </div>

          <div class="story-item purple-cirlce">
            <div class="story-img">
              <a
                href="#"
                class="card-image"
                style={{ backgroundImage: `url(${story_goals})` }}
                title="Set your Goals - The useful online dashboard helps to organise and manage financial plans and goals of the investors"
                data-image-full={story_goals}
              >
                <img
                  class="d-block img-fluid"
                  src={story_goals}
                  alt="Set your Goals - The useful online dashboard helps to organise and manage financial plans and goals of the investors"
                />
              </a>
            </div>
            <div class="story-card">
              <h3>Set your Goals</h3>
              <p>
                The useful online dashboard helps to organise and manage
                financial plans and goals of the investors.
              </p>
            </div>
          </div>

          <div class="story-item blue-circle">
            <div class="story-img">
              <a
                href="#"
                class="card-image"
                style={{ backgroundImage: `url(${story_risk})` }}
                title="Risk Assessment - Client's data includes information about financial situations, risk tolerance and goals. The automated advisor uses this data to recommend a set of investments"
                data-image-full={story_risk}
              >
                <img
                  class="d-block img-fluid"
                  src={story_risk}
                  alt="Risk Assessment - Client's data includes information about financial situations, risk tolerance and goals. The automated advisor uses this data to recommend a set of investments"
                />
              </a>
            </div>
            <div class="story-card">
              <h3>Risk Assessment</h3>
              <p>
                Client's data includes information about financial situations,
                risk tolerance and goals. The automated advisor uses this data
                to recommend a set of investments.
              </p>
            </div>
          </div>

          <div class="story-item purple-cirlce">
            <div class="story-img">
              <a
                href="#"
                class="card-image"
                style={{ backgroundImage: `url(${story_monitoring})` }}
                title="Easy Monitoring - Quantree monitors the portfolios online 24/7. Throughout all stages of the investment cycle, we guide the investors while offering a digital solution for the clients that prefer to chart their own path"
                data-image-full={story_monitoring}
              >
                <img
                  class="d-block img-fluid"
                  src={story_monitoring}
                  alt="Easy Monitoring - Quantree monitors the portfolios online 24/7. Throughout all stages of the investment cycle, we guide the investors while offering a digital solution for the clients that prefer to chart their own path"
                />
              </a>
            </div>
            <div class="story-card">
              <h3>Easy Monitoring</h3>
              <p>
                Quantree monitors the portfolios online 24/7. Throughout all
                stages of the investment cycle, we guide the investors while
                offering a digital solution for the clients that prefer to chart
                their own path.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section class="breaker-section bg-primary g-logo-dark-bg">
        <div class="container">
            <p data-aos-once="true">Investments can now be made from wherever you want and at any time. Realise your dream of financial independence and start with your investments now.</p>
        </div>
    </section>
    </Fragment>
  );
};

export default OnBoarding;
