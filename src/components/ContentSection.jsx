import { useRef, useState } from "react";
import { TbWorldSearch } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { cities, countryList } from "../data/CountryList";
import { FaLocationArrow } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { places } from "../data/touristPlace";

const ContentSection = () => {
  const navigation = useNavigate();
  const [currentCity, setCurrentCity] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  const [enableCitySelection, setEnableCitySelection] = useState(false);
  const [searchPlace, setSearchPlace] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    placeName: "",
    packageType: "",
    budget: "",
    startDate: "",
    endDate: "",
    numberOfPeople: "",
  });

  const handleChangeInform = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigation("/yourpackage", { state: formData });
    setIsOpen(false);
    setFormData({
      placeName: "",
      packageType: "",
      budget: "",
      travelDate: "",
      startDate: "",
      endDate: "",
      numberOfPeople: "",
    });
  };

  const countryRef = useRef(null);

  const findCity = async () => {
    try {
      const res = await fetch("https://ipinfo.io/json?");
      const locationdata = await res.json();
      setCurrentCity(locationdata.city);
      const countryname = countryList.find(
        (data) => data.code === locationdata.country
      );
      setCurrentCountry(countryname.name);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const selectedCountry = e.target.value;
    setCurrentCountry(selectedCountry);
    setEnableCitySelection(!!selectedCountry);
    setCurrentCity("");
  };

  const handleSearchChange = (e) => {
    setSearchPlace(e.target.value);
  };

  const resetSearch = () => setSearchPlace("");

  return (
    <main className="my-10">
      <div className="bg-gray-200 h-20 px-10 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            id="searchplace"
            name="searchplace"
            onChange={(e) => handleSearchChange(e)}
            value={searchPlace}
            placeholder="Enter a location to explore"
            className="rounded-full px-8 py-2 w-60 focus:outline-none placeholder:text-sm focus:border border-gray-400"
          />
          <span className="absolute left-2.5 top-3 text-gray-400">
            <TbWorldSearch />
          </span>
          {searchPlace.trim("") && (
            <span
              onClick={resetSearch}
              className="absolute right-3 top-3.5 text-gray-400 cursor-pointer"
            >
              <IoClose />
            </span>
          )}
        </div>

        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full bg-primary py-1.5 px-4 font-medium hover:bg-white hover:text-primary transition-colors duration-300"
          >
            Select Package
          </button>
        </div>

        <div className="space-x-5">
          <select
            ref={countryRef}
            onChange={handleChange}
            value={currentCountry}
            name="country"
            id="country"
            className="text-sm font-medium px-3 py-2 rounded-full focus:outline-none cursor-pointer"
          >
            <option value="" disabled>
              Select Country
            </option>
            {countryList.map((data, ind) => (
              <option key={ind} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>

          <select
            name="city"
            id="city"
            value={currentCity}
            className={`text-sm font-medium px-3 py-2 rounded-full focus:outline-none ${
              !enableCitySelection
                ? "bg-gray-300 cursor-not-allowed"
                : "cursor-pointer"
            } scroll-width overflow-y-scroll`}
            disabled={!enableCitySelection}
            onChange={(e) => setCurrentCity(e.target.value)}
          >
            <option value="" disabled>
              Select city
            </option>
            {cities.map((data, ind) => (
              <option key={ind} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={findCity}
          className="bg-primary px-4 py-2 rounded-full shadow-sm text-sm font-medium hover:bg-white hover:text-primary transition-colors duration-300"
        >
          Detect Location
        </button>
      </div>

      <div className="m-10">
        <p className="font-medium text-2xl mb-8">Popular Places to Explore</p>
        <div className="grid grid-cols-4 justify-between items-center gap-x-5 gap-y-10">
          {places.map((data, ind) => (
            <div
              key={ind}
              className="w-full h-[360px] bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg"
            >
              <div className="h-[40%] relative">
                <img
                  src={data.mainImg}
                  alt={data.name}
                  className="object-cover object-center rounded-t-lg h-full w-full"
                />
                <div className="absolute top-3 left-3 bg-primary rounded-full text-xs font-medium py-1.5 px-5 shadow-md">
                  {data.category}
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-xl font-medium text-center">{data.name}</p>
                <div className="flex items-center space-x-1 text-sm">
                  <span className="text-xs">
                    <FaLocationArrow />
                  </span>
                  <div className="space-x-1 font-medium flex items-center">
                    <span>{data.location.city}</span>
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span>{data.location.country}</span>
                  </div>
                </div>
                {data.entryType === "cost" ? (
                  <p className="font-medium text-[red] text-sm">
                    Cost:{" "}
                    <span className="text-black font-medium">₹{data.cost}</span>
                  </p>
                ) : (
                  <p className="font-medium text-green-500 text-sm">
                    Free To Visit
                  </p>
                )}
                <p>
                  <Link
                    to={data.link}
                    target="_blank"
                    className="text-sm font-medium"
                  >
                    Visit Website
                  </Link>
                </p>
                <button className="bg-primary w-full py-1.5 rounded-full font-medium shadow-md">
                  <Link to={`/details/${data.name}`}>More Info</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 z-50 bg-black bg-opacity-80 w-full h-full flex justify-center items-center">
          <div className="bg-white h-fit w-[500px] rounded-2xl px-10 py-8">
            <div className="flex justify-between items-center relative">
              <h2 className="text-2xl font-bold mb-4">
                Fill Tour Package Details
              </h2>
              <button
                type="button"
                className="text-xl p-2 rounded-full border border-gray-300 shadow-lg absolute right-0 top-0 bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <IoClose />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="placeName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Place Name:
                </label>
                <input
                  type="text"
                  id="placeName"
                  name="placeName"
                  value={formData.placeName}
                  onChange={handleChangeInform}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="packageType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Package Type:
                </label>
                <select
                  id="packageType"
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleChangeInform}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select a package</option>
                  <option value="Adventurous">Adventurous</option>
                  <option value="Devotional">Devotional</option>
                  <option value="Educational">Educational</option>
                  <option value="Leisure">Leisure</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Budget:
                </label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChangeInform}
                  min={0}
                  max={9999999}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex space-x-1 justify-between mb-4">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date:
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChangeInform}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Date:
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChangeInform}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="numberOfPeople"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of People:
                </label>
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChangeInform}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-primary text-black py-3 hover:bg-white hover:border hover:border-primary hover:text-primary transition-colors rounded-full font-medium text-sm w-full mt-3 shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default ContentSection;