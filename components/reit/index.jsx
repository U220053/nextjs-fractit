import React from "react";
// import MetaComponent from "@/components/common/MetaComponent";
import Header from "@/components/common/header/DefaultHeader";
import BreadcrumbBanner3 from "./BreadcrumbBanner3";
import OurMission1 from "./OurMission1";
import WhyChoose from "./WhyChoose";
import FeaturedProp from "./FeaturedProp";
import FindProp2 from "./FindProp2";
import WhyChoose1 from "./WhyChoose1";
import MobileMenu from "../common/header/MobileMenu";
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
const Reit = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <BreadcrumbBanner3 />

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2
                  className="mt0"
                  style={{ fontWeight: "bold", fontSize: "24px" }}
                >
                  Introduction to FractIt REIT
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <OurMission1 />

            {/* <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2 className="mt0" style={{ fontWeight: "bold" }}>
                    Featured REIT
                  </h2>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProp />
              </div>
            </div> */}
            {/* <div className="row mt80">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2 style={{ fontWeight: "bold" }}>How It Works Section</h2>
                  <p>
                    Our REIT tokens are backed by fractional shares in multiple
                    tokenized properties, ensuring diversification and
                    stability. Here's how it works:
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div className="row">
              <WhyChoose1 />
            </div> */}
          </div>
        </div>
        {/* <section id="property-search" className="property-search bg-img4">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="search_smart_property text-center">
                <h2>Full Transparency and Security</h2>
                <p>
                  Each REIT token's underlying property allocation, rental
                  yields, and performance data are publicly available, ensuring
                  complete transparency. Our blockchain-based platform secures
                  all transactions and ownership details.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="property-city" className="property-city pb30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2 style={{ fontWeight: "bold" }}>How to Start Investing</h2>
                  <p>Getting started with FractIt REIT is easy:</p>
                </div>
              </div>
            </div>
            

            <div className="row">
              <FindProp2 />
            </div>
            <div className="row mt80">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2 style={{ fontWeight: "bold" }}>
                    Why Choose FractIt REIT?
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <WhyChoose />
            </div>
          </div>
        </section> */}
        <div className="row ">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center">
              {/* <h2 style={{ fontWeight: "bold" }}>Why Choose FractIt REIT?</h2> */}
              <ErrorPageContent />
            </div>
          </div>
        </div>
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

export default Reit;
