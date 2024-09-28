import React, { useState, useEffect } from "react";
import slide1 from '../images/slide3.png';
import slide2 from '../images/newFont2.png';

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [slide1, slide2]; // Array of images

    // Function to handle moving to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop to first slide after the last one
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop to last slide if on the first
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(interval);
    }, []); 

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-[600px] overflow-hidden rounded-lg xs:h-56 sm:h-[400px] md:h-[600px] xl:h-[740px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out absolute inset-0 ${index === currentIndex ? "block" : "hidden"}`}
                        data-carousel-item
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="absolute block  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-300"}`}
                        aria-current={currentIndex === index}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center  w-10 h-10 rounded-full group-hover:bg-grey-500">
                    <svg
                        className="w-4 h-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full pr-3 group-hover:bg-grey-500">
                    <svg
                        className="w-4 h-4  text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};
