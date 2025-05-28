import { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/website-images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SignupModal from '../../dialogs/signup-modal'
import LoginModal from '../../dialogs/login-modal'
import { useAuth } from '../../context/AuthContext';

const CommonNavbarComponent = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
              <Link to="#">
                <FontAwesomeIcon icon={faPhone} />
                972-418-5253
              </Link>
            </div>
            <div className="email">
              <Link to="#">
                <FontAwesomeIcon icon={faEnvelope} />
                orders@signassign.com
              </Link>
            </div>
          </div>
        </div>
      </header>

      <nav className="container-fluid">
        <div className="desktop-top-menu">
          <div className="left-area">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
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
                  <Link to="#">About Us</Link>
                </li>
                <li className="dropdown">
                  <Link to="#">Service</Link>
                  <ul className="dropdown-content">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li className="dropdown-lists" key={i}>
                        <Link to="#">Sign Installation</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link to="#">Design Lab</Link>
                </li>
                <li>
                  <Link to="#">Learning Center</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="auth-button" id="navbarAuthOptionsContainer">
              <Link
                to="/dashboard"
                className="profile-icon"
                title="Profile"
                style={{ cursor: 'pointer' }}
              >
                <i className="fi fi-rs-user-gear"></i>
              </Link>

              <button
                onClick={logout}
                className="logout-icon"
                title="Logout"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                aria-label="Logout"
              >
                <i className="fi fi-rr-sign-out-alt"></i>
              </button>
              {/* <Link
                to="#"
                onClick={() => setIsModalOpen(true)}
                className="signup-button"
              >
                Sign up
              </Link>
              <SignupModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />

              <Link
                to="#"
                onClick={() => setIsOpen(true)}
                className="login-button"
              >
                Login
              </Link>
              <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
            </div>
          </div>
        </div>

        <div className="mobile-top-menu">
          <div className="left">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
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
                              <Link to="#">About Us</Link>
                            </li>
                            <li>
                              <input id="group-1" type="checkbox" hidden />
                              <label htmlFor="group-1">
                                <span>
                                  <i
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
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
                                </span>
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
                              <Link to="#">Design Lab</Link>
                            </li>
                            <li>
                              <Link to="#">Learning Center</Link>
                            </li>
                            <li>
                              <Link to="#">Contact Us</Link>
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
              <Link to="/category/banner">Banner</Link>
              <ul className="dropdown-content">
                <li className="dropdown-lists">
                  <Link to="/subcategory/vinyl-banner">Vinyl Banner</Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="/category/window-products">Window Products</Link>
              <ul className="dropdown-content">
                <li className="dropdown-lists">
                  <Link to="/subcategory/vinyl-window-decals">
                    Vinyl Window Decals
                  </Link>
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
