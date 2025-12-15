// 

import React, { useState, useEffect, useRef } from "react";

const SliderSection = () => {
  const images = [
    "/slider-1.jpg",
    "/slider-2.jpg",
    "/slider-3.jpg",
    "/slider-4.jpg",
    "/slider-5.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const timerRef = useRef(null);

  // Fade + change slide
  const changeSlide = (newIndex) => {
    setFade(true);

    setTimeout(() => {
      setIndex(newIndex);
      setFade(false);
    }, 400); // Fade duration
  };

  const nextSlide = () => {
    changeSlide((index + 1) % images.length);
    resetTimer();
  };

  const prevSlide = () => {
    changeSlide((index - 1 + images.length) % images.length);
    resetTimer();
  };

  // Auto slide every 3 seconds
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      changeSlide((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-white text-center">

      {/* HEADING */}
      <h2 className="text-2xl md:text-3xl font-serif mb-4">
        A gorgeous place to <br /> enjoy your life.
      </h2>

      {/* PARAGRAPH */}
      <p className="text-gray-500 text-sm max-w-xl mx-auto mb-12 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Id illo, iusto doloremque quo odio repudiandae sunt esse?
        Tempore facilis laboriosam alias. Sed.
      </p>

      {/* SLIDER WRAPPER */}
      <div className="relative flex items-center justify-center w-full">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-16 text-gray-500 text-3xl z-20"
        >
          ‹
        </button>

        {/* IMAGE WITH FADE ANIMATION */}
        <img
          src={images[index]}
          alt="Slide"
          className={`w-full max-w-4xl 
          h-[420px] md:h-[500px] lg:h-[580px]
          object-cover rounded shadow-lg
          transition-opacity duration-500 ease-out
          ${fade ? "opacity-0" : "opacity-100"}`}
        />

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-16 text-gray-500 text-3xl z-20"
        >
          ›
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => {
              changeSlide(i);
              resetTimer();
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all 
            ${index === i ? "bg-gray-900 scale-110" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
