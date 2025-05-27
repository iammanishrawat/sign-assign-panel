import { useRef } from 'react'
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
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons'
const ProductDetailPage = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  return (
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
            <div className="accordion mt-2" id="accordionExample">
              <div
                className="accordion-item mt-2 d-none"
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
                  ></button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    className="accordion-body"
                    id="section1Description"
                  ></div>
                </div>
              </div>
              <div
                className="accordion-item mt-2 d-none"
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
                  ></button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    className="accordion-body"
                    id="section2Description"
                  ></div>
                </div>
              </div>
              <div
                className="accordion-item mt-2 d-none"
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
            </div>
            <div
              className="main-desc mt-2 p-4 d-none"
              id="selectionVariantsContainer"
            >
              <h5 className="mb-3">Choose a Variant:</h5>
              <div
                className="d-flex overflow-auto flex-nowrap gap-3 pb-2"
                id="selectionVariants"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
