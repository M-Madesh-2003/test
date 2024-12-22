import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { sliderImg } from "../data/herosection";
import { GoDotFill } from "react-icons/go";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImg.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImg.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px]">
      <button
        className="absolute bg-black bg-opacity-20 backdrop-blur-sm p-3 rounded-full font-semibold text-2xl top-[40%] left-10 hover:bg-white text-black hover:text-primary hover:bg-opacity-100 hover:backdrop-blur-none duration-300 transition-colors"
        onClick={handlePrev}
      >
        <IoIosArrowBack />
      </button>

      <img
        src={sliderImg[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover object-center"
      />

      <ul className="absolute flex bottom-5 left-[45%] bg-black bg-opacity-30 backdrop-blur-sm py-1.5 px-3 rounded-full">
        {sliderImg.map((data, ind) => (
          <li
            key={ind}
            className={`${
              ind === currentIndex ? "opacity-100 text-primary" : "opacity-50 text-white"
            } text-xl`}
          >
            <GoDotFill />
          </li>
        ))}
      </ul>

      <button
        className="absolute bg-black bg-opacity-20 backdrop-blur-sm p-3 rounded-full font-semibold text-2xl top-[40%] right-10 hover:bg-white text-black hover:text-primary duration-300 hover:bg-opacity-100 hover:backdrop-blur-none transition-colors"
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default HeroSection;
