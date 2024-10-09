import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>About Us</h4>
          <p>Unlocking global ownership with Tokenized Real-World Assets</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Properties</Link>
            </li>
            <li>
              <Link href="https://docs.fractit.com/">Docs/Litepaper</Link>
            </li>
            <li>
              <Link href="https://blog.fractit.com/">Medium/Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a style={{ color: "#8a99b3" }}>hello@fractit.com</a>
            </li>
            <li>
              <a style={{ color: "#8a99b3" }}>
                345 Robson St, Vancouver, BC V6B 6B3, Canada
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
