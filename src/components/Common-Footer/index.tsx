import footerLogo from '../../assets/images/images/footer-logo.png'
import './style.scss'

const CommonFooterComponent = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="footer-inner">
            <div className="footer-col">
              <div className="footer-logo">
                <img src={footerLogo} alt="Footer Logo" />
              </div>
              <h5>
                <span><i className="fa-solid fa-phone-volume"></i></span>
                <span>972-418-5253</span>
              </h5>
              <h6>
                <span><i className="fa-solid fa-envelope-open"></i></span>
                <span>orders@signassign.com</span>
              </h6>
              <h6>
                <span><i className="fa-solid fa-location-dot"></i></span>
                <span>702 Shepherd Dr, Garland, TX 75042, United States</span>
              </h6>
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-square-instagram"></i></a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Choose from</h5>
              <ul id="footerCategoryMenuListContainer"></ul>
            </div>

            <div className="footer-col">
              <h5>Information</h5>
              <ul>
                {[
                  "Order Tracking",
                  "Sign Assign Wallet",
                  "International Shipping",
                  "Customer Reviews",
                  "Special Offers",
                  "Sitemap",
                  "Blog",
                  "Sign Assign Catalog",
                  "Banner for a Cause",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#"><i className="fa-solid fa-arrow-right"></i><span>{item}</span></a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Customer Service</h5>
              <ul>
                {[
                  "About Us",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Use",
                  "Affiliate Program",
                  "Areas of Service",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#"><i className="fa-solid fa-arrow-right"></i><span>{item}</span></a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Help Station</h5>
              <ul>
                {[
                  "FAQs",
                  "Return Policy",
                  "Free Design Proofs",
                  "Shipping",
                  "Sample Kit",
                  "Vectorization",
                  "Instant Quote",
                  "Business Inquiries",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i><span>{item}</span></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container-fluid">
          <h6>Sign Assign Company copyright (©) 2025</h6>
        </div>
      </div>
    </>
  );
};

export default CommonFooterComponent;
