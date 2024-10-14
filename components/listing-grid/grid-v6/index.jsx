import Pagination from "../../common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar from "../../common/listing/FilterTopBar";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing from "../../common/listing/SidebarListing";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";
import BreadcrumbBanner3 from "./BreadcrumbBanner3";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />
      <BreadcrumbBanner3 />
      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Grid View --> */}
      <section className="our-listing bgc-f7 pb30-991  md-mt0">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-8 col-lg-6">
              <BreadCrumb2 />
            </div> */}
            {/* End .col */}

            <div className="col-md-4 col-lg-6">
              {/* ENd button for mobile sidebar show  */}
            </div>
            {/* End .col filter grid list */}
          </div>
          {/* End Page Breadcrumb and Grid,List and filter Button */}

          <div className="row">
            <div className="col-md-12">
              {/* End .row */}

              <div className="row">
                <FeaturedItem />
              </div>
              {/* End .row */}

              <div className="row">{/* End paginaion .col */}</div>
              {/* End .row */}
            </div>
            {/* End .col */}

            <div
              className="offcanvas offcanvas-start offcanvas-listing-sidebar"
              tabIndex="-1"
              id="sidebarListing"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Advanced Search</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              {/* End .offcanvas-heade */}

              <div className="offcanvas-body">
                <SidebarListing />
              </div>
            </div>
            {/* End mobile sidebar listing  */}
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
