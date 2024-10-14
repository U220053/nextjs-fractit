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
import MobileMenu from "../common/header/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import Footer from "../common/footer/Footer";

const metadata = {
  title:
    "Listing Single – Details V1 || FindHouse - Real Estate React Template",
  description: "FindHouse - Real Estate React Template",
};
const ErrorPageContent = () => {
  return (
    <div className="error_page footer_apps_widget">
      {/* <Image
        width={266}
        height={200}
        className="img-fluid img-thumb contain"
        src="/assets/images/resource/error.png"
        alt="error.png"
      /> */}
      <div className="erro_code">
        <h1>COMING SOON</h1>
      </div>
      {/* <p>We can’t seem to find the page you’re looking for</p> */}

      {/* End form */}

      <Link
        href="/"
        className="btn btn_error btn-thm"
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          borderColor: "#3b82f6",
        }}
      >
        Back To Home
      </Link>
    </div>
  );
};
const Landing = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <BreadCrumbBanner3 />

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2
                  className="mt0"
                  style={{ fontWeight: "bold", fontSize: "30px" }}
                >
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
            {/* <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2 style={{ fontWeight: "bold" }}>
                    Easy Steps to Unlock Liquidity
                  </h2>
                </div>
              </div>
            </div> */}
            {/* End .row */}

            {/* <section className="you-looking-for">
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
            </section> */}
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
                      <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
                        Get Started
                      </h2>
                      <p style={{ marginBottom: "20px" }}>
                        Ready to Unlock Liquidity?
                      </p>
                      <Image
                        width={1000}
                        height={1000}
                        src="/assets/images/reit_demo.png"
                      />
                      <ErrorPageContent />
                    </div>
                  </div>
                  {/* <p className="w-full">
                    Start leveraging your tokenized real estate today. [Sign Up
                    or Log In] to access our lending platform.
                  </p> */}
                </div>
                {/* End .row */}
              </div>
              {/* End .row */}
            </div>
          </div>
        </section>
      </section>
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

{
  /* End .row */
}

export default Landing;
