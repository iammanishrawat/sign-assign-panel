import { useState, useEffect } from 'react';
const slides = [
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
];
const WebHomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);
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
        </>
    )
}

export default WebHomePage
