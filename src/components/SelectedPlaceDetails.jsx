import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { MdAccessTimeFilled, MdGroups, MdReviews } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoClose, IoPerson } from "react-icons/io5";
import { places } from "../data/touristPlace";

const SelectedPlaceDetails = () => {
  const { placename } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timingDialog, setTimingDialog] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showFullAbout, setShowFullAbout] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () =>{
    console.log("Modal state updated:", isModalOpen); 
    setIsModalOpen(false);
  }
  useEffect(() => {
    const place = places.find((data) => data.name === placename);
    setSelectedPlace(place);
  }, [placename]);

  if (!selectedPlace) {
    return <p>Loading...</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedPlace.sliderImgs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedPlace.sliderImgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <NavBar />
      <div className="px-10">
        <p className="text-3xl font-semibold my-5">
          {selectedPlace.name}{" "}
          <sub className="text-xl">({selectedPlace.category})</sub>
        </p>
        <div className="flex justify-between items-center px-3">
          <div className="flex items-center gap-1 mb-5">
            <span className="text-xl">
              <MdReviews />
            </span>
            <p className="font-medium">{selectedPlace.reviews} reviews</p>
          </div>
          <div>
            <ul className="flex space-x-1">
              {Array.from({ length: 5 }, (_, i) =>
                i < selectedPlace.ratings ? (
                  <li key={i}>
                    <FaStar />
                  </li>
                ) : (
                  <li key={i}>
                    <CiStar />
                  </li>
                )
              )}
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
            src={selectedPlace.sliderImgs[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover object-center rounded-3xl"
          />

          <ul className="absolute flex bottom-5 left-[45%] bg-black bg-opacity-30 backdrop-blur-sm py-1.5 px-3 rounded-full">
            {selectedPlace.sliderImgs.map((_, ind) => (
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
              <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold mb-3">About</p>
              <button onClick={openModal} className="my-3 bg-primary px-4 rounded-full py-1 text-sm font-medium">Virtual Tour</button>
              </div>
              <p className="text-justify">
                {showFullAbout
                  ? selectedPlace.about
                  : `${selectedPlace.about.substring(0, 200)}...`}
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
                  <p className="font-medium">
                    {selectedPlace.age === 0 ? "No limit" : selectedPlace.age}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl">
                    <MdAccessTimeFilled />
                  </span>
                  <p className=" font-medium">Timing</p>
                  <p className="font-medium">{selectedPlace.timing[0]}</p>{" "}
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
            {selectedPlace.ticketPrice ? (
              <ul className="my-5">
                <p className="text-lg font-medium mb-3">Regular Ticket</p>
                <li className="flex items-center space-x-1">
                  <span>
                    <IoPerson />
                  </span>
                  <span className="font-medium">Adult:</span>{" "}
                  <span>₹{selectedPlace.ticketPrice.adult}</span>
                </li>
                <li className="flex items-center space-x-1">
                  <span>
                    <IoPerson />
                  </span>
                  <span className="font-medium">Children:</span>{" "}
                  <span>₹{selectedPlace.ticketPrice.children}</span>
                </li>
                <li className="flex items-center space-x-1">
                  <span>
                    <IoPerson />
                  </span>
                  <span className="font-medium">Senior Citizen:</span>{" "}
                  <span>₹{selectedPlace.ticketPrice.senior}</span>
                </li>
              </ul>
            ) : (
              <p className="text-green-500 my-5">
                Entry is free
              </p>
            )}

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
                <p
                  className="cursor-pointer"
                  onClick={() => setTimingDialog(false)}
                >
                  <IoClose />
                </p>
              </div>

              <div className="mt-5">
                <ul className="space-y-2">
                  {selectedPlace.timing.map((time, index) => (
                    <li key={index}>{time}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="rounded-lg shadow-lg p-4 w-11/12 md:w-2/3 lg:w-1/2">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute -top-10 -right-10 text-2xl text-black p-1 rounded-full bg-gray-200 cursor-pointer"
              >
                <IoClose />
              </button>

              <video
                className="w-full h-auto"
                controls
                autoPlay
                src={selectedPlace.vdosrc}
              ></video>
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
