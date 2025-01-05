import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { serviceData } from "../data/Service";

const Service = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleGrowBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <NavBar />
      <div className="px-10 my-10">
        <p className="text-3xl font-medium">Our Services</p>

        <div className="grid grid-cols-2 gap-x-10 my-10 items-start">
          <div>
            <ul className="my-3 text-lg space-y-5">
              <li className="indent-10">
                At GoExplore, we’re passionate about turning your travel dreams
                into reality. Whether you’re planning a relaxing getaway, a
                thrilling adventure, or a cultural immersion, we’ve got you
                covered.
              </li>
              <li className="indent-10">
                Our personalized travel services are designed to cater to your
                unique preferences, making every step of your journey effortless
                and unforgettable. From expertly crafted itineraries to seamless
                bookings, we handle all the details so you can focus on creating
                lifelong memories.
              </li>
              <li className="indent-10">
                Discover the joy of traveling with a trusted partner by your
                side. With GoExplore, your dream destinations are just a click
                away!
              </li>
            </ul>
          </div>
          <div className="relative -top-12">
            {serviceData.map((data, index) => (
              <div
                key={index}
                onClick={() => toggleGrowBox(index)}
                className="bg-gray-100 p-8 rounded-xl mt-8 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-1">
                    <p className="text-xl select-none">
                      <data.logo /> {/* Render the icon here */}
                    </p>
                    <p className="text-xl select-none">{data.title}</p>
                  </div>
                  <button
                    className={`text-2xl cursor-pointer transform duration-500 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    <GoPlus />
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-[500px] opacity-100 mt-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-lg select-none">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
