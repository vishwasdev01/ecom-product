import React, { useState } from "react";

const HeaderSlider = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  return (
    <header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-between md:p-5 w-full">
      <div className="flex md:flex-1 flex-row gap-2 w-50 items-center justify-start md:justify-center md:ml-[0] ml-[127px]   md:w-full">
        <div className="text-slider">
          <button onClick={prevSlide}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.75 4.50781L12.9414 3.75L6.25 10L12.9414 16.25L13.75 15.4961L7.87109 10L13.75 4.50781Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="slider-content">
            <img src={texts[currentIndex].image} alt="Slide" />
            <p className="text-xs ml-2">{texts[currentIndex].text}</p>
          </div>

          <button onClick={nextSlide}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.25 4.50781L7.05859 3.75L13.75 10L7.05859 16.25L6.25 15.4961L12.1289 10L6.25 4.50781Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSlider;
