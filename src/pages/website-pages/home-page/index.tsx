import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faArrowRightLong,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import './style.scss'

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
            // loop
            slidesPerView={5}
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
                  <a href="/product/anniversary-banners">
                    <div className="p-3 m-0">
                      <img
                        src="http://3.109.198.252/images/logo.png"
                        alt="Anniversary Banners"
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="px-3 mt-0">
                      <h5>Anniversary Banners</h5>
                      <div className="rating-area flex gap-1 mt-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} />
                        ))}
                      </div>
                      <h6>
                        Starts at: <span className="text-green">-</span>
                      </h6>
                    </div>
                  </a>
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

export default WebHomePage
