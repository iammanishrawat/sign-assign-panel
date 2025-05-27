import { useRef, useState } from 'react'
import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faArrowRightLong,
  faLightbulb,
  faMedal,
  faShareNodes,
  faStar,
  faTruck,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const ProductDetailPage = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  return (
    <>
      <div className="detail-page-area">
        <div className="container-fluid">
          <div className="detail-flex-inner">
            <div className="slider-area">
              <img
                id="productCoverImage"
                src="http://3.109.198.252/api/uploads/vinyl-banner-jpg-1748349865151-782451069.jpg"
                alt=""
              />
              <div className="relative w-full">
                {/* Navigation Buttons */}
                <button
                  ref={prevRef}
                  className="absolute -left-3.5 top-1/2 z-10 -translate-y-1/2"
                >
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button
                  ref={nextRef}
                  className="absolute -right-3.5 top-1/2 z-10 -translate-y-1/2"
                >
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={10}
                  loop={false}
                  navigation={{
                    prevEl: prevRef.current!,
                    nextEl: nextRef.current!,
                  }}
                  onBeforeInit={(swiper) => {
                    // @ts-ignore: nextEl and prevEl will be initialized by Swiper later
                    swiper.params.navigation.prevEl = prevRef.current
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1240: { slidesPerView: 4 },
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <SwiperSlide key={item}>
                      <div className="inner-card">
                        <div className="p-3 m-0">
                          <img
                            src="http://3.109.198.252/api/uploads/vinyl-banner-jpg-1748349865151-782451069.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="product-detail-area">
              <div className="main-desc">
                <h4 id="productName">Vinyl Banners</h4>
                <div id="shortDescription">
                  Durable. Versatile. Custom-Made for Impact.
                </div>
                <div className="sku-details">
                  <div className="review-area">
                    <div className="rating-area">
                      <FontAwesomeIcon icon={faStar} className="checked" />
                      <FontAwesomeIcon icon={faStar} className="checked" />
                      <FontAwesomeIcon icon={faStar} className="checked" />
                      <FontAwesomeIcon icon={faStar} className="checked" />
                      <FontAwesomeIcon icon={faStar} className="checked" />
                    </div>
                    <p>1565 Reviews</p>
                  </div>
                  <div>|</div>
                  <p>SKU: BBRM0B01</p>
                  <div>
                    <span>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </span>
                  </div>
                </div>
                <div className="change-address-area">
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faTruck} className="checked" />
                    </span>{' '}
                    Priority Overnight by 10 Apr, Thursday | 30102, US |{' '}
                    <a href="#">Change</a>
                  </p>
                </div>
              </div>
              <div className="facility-grid mt-2">
                <div className="facility-card">
                  <span>
                    <FontAwesomeIcon icon={faTruckFast} className="checked" />
                  </span>
                  <p>Free Shipping</p>
                </div>
                <div className="facility-card">
                  <span>
                    <FontAwesomeIcon icon={faMedal} className="checked" />
                  </span>
                  <p>Premium Quality</p>
                </div>
                <div className="facility-card">
                  <span>
                    <FontAwesomeIcon icon={faLightbulb} className="checked" />
                  </span>
                  <p>Free Design Proof</p>
                </div>
                {/* <div className="facility-card">
                <span>
                  <i className="fa-solid fa-user-secret"></i>
                  <FontAwesomeIcon icon={faUserSecret} className="checked" />
                </span>
                <p>Hire a Designer</p>
              </div> */}
              </div>
              {/* <div className="accordion mt-2" id="accordionExample">
                <div
                  className="accordion-item mt-2"
                  id="accordionSection1Container"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      id="section1Title"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body" id="">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui, aut debitis laboriosam reiciendis aspernatur a.
                        Rem, accusantium perspiciatis suscipit, sint, beatae
                        quas saepe nemo nesciunt quis necessitatibus odio
                        repellendus inventore.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item mt-2"
                  id="accordionSection2Container"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      id="section2Title"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body" id="section2Description">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui, aut debitis laboriosam reiciendis aspernatur a.
                        Rem, accusantium perspiciatis suscipit, sint, beatae
                        quas saepe nemo nesciunt quis necessitatibus odio
                        repellendus inventore.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item mt-2"
                  id="accordionSection3Container"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      id="section3Title"
                    ></button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      className="accordion-body"
                      id="section3Description"
                    ></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="specification-area py-5">
        <div className="container-fluid">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Description
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                tabIndex={-1}
              >
                Product Specification
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
                tabIndex={-1}
              >
                FAQs
              </button>
              <button
                className="nav-link"
                id="nav-disabled-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-disabled"
                type="button"
                role="tab"
                aria-controls="nav-disabled"
                aria-selected="false"
                tabIndex={-1}
              >
                Customer Reviews
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex={0}
            >
              Our vinyl banners are designed to make your brand or message stand
              out in high-traffic areas. Whether displayed on a storefront,
              fence, stage, or booth, they offer unmatched flexibility and
              durability. Ideal for temporary signage, retail promotions,
              sporting events, trade shows, and celebrations, these banners can
              be mounted, hung, or suspended with ease.
              <br />
              <br />
              The printing process ensures your artwork appears sharp, vivid,
              and consistent across all lighting conditions. Available in both
              glossy and matte finishes, our vinyl banners meet the needs of any
              environment—rain or shine.
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex={0}
            >
              <table>
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Material</td>
                    <td>13 oz or 18 oz Vinyl</td>
                  </tr>
                  <tr>
                    <td>Print Method</td>
                    <td>Full-Color UV Digital Printing</td>
                  </tr>
                  <tr>
                    <td>Finishing Options</td>
                    <td>Grommets, Hemming, Pole Pockets</td>
                  </tr>
                  <tr>
                    <td>Max Banner Width</td>
                    <td>XX feet (custom sizing available)</td>
                  </tr>
                  <tr>
                    <td>Print Sides</td>
                    <td>Single-Sided or Double-Sided</td>
                  </tr>
                  <tr>
                    <td>Indoor/Outdoor</td>
                    <td>Both</td>
                  </tr>
                  <tr>
                    <td>Wind Slits</td>
                    <td>Optional</td>
                  </tr>
                  <tr>
                    <td>Fire Retardant Rating</td>
                    <td>NFPA 701 Certified (upon request)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabIndex={0}
            >
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq-heading-0">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapse-0"
                      aria-expanded="false"
                      aria-controls="faq-collapse-0"
                    >
                      Are vinyl banners suitable for outdoor use?
                    </button>
                  </h2>
                  <div
                    id="faq-collapse-0"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-0"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, our vinyl banners are UV-printed and
                      weather-resistant, making them perfect for outdoor
                      display.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq-heading-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapse-1"
                      aria-expanded="false"
                      aria-controls="faq-collapse-1"
                    >
                      Can I get a custom size not listed?
                    </button>
                  </h2>
                  <div
                    id="faq-collapse-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Absolutely! We specialize in custom dimensions—just
                      request a quote with your specific needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq-heading-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapse-2"
                      aria-expanded="false"
                      aria-controls="faq-collapse-2"
                    >
                      Do you offer double-sided banners?
                    </button>
                  </h2>
                  <div
                    id="faq-collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we offer both single-sided and double-sided printing
                      for maximum visibility.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq-heading-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-collapse-3"
                      aria-expanded="false"
                      aria-controls="faq-collapse-3"
                    >
                      How do I hang my banner?
                    </button>
                  </h2>
                  <div
                    id="faq-collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      We offer grommets, pole pockets, and hemmed edges. Let us
                      know your preferred installation method when placing an
                      order.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-disabled"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex={0}
            >
              <div className="d-flex mb-4">
                <img
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  className="rounded-circle me-3 customer-review-image"
                  alt="John Doe"
                />
                <div>
                  <h6 className="mb-1">
                    Melissa R.,{' '}
                    <small className="text-muted">Event Coordinator</small>
                  </h6>
                  <div
                    className="text-warning mb-2"
                    style={{ fontSize: '1rem' }}
                  >
                    ★★★★★
                  </div>
                  <strong>"Great Quality and Super Fast Turnaround!"</strong>
                  <p className="mb-0 mt-2">
                    We needed a large outdoor banner for a charity fundraiser
                    and SignAssign delivered beyond expectations. The colors
                    were vibrant, the material felt sturdy, and it withstood
                    wind and light rain without any issues. The order process
                    was easy, and it arrived two days ahead of schedule. Will
                    definitely be ordering again!
                  </p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <img
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  className="rounded-circle me-3 customer-review-image"
                  alt="Sarah Lee"
                />
                <div>
                  <h6 className="mb-1">
                    Jason T.,{' '}
                    <small className="text-muted">Small Business Owner</small>
                  </h6>
                  <div
                    className="text-warning mb-2"
                    style={{ fontSize: '1rem' }}
                  >
                    ★★★★★
                  </div>
                  <strong>
                    "Exactly What We Needed for Our Grand Opening"
                  </strong>
                  <p className="mb-0 mt-2">
                    I ordered a vinyl banner to hang outside my new café, and it
                    came out perfect. The print was sharp and eye-catching, and
                    the grommets made installation a breeze. The team was
                    responsive and helped me size the design just right.
                    Couldn’t be happier with the result!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-slide-area py-5">
        <div className="container-fluid">
          <div className="view-all-area">
            <div className="left">
              <h3>Related Products</h3>
            </div>
            <div className="right">
              <div className="slider-nav">
                <button
                  ref={prevRef}
                  type="button"
                  role="presentation"
                  className="slider-prev"
                >
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button
                  ref={nextRef}
                  type="button"
                  role="presentation"
                  className="slider-next"
                >
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop={false}
            // slidesPerView={4}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore: nextEl and prevEl will be initialized by Swiper later
              swiper.params.navigation.prevEl = prevRef.current
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1240: { slidesPerView: 5 },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <SwiperSlide key={item}>
                <div className="inner-card">
                  <Link to={'/product/anniversary-banners'}>
                    <div className="p-3 m-0">
                      <img
                        src="http://3.109.198.252/images/slide-image.jpg?t=1748180900"
                        alt="Anniversary Banners"
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="px-3 mt-0">
                      <h5>Anniversary Banners</h5>
                      <div className="rating-area">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className="checked"
                          />
                        ))}
                      </div>
                      <h6>
                        Starts at: <span className="text-green">-</span>
                      </h6>
                    </div>
                  </Link>
                  <a
                    href="http://3.109.198.252/editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="customized-button"
                  >
                    Customize
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProductDetailPage
