import { Link } from 'react-router-dom'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
const ProductListPage = () => {
  return (
    <>
      <div className="breadcrumbs-area">
        <div className="container-fluid">
          <div className="flex-inner">
            <div className="left">
              <ul>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <span>
                    <svg
                      className="svg-inline--fa fa-angle-right"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                      ></path>
                    </svg>
                  </span>
                </li>
                <li>Banners</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-product-area py-10">
        <div className="container-fluid">
          <div className="filter-divider">
            <div className="left-area">
              <h3>Banners</h3>
              <div className="banner-inner" id="dataList">
                <div className="inner-card">
                  <Link to={'/product/banner-stands'}>
                    <div className="p-3 m-0">
                      <img
                        src="http://3.109.198.252/images/logo.png"
                        alt="Banner Stands"
                      />
                    </div>
                    <div className="px-3 mt-0">
                      <h5>Banner Stands</h5>
                      {/* <!-- <h6>Size (W X H): 34” x 84”)</h6> --> */}
                      <div className="rating-area">
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </div>
                      <h6>
                        Starts at: <span className="text-green">-</span>
                      </h6>
                    </div>
                  </Link>
                  <a
                    href="http://3.109.198.252/editor"
                    target="_blank"
                    className="customized-button"
                  >
                    Customize
                  </a>
                </div>
                <div className="inner-card">
                  <Link to={'/product/heavy-duty-banners'}>
                    <div className="p-3 m-0">
                      <img
                        src="http://3.109.198.252/images/logo.png"
                        alt="Heavy Duty Banners"
                      />
                    </div>
                    <div className="px-3 mt-0">
                      <h5>Heavy Duty Banners</h5>
                      {/* <!-- <h6>Size (W X H): 34” x 84”)</h6> --> */}
                      <div className="rating-area">
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </div>
                      <h6>
                        Starts at: <span className="text-green">-</span>
                      </h6>
                    </div>
                  </Link>
                  <a
                    href="http://3.109.198.252/editor"
                    target="_blank"
                    className="customized-button"
                  >
                    Customize
                  </a>
                </div>
                <div className="inner-card">
                  <Link to={'/product/mesh-banners'}>
                    <div className="p-3 m-0">
                      <img
                        src="http://3.109.198.252/images/logo.png"
                        alt="Mesh Banners"
                      />
                    </div>
                    <div className="px-3 mt-0">
                      <h5>Mesh Banners</h5>
                      {/* <!-- <h6>Size (W X H): 34” x 84”)</h6> --> */}
                      <div className="rating-area">
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </div>
                      <h6>
                        Starts at: <span className="text-green">-</span>
                      </h6>
                    </div>
                  </Link>
                  <a
                    href="http://3.109.198.252/editor"
                    target="_blank"
                    className="customized-button"
                  >
                    Customize
                  </a>
                </div>
                <div className="inner-card">
                  <Link to={'/product/vinyl-banners'}>
                    <div className="p-3 m-0">
                      <img
                        src="http://3.109.198.252/images/logo.png"
                        alt="Vinyl Banners"
                      />
                    </div>
                    <div className="px-3 mt-0">
                      <h5>Vinyl Banners</h5>
                      {/* <!-- <h6>Size (W X H): 34” x 84”)</h6> --> */}
                      <div className="rating-area">
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </div>
                      <h6>
                        Starts at: <span className="text-green">$0</span>
                      </h6>
                    </div>
                  </Link>
                  <a
                    href="http://3.109.198.252/editor"
                    target="_blank"
                    className="customized-button"
                  >
                    Customize
                  </a>
                </div>
                <div className="inner-card">
                  <Link to={'/product/product-1'}>
                    <div className="p-3 m-0">
                      <img
                        src="http://3.109.198.252/images/logo.png"
                        alt="product 1"
                      />
                    </div>
                    <div className="px-3 mt-0">
                      <h5>product 1</h5>
                      {/* <!-- <h6>Size (W X H): 34” x 84”)</h6> --> */}
                      <div className="rating-area">
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                        <svg
                          className="svg-inline--fa fa-star checked"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </div>
                      <h6>
                        Starts at: <span className="text-green">-</span>
                      </h6>
                    </div>
                  </Link>
                  <a
                    href="http://3.109.198.252/editor"
                    target="_blank"
                    className="customized-button"
                  >
                    Customize
                  </a>
                </div>
              </div>
            </div>
            <div className="right-area">
              <div className="dropdown-area">
                <p>Sort By</p>
                <div className="custom-select" id="customSelect">
                  <div className="selected">Select your Product</div>
                  <div
                    className="options"
                    id="sortBySubCategoriesContainer"
                    style={{ display: 'none' }}
                  >
                    <div className="option" data-value="#">
                      Banner Stands
                    </div>
                    <div className="option" data-value="#">
                      Heavy Duty Banners
                    </div>
                    <div className="option" data-value="#">
                      Mesh Banners
                    </div>
                    <div className="option" data-value="#">
                      Vinyl Banner
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-filter-area">
                <div className="filters-inner">
                  <div className="filter-dropdown-area">
                    <h6>Category</h6>
                    <span>
                      <svg
                        className="svg-inline--fa fa-caret-down"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <ul id="filterBySubCategoriesContainer">
                    <li>
                      <Link to={'/'} className="active">
                        Banner Stands
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className="active">
                        Heavy Duty Banners
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className="active">
                        Mesh Banners
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} className="active">
                        Vinyl Banner
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="filters-inner">
                  <div className="filter-dropdown-area">
                    <h6 className="if-inactive">Use</h6>
                    <span>
                      <svg
                        className="svg-inline--fa fa-caret-down"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <ul className="d-none">
                    <li>
                      <Link to={'/'}>Vinyl Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Heavy Duty Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Mesh Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Banner Stand</Link>
                    </li>
                  </ul>
                </div>
                <div className="filters-inner">
                  <div className="filter-dropdown-area">
                    <h6 className="if-inactive">Height</h6>
                    <span>
                      <svg
                        className="svg-inline--fa fa-caret-down"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <ul className="d-none">
                    <li>
                      <Link to={'/'}>Vinyl Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Heavy Duty Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Mesh Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Banner Stand</Link>
                    </li>
                  </ul>
                </div>
                <div className="filters-inner">
                  <div className="filter-dropdown-area">
                    <h6 className="if-inactive">Stand Type</h6>
                    <span>
                      <svg
                        className="svg-inline--fa fa-caret-down"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <ul className="d-none">
                    <li>
                      <Link to={'/'}>Vinyl Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Heavy Duty Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Mesh Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Banner Stand</Link>
                    </li>
                  </ul>
                </div>
                <div className="filters-inner">
                  <div className="filter-dropdown-area">
                    <h6 className="if-inactive">Print Type</h6>
                    <span>
                      <svg
                        className="svg-inline--fa fa-caret-down"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <ul className="d-block">
                    <li>
                      <Link to={'/'}>Vinyl Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'} className="active">
                        Heavy Duty Banners
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'}>Mesh Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Banner Stand</Link>
                    </li>
                  </ul>
                </div>
                <div className="filters-inner">
                  <div className="filter-dropdown-area">
                    <h6 className="if-inactive">Graphic Material</h6>
                    <span>
                      <svg
                        className="svg-inline--fa fa-caret-down"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <ul className="d-block">
                    <li>
                      <Link to={'/'}>Vinyl Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Heavy Duty Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'} className="active">
                        Mesh Banners
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'}>Banner Stand</Link>
                    </li>
                  </ul>
                </div>
                <div className="filters-inner">
                  <div className="filter-dropdown-area">
                    <h6 className="if-inactive">Adjustable Hardware</h6>
                    <span>
                      <svg
                        className="svg-inline--fa fa-caret-down"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <ul className="d-none">
                    <li>
                      <Link to={'/'}>Vinyl Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Heavy Duty Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Mesh Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Banner Stand</Link>
                    </li>
                  </ul>
                </div>
                <div className="filters-inner">
                  <div className="filter-dropdown-area">
                    <h6 className="if-inactive">Product Type</h6>
                    <span>
                      <svg
                        className="svg-inline--fa fa-caret-down"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <ul className="d-none">
                    <li>
                      <Link to={'/'}>Vinyl Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Heavy Duty Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Mesh Banners</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Banner Stand</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-banner-area py-10">
        <div className="container-fluid">
          <h3>High-Quality Custom Banners</h3>
          <p>
            At Sign Assign, our commitment extends beyond just providing a range
            of banner options. We pride ourselves on delivering excellence in
            every aspect of our service, ensuring that each banner we produce
            reflects not just superior quality but also a reflection of your
            brand’s essence. Our custom vinyl banners stand as a testament to
            durability and vibrancy. Crafted with precision and using
            high-quality materials, these banners are weather-resistant and
            perfect for both indoor and outdoor use. Whether it’s a grand
            opening, a promotional event, or advertising your services, our
            vinyl banners withstand the elements while maintaining their visual
            appeal.
          </p>
          <p>
            For more heavy-duty needs, our heavy-duty banners offer enhanced
            durability, making them ideal for prolonged outdoor use in various
            conditions. These banners are engineered to endure harsh weather,
            ensuring longevity without compromising on the vividness of your
            design or message. Looking for a solution that combines visibility
            with permeability? Our mesh banners provide an excellent balance.
            Designed with micro punctures that allow wind and light to pass
            through, these banners are perfect for outdoor settings where wind
            resistance is crucial, such as building wraps or fencing
            advertisements.
          </p>
          <p>
            And don’t forget our stands! Easy to assemble and sturdy in design,
            our banner stands offer a hassle-free way to display your customized
            banners, ensuring maximum visibility and impact at events or within
            your establishment. What sets Sign Assign apart is our dedication to
            customer satisfaction. With our online customization tool, you have
            the freedom to design your banner with ease, selecting from various
            sizes, colors, fonts, and graphics. Once you’ve finalized your
            design, we take care of the rest, delivering your personalized
            banner directly to your doorstep.
          </p>
          <p>
            Our team at Sign Assign is not just about selling banners; we’re
            about empowering your message with quality visuals that leave a
            lasting impression. Trust us to transform your vision into a
            striking reality with our comprehensive range of customizable
            banners and stands.
          </p>
        </div>
      </div>
    </>
  )
}

export default ProductListPage
