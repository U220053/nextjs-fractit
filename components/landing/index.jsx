/*
import React from "react";
import Header from "@/components/common/header/DefaultHeader";

import MobileMenu from "../common/header/MobileMenu";
import LookingItem1 from "./LookingItem1";
import OurMission2 from "./OurMission2";

const metadata = {
  title:
    "Listing Single – Details V1 || FindHouse - Real Estate React Template",
  description: "FindHouse - Real Estate React Template",
};

const Landing = () => {
  return (
    <>
      <Header />
      <MobileMenu />

      <section className="you-looking-for">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="mt0">
                  Unlock the Value of Your Property Holdings
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <OurMission2 />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb30">
                <h2>Unlock the Value of Your Property Holdings</h2>
                <p>
                  FractIt allows you to leverage your tokenized real estate
                  assets for flexible loans. Access liquidity without selling
                  your property shares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row features_row">
            <LookingItem1 />
          </div>
        </div>
      </section>
    </>
  );
};

{
 
}

export default Landing;
*/
import React from "react";
// import MetaComponent from "@/components/common/MetaComponent";
import Header from "@/components/common/header/DefaultHeader";
import BreadCrumbBanner3 from "./BreadCrumbBanner3";
import OurMission2 from "./OurMission2";
import LookingItem1 from "./LookingItem1";

const metadata = {
  title:
    "Listing Single – Details V1 || FindHouse - Real Estate React Template",
  description: "FindHouse - Real Estate React Template",
};

const Landing = () => {
  return (
    <>
      <Header />
      <BreadCrumbBanner3 />
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="mt0" style={{ fontWeight: "bold" }}>
                  Introduction
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <OurMission2 />
            <div className="col-lg-12">
              {/* <div className="feature_property_slider gutter-x15">
                <FeaturedProp />
              </div> */}
            </div>
            {/* <div className="row mt80">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>Easy Steps to Unlock Liquidity</h2>
                </div>
              </div>
            </div> */}
            {/* End .row */}
          </div>
          {/* End .row */}
        </div>

        <section id="property-city" className="property-city pb30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2 style={{ fontWeight: "bold" }}>
                    Easy Steps to Unlock Liquidity
                  </h2>
                </div>
              </div>
            </div>
            {/* End .row */}

            {/* <div className="row">
              <FindProp2 />
            </div> */}
            {/* End .row */}
            {/* <div className="row mt80">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>Why Choose FractIt REIT?</h2>
                </div>
              </div>
            </div> */}
            {/* <div className="row">
              <LookingItem1 />
            </div> */}
            <section className="you-looking-for">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="main-title text-center mb30">
                      <h2>Easy Steps to Unlock Liquidity:</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="property-city" className="property-city pb30">
              <div className="container">
                <div className="row features_row">
                  <LookingItem1 />
                </div>
              </div>
            </section>
            <div className="container">
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  {/* <div className="feature_property_slider gutter-x15">
                <FeaturedProp />
              </div> */}
                </div>
                <div className="row ">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="main-title text-center">
                      <h2 style={{ fontWeight: "bold" }}>Get Started</h2>
                      <p style={{ marginBottom: "20px" }}>
                        Ready to Unlock Liquidity?
                      </p>
                    </div>
                  </div>
                  <p className="w-full">
                    Start leveraging your tokenized real estate today. [Sign Up
                    or Log In] to access our lending platform.
                  </p>
                </div>
                {/* End .row */}
              </div>
              {/* End .row */}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

{
  /* End .row */
}

export default Landing;
