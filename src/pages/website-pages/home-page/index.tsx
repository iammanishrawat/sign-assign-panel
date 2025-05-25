import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faArrowRightLong,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import { Link } from 'react-router-dom'

interface Slide {
  id: number
  url: string
  alt: string
}

const slides: Slide[] = [
  {
    id: 1,
    url: 'http://3.109.198.252/api/uploads/banner-image-jpg-1747304685302-914103296.jpg',
    alt: 'Slide 1',
  },
  {
    id: 2,
    url: 'http://3.109.198.252/api/uploads/banner-image-jpg-1747304685302-914103296.jpg',
    alt: 'Slide 2',
  },
  {
    id: 3,
    url: 'http://3.109.198.252/api/uploads/banner-image-jpg-1747304685302-914103296.jpg',
    alt: 'Slide 3',
  },
]

interface Product {
  title: string
  href: string
  image: string
  alt: string
}

const curatedProducts: Product[] = [
  {
    title: 'A Frame',
    href: '/subcategory/a-frame',
    image:
      'http://3.109.198.252/api/uploads/-A-Frame-jpeg-1747650868906-179330156.jpeg',
    alt: 'A Frame',
  },
  {
    title: 'Anniversary Banners',
    href: '/subcategory/anniversary-banners',
    image:
      'http://3.109.198.252/api/uploads/Anniversary-Banners-jpg-1747651802040-547141067.jpg',
    alt: 'Anniversary Banners',
  },
  {
    title: 'Banner Stands',
    href: '/subcategory/banner-stands',
    image:
      'http://3.109.198.252/api/uploads/banner-stand-jpg-1747636659597-161598643.jpg',
    alt: 'Banner Stands',
  },
  {
    title: 'Birthday Banners',
    href: '/subcategory/birthday-banners',
    image:
      'http://3.109.198.252/api/uploads/Birthday-Banners-jpg-1747651754143-885648665.jpg',
    alt: 'Birthday Banners',
  },
  {
    title: 'Business Signs',
    href: '/subcategory/business-signs',
    image:
      'http://3.109.198.252/api/uploads/business-signs-jpg-1747655742916-874672705.jpg',
    alt: 'Business Signs',
  },
  {
    title: 'Corporate Banners',
    href: '/subcategory/corporate-banners',
    image:
      'http://3.109.198.252/api/uploads/Corporate-Banners-jpg-1747651894232-858522868.jpg',
    alt: 'Corporate Banners',
  },
  {
    title: 'Display Frames',
    href: '/subcategory/display-frames',
    image:
      'http://3.109.198.252/api/uploads/Display-Frames-jpeg-1747651214883-416151730.jpeg',
    alt: 'Display Frames',
  },
  {
    title: 'Floor Graphics',
    href: '/subcategory/floor-graphics',
    image:
      'http://3.109.198.252/api/uploads/floor-graphics-jpg-1747654456803-747577668.jpg',
    alt: 'Floor Graphics',
  },
  {
    title: 'Frosted Films',
    href: '/subcategory/frosted-films',
    image:
      'http://3.109.198.252/api/uploads/Frosted-Films-jpg-1747654931310-632978865.jpg',
    alt: 'Frosted Films',
  },
  {
    title: 'Graduation Banners',
    href: '/subcategory/graduation-banners',
    image:
      'http://3.109.198.252/api/uploads/Graduation-Banners-jpg-1747651839889-912358179.jpg',
    alt: 'Graduation Banners',
  },
]

const WebHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.url}
              alt={slide.alt}
              className="w-full"
            />
          ))}
        </div>
      </div>

      <div className="container-slide-area">
        <div className="container-fluid">
          <div className="view-all-area">
            <div className="left">
              <h3>Most Loved Brand Visionaries</h3>
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

      <div className="bestseller-area pt-5">
        <div className="container-fluid">
          <div className="view-all-area">
            <h3>Curated Bestsellers to Wow Your Customers</h3>
          </div>
          <div className="products-grid" id="curatedBestSellersContainer">
            {curatedProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <Link to={product.href}>
                  <img src={product.image} alt={product.alt} />
                  <h5>{product.title}</h5>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-slide-area">
        <div className="container-fluid">
          <div className="view-all-area">
            <div className="left">
              <h3>Get Exceptional Sign Services</h3>
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

      <div className="off-slider-area bg-gray-100 py-10">
        <div className="container-fluid">
          <div className="view-all-area">
            <div className="left">
              <h3>Offset slider for the page</h3>
            </div>
            <div className="right">
              <Link to={'/'}>
                View All <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
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
                  <div className="main-div">
                    <img
                      src="http://3.109.198.252/images/slide-image.jpg?t=1748180900"
                      alt="A Frame"
                    />
                    <div className="second-div">
                      <h6>A Frame</h6>
                      <p>$0</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container-slide-area py-10">
        <div className="container-fluid">
          <div className="view-all-area">
            <div className="left">
              <h3>Transform Your Business with the Right Display Solutions</h3>
            </div>
            <div className="right">
              <Link to={'/'}>
                View All <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
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
                <div className="business-card">
                  <img
                    src="http://3.109.198.252/images/slide-image.jpg?t=1748180900"
                    alt="Banner Stands"
                  />
                  <h5>Banner Stands</h5>
                  <h6>-</h6>
                  <a href="/product/vinyl-banners">Details</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container-slide-area py-10 bg-gray-100">
        <div className="container-fluid">
          <div className="view-all-area">
            <div className="left">
              <h3>Elevate Your Brand with Our Latest Collections</h3>
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
                  <a href="/product/a-frame">
                    <div className="p-3 m-0">
                      <img
                        src="http://3.109.198.252/images/logo.png"
                        alt="A Frame"
                      />
                    </div>
                    <div className="px-3 mt-0">
                      <h5>A Frame</h5>
                      <h4>$0</h4>
                    </div>
                  </a>
                  <a
                    href="http://3.109.198.252/editor"
                    target="_blank"
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

      <div className="order-area py-10">
        <div className="container-fluid">
          <div className="inner-area">
            <div className="card-area">
              <img
                src="http://3.109.198.252/images/sign-board.jpg?t=1748185759"
                alt=""
              />
              <h5>High-Quality Traffic &amp; Safety Signs</h5>
              <a href="#">Order Now</a>
            </div>
            <div className="card-area">
              <img
                src="http://3.109.198.252/images/sign-board.jpg?t=1748185759"
                alt=""
              />
              <h5>High-Quality Traffic &amp; Safety Signs</h5>
              <a href="#">Order Now</a>
            </div>
            <div className="card-area">
              <img
                src="http://3.109.198.252/images/sign-board.jpg?t=1748185759"
                alt=""
              />
              <h5>High-Quality Traffic &amp; Safety Signs</h5>
              <a href="#">Order Now</a>
            </div>
            <div className="card-area">
              <img
                src="http://3.109.198.252/images/sign-board.jpg?t=1748185759"
                alt=""
              />
              <h5>High-Quality Traffic &amp; Safety Signs</h5>
              <a href="#">Order Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-area pt-10">
        <div className="container-fluid">
          <h6>Testimonials</h6>
          <h3>Approved By Thousands of Happy Customers</h3>

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
              // spaceBetween={0}
              loop={true}
              slidesPerView={1}
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
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <SwiperSlide key={item}>
                  <div className="testimonial-card">
                    <p>
                      If you are looking for an excellent sign company at an
                      affordable price, I highly recommend Sign Assign. They are
                      creative and extremely knowledgeable about all aspects of
                      sign design, installation, approval requirements and
                      process. They even negotiated on our behalf with the
                      shopping center's property manager for their agreement to
                      a design giving us optimum visibility. In addition, They
                      secured approval from the City of Carrollton in a timely
                      manner resulting in ample time for installation. Sign
                      Assign is a reliable, patient, helpful and affordable
                      resource.
                    </p>
                    <div className="testimonial-details-area">
                      <div className="name-area">
                        <h6>Vetsavers Pet Hospital Carrollton, TX</h6>
                      </div>
                      <div className="rating-area">
                        <FontAwesomeIcon icon={faStar} className="checked" />
                        <FontAwesomeIcon icon={faStar} className="checked" />
                        <FontAwesomeIcon icon={faStar} className="checked" />
                        <FontAwesomeIcon icon={faStar} className="checked" />
                        <FontAwesomeIcon icon={faStar} className="checked" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="blog-area py-10">
        <div className="container-fluid">
          <h6>The Ultimate Signage Guide</h6>
          <h3>Learning Center</h3>

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
              spaceBetween={30}
              loop={true}
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
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <SwiperSlide key={item}>
                  <div className="inner-card">
                    <div className="p-3 m-0">
                      <img
                        src="http://3.109.198.252/images/slide-image.jpg?t=1748195990"
                        alt=""
                      />
                    </div>
                    <div className="px-3 mt-0">
                      <h6>by signassi | Nov 11, 2024 | Signage</h6>
                      <h5>
                        How Festive Thanksgiving Signage Can Enhance Your
                        Business Atmo
                      </h5>
                      <p>
                        Thanksgiving is a cherished holiday in the U.S., full of
                        warmth, gratitude, and togetherness. For businesses,
                        it’s the perfect season to create an...
                      </p>
                      <a href="#">
                        Read More{' '}
                        <span>
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default WebHomePage
