import footerLogo from '../../assets/images/images/footer-logo.png'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons/faSquareInstagram'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
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
                <span>
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </span>
                <span>972-418-5253</span>
              </h5>
              <h6>
                <span>
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </span>
                <span>orders@signassign.com</span>
              </h6>
              <h6>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span>702 Shepherd Dr, Garland, TX 75042, United States</span>
              </h6>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </a>
                </li>
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
                  'Order Tracking',
                  'Sign Assign Wallet',
                  'International Shipping',
                  'Customer Reviews',
                  'Special Offers',
                  'Sitemap',
                  'Blog',
                  'Sign Assign Catalog',
                  'Banner for a Cause',
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Customer Service</h5>
              <ul>
                {[
                  'About Us',
                  'Contact Us',
                  'Privacy Policy',
                  'Terms of Use',
                  'Affiliate Program',
                  'Areas of Service',
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Help Station</h5>
              <ul>
                {[
                  'FAQs',
                  'Return Policy',
                  'Free Design Proofs',
                  'Shipping',
                  'Sample Kit',
                  'Vectorization',
                  'Instant Quote',
                  'Business Inquiries',
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>{item}</span>
                    </a>
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
  )
}

export default CommonFooterComponent
