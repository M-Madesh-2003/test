import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { places } from "../data/touristPlace";
import {
  MdAccessTimeFilled,
  MdGroups,
  MdReviews,
} from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoClose, IoPerson } from "react-icons/io5";

const SelectedPlaceDetails = () => {
  const { placename } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timingDialog, setTimingDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [showFullAbout, setShowFullAbout] = useState(false);

  const selectedPlace = places.filter((data) => data.name === placename);

  const sliderImg = selectedPlace.flatMap((data) => data.sliderImgs);

  useEffect(() => {
    if (selectedPlace.length > 0) {
      setTitle(selectedPlace[0].name);
      setCategory(selectedPlace[0].category);
    }
  }, [selectedPlace]);

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

  const aboutText = `Wonderla Holidays Limited, is the No. 1 amusement park operator in India. Promoted by Arun K. Chittilappilly and Kochouseph Chittilappilly, Wonderla currently owns and operates three amusement parks – one each in Kochi, Bangalore and Hyderabad respectively and a resort in Bangalore. Wonderla Kochi, spread over 35 acres of land, is thrilling visitors with 56 rides since 2000. Wonderla Bangalore, spanning over 82 acres, offers a spectacular range of entertainment with 61 rides. Wonderla Hyderabad, the latest edition in the portfolio, is spread over 50 acres and offers 43 attractions. Wonderla Amusement Park has been ranked No. 1 in India and No. 6 in Asia by TripAdvisor for 5 consecutive years. Wonderla Resort, located beside the amusement park in Bangalore, comprises of 84 luxury rooms, with amenities including 4 full-fledged banquet halls, multi cuisine restaurant, rest-o-bar and recreational facilities like a heated swimming pool, kid’s activity centre & a full fledged gym.`;

  return (
    <>
      <NavBar />
      <div className="px-10">
        <p className="text-3xl font-semibold my-5">
          {title} <sub className="text-xl">({category})</sub>
        </p>
        <div className="flex justify-between items-center px-3">
          <div className="flex items-center gap-1 mb-5">
            <span className="text-xl">
              <MdReviews />
            </span>
            <p className="font-medium">886 reviews</p>
          </div>
          <div>
            <ul className="flex space-x-1">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <CiStar />
              </li>
            </ul>
          </div>
        </div>
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
            className="w-full h-full object-cover object-center rounded-3xl"
          />

          <ul className="absolute flex bottom-5 left-[45%] bg-black bg-opacity-30 backdrop-blur-sm py-1.5 px-3 rounded-full">
            {sliderImg.map((data, ind) => (
              <li
                key={ind}
                className={`${
                  ind === currentIndex
                    ? "opacity-100 text-primary"
                    : "opacity-50 text-white"
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

        {/* About Section */}
        <div className="my-5 grid grid-cols-5 gap-5">
          <div className="col-span-3">
            <div className="pb-5 border-b">
              <p className="text-2xl font-semibold mb-3">About</p>
              <p className="text-justify">
                {showFullAbout
                  ? aboutText
                  : `${aboutText.substring(0, 200)}...`}
                {!showFullAbout && (
                  <button
                    className="text-primary font-medium ml-2"
                    onClick={() => setShowFullAbout(true)}
                  >
                    Read More
                  </button>
                )}
                {showFullAbout && (
                  <button
                    className="text-primary font-medium ml-2"
                    onClick={() => setShowFullAbout(false)}
                  >
                    Show Less
                  </button>
                )}
              </p>
            </div>
            <div className="mt-5 flex flex-col space-y-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">
                    <MdGroups />
                  </span>
                  <p className=" font-medium">Ages</p>
                  <p className="font-medium">No limit</p>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl">
                    <MdAccessTimeFilled />
                  </span>
                  <p className=" font-medium">Timing</p>
                  <p className="font-medium">11:00 AM - 6:00 PM</p>{" "}
                  <p
                    className="font-medium text-green-600 hover:decoration-green-600 hover:underline cursor-pointer"
                    onClick={() => setTimingDialog(true)}
                  >
                    Open Now
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-xl w-full border p-5 col-span-2">
            <p className="text-xl font-medium">Ticket Price</p>
            <ul className="my-5">
              <p className="text-lg font-medium mb-3">Regular Ticket</p>
              <li className="flex items-center space-x-1"><span><IoPerson /></span> <span className="font-medium">Adult:</span> <span>₹1516.10</span></li>
              <li className="flex items-center space-x-1"><span><IoPerson /></span> <span className="font-medium">Children:</span> <span>₹1212.72</span></li>
              <li className="flex items-center space-x-1"><span><IoPerson /></span> <span className="font-medium">Senior Citizen:</span> <span>₹1137.08</span></li>
            </ul>

            <button className="bg-primary w-full py-2 rounded-full font-medium shadow-md">
              Book Now
            </button>
          </div>
        </div>

        {timingDialog && (
          <div className="fixed top-0 left-0 z-50 bg-black bg-opacity-80 w-full h-full flex justify-center items-center">
            <div className="bg-white h-fit w-[500px] rounded-2xl px-10 py-8">
              <div className="flex justify-between w-full text-2xl">
                <p className="font-semibold">Open Hours</p>
                <p className="cursor-pointer" onClick={() => setTimingDialog(false)}>
                  <IoClose />
                </p>
              </div>

              <div className="mt-5">
                <ul className="space-y-2">
                  <li>Monday 11:00 AM - 6:00 PM</li>
                  <li>Tuesday 11:00 AM - 6:00 PM</li>
                  <li>Wednesday 11:00 AM - 6:00 PM</li>
                  <li>Thursday 11:00 AM - 6:00 PM</li>
                  <li>Friday 11:00 AM - 6:00 PM</li>
                  <li>Saturday 11:00 AM - 7:00 PM</li>
                  <li>Sunday 11:00 AM - 7:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SelectedPlaceDetails;
