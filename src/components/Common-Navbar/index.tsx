import './style.scss'
import logo from '../../assets/images/website-images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const CommonNavbarComponent = () => {
  return (
    <div>
      <header>
        <div className="container-fluid header">
          <div className="review-area">
            <div className="rating-area">
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
            </div>
            <p>Google Reviews</p>
          </div>
          <div className="center-area">
            <p>Build your own sign online</p>
          </div>
          <div className="contact-area">
            <div className="phone">
              <a href="#">
                <FontAwesomeIcon icon={faPhone} />
                972-418-5253
              </a>
            </div>
            <div className="email">
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} />
                orders@signassign.com
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="container-fluid">
        <div className="desktop-top-menu">
          <div className="left-area">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="right-area">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search here..."
                className="form-control"
              />
            </div>
            <div className="menu-links">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li className="dropdown">
                  <a href="#">Service</a>
                  <ul className="dropdown-content">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li className="dropdown-lists" key={i}>
                        <a href="#">Sign Installation</a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a href="#">Design Lab</a>
                </li>
                <li>
                  <a href="#">Learning Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="auth-button" id="navbarAuthOptionsContainer">
              <a
                href="#"
                className="signup-button"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Sign up
              </a>
              <a
                href="#"
                className="login-button"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </a>
            </div>
          </div>
        </div>

        <div className="mobile-top-menu">
          <div className="left">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="right">
            <div className="navbar-wrapper hidden-md hidden-lg visible-xs visible-sm">
              <div className="navbar-wrapper-inner">
                <div className="pure-container" data-effect="pure-effect-slide">
                  <input
                    type="checkbox"
                    id="pure-toggle-left"
                    className="pure-toggle"
                    data-toggle="left"
                  />
                  <label
                    className="pure-toggle-label"
                    htmlFor="pure-toggle-left"
                    data-toggle-label="left"
                  >
                    <span className="pure-toggle-icon"></span>
                  </label>
                  <label
                    className="pure-overlay"
                    htmlFor="pure-toggle-left"
                    data-overlay="left"
                  ></label>

                  <nav className="pure-drawer" data-position="left">
                    <div className="main-nav-mob" id="navbar-mob">
                      <div className="auto-scroll">
                        <nav className="nav" role="navigation">
                          <ul className="nav__list">
                            <li>
                              <a href="#"> About Us</a>
                            </li>
                            <li>
                              <input id="group-1" type="checkbox" hidden />
                              <label htmlFor="group-1">
                                <span>
                                  <i
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>{' '}
                                Services
                              </label>
                              <ul className="group-list">
                                {Array.from({ length: 6 }).map((_, i) => (
                                  <li key={`services-${i}`}>
                                    <input
                                      id={`service-sub-group-${i}`}
                                      type="checkbox"
                                      hidden
                                    />
                                    <label htmlFor={`service-sub-group-${i}`}>
                                      {' '}
                                      Sign Installation
                                    </label>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <li>
                              <input id="group-2" type="checkbox" hidden />
                              <label htmlFor="group-2">
                                <span>
                                  <i
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>{' '}
                                Products
                              </label>
                              <ul className="group-list">
                                {[
                                  'Banner',
                                  'Window Products',
                                  'Vehicle Products',
                                  'Marketing Tools',
                                  'Event Signs',
                                  'Indoor Signs',
                                  'Hardwares',
                                  'Direct Printing on Material',
                                  'Direct Printing on Material',
                                ].map((product, i) => (
                                  <li key={`product-${i}`}>
                                    <input
                                      id={`product-sub-group-${i}`}
                                      type="checkbox"
                                      hidden
                                    />
                                    <label htmlFor={`product-sub-group-${i}`}>
                                      {product}
                                    </label>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <li>
                              <a href="#"> Design Lab</a>
                            </li>
                            <li>
                              <a href="#"> Learning Center</a>
                            </li>
                            <li>
                              <a href="#"> Contact Us</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="mega-menu">
        <div className="container-fluid">
          <ul id="navbarCategoryMenuListContainer">
            <li className="dropdown">
              <a href="/category/banner">Banner</a>
              <ul className="dropdown-content">
                <li className="dropdown-lists">
                  <a href="/subcategory/vinyl-banner">Vinyl Banner</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="/category/window-products">Window Products</a>
              <ul className="dropdown-content">
                <li className="dropdown-lists">
                  <a href="/subcategory/vinyl-window-decals">
                    Vinyl Window Decals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default CommonNavbarComponent
