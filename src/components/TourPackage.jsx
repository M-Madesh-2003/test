import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { places } from "../data/touristPlace";
import { FaLocationArrow } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const TourPackage = () => {
  const location = useLocation();
  const initialFormData = location.state;

  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(formData);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [showRouteMap, setShowRouteMap] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const filteredPackages = places.filter((place) => {
    const totalCost = place.cost * formData.numberOfPeople;
    return (
      place.type.includes(formData.packageType) &&
      place.location.city.toLowerCase() === formData.placeName.toLowerCase() &&
      totalCost <= formData.budget
    );
  });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setFormData(editedData);
    setIsEditing(false);
  };

  const handlePlaceSelection = (place) => {
    const isPlaceSelected = selectedPlaces.some(
      (selected) => selected.name === place.name
    );

    if (isPlaceSelected) {
      // If the place is already selected, remove it
      setSelectedPlaces(
        selectedPlaces.filter((selected) => selected.name !== place.name)
      );
    } else {
      // Otherwise, add the place to the selection
      const updatedPlaces = [...selectedPlaces, place];
      const updatedTotalCost = updatedPlaces.reduce(
        (total, selected) => total + selected.cost * formData.numberOfPeople,
        0
      );

      if (updatedTotalCost > formData.budget) {
        setErrorPopup(true);
        setTimeout(() => setErrorPopup(false), 3000);
      } else {
        setSelectedPlaces(updatedPlaces);
      }
    }
  };

  const handleProceed = () => {
    setShowRouteMap(true);
  };

  const totalSelectedCost = selectedPlaces.reduce(
    (total, place) => total + place.cost * formData.numberOfPeople,
    0
  );

  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-medium mx-10 mt-10 mb-5">Tour Packages</h1>
      <div className="grid grid-cols-7 gap-10 mt-5 mx-10 mb-10">
        {/* User Details Section */}
        <div className="col-span-3">
          <div className="shadow-md border p-5 bg-white h-full rounded-lg">
            <h2 className="text-xl font-medium mb-4">User Details</h2>
            {isEditing ? (
              <form onSubmit={handleEditSubmit} className="space-y-3">
                <div>
                  <label className="font-medium">Place Name:</label>
                  <input
                    type="text"
                    value={editedData.placeName}
                    onChange={(e) =>
                      setEditedData({ ...editedData, placeName: e.target.value })
                    }
                    className="block w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium">Number of People:</label>
                  <input
                    type="number"
                    value={editedData.numberOfPeople}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        numberOfPeople: +e.target.value,
                      })
                    }
                    className="block w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium">Package Type:</label>
                  <input
                    type="text"
                    value={editedData.packageType}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        packageType: e.target.value,
                      })
                    }
                    className="block w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium">Budget:</label>
                  <input
                    type="number"
                    value={editedData.budget}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        budget: +e.target.value,
                      })
                    }
                    className="block w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium">Travel Date:</label>
                  <input
                    type="date"
                    value={editedData.travelDate}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        travelDate: e.target.value,
                      })
                    }
                    className="block w-full p-2 border rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white w-full py-2 rounded-full font-medium"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="space-y-3">
                <p>
                  <span className="font-medium">Place Name:</span>{" "}
                  {formData.placeName}
                </p>
                <p>
                  <span className="font-medium">Number of People:</span>{" "}
                  {formData.numberOfPeople}
                </p>
                <p>
                  <span className="font-medium">Package Type:</span>{" "}
                  {formData.packageType}
                </p>
                <p>
                  <span className="font-medium">Budget:</span> ₹{formData.budget}
                </p>
                <p>
                  <span className="font-medium">Travel Date:</span>{" "}
                  {formData.travelDate}
                </p>
                <button
                  className="bg-primary text-white w-full py-2 rounded-full font-medium"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Details
                </button>
              </div>
            )}

            {selectedPlaces.length > 0 && (
              <div className="mt-5">
                <h3 className="text-lg font-medium mb-3">Selected Places:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {selectedPlaces.map((place, index) => (
                    <li key={index}>{place.name}</li>
                  ))}
                </ul>
                <p className="mt-3 font-medium">Total Cost: ₹{totalSelectedCost}</p>
                <button
                  className="bg-primary text-white w-full py-2 rounded-full font-medium mt-5"
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tour Packages Section */}
        <div className="col-span-4 h-full w-full">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((data, ind) => (
              <div
                key={ind}
                className="w-full h-fit bg-white shadow-md transition-shadow duration-300 border border-gray-200 rounded-lg grid grid-cols-5 mb-5"
              >
                <div className="relative col-span-2">
                  <img
                    src={data.mainImg}
                    alt={data.name}
                    className="object-cover object-center rounded-l-lg h-full w-full"
                  />
                  <div className="absolute top-3 left-3 bg-primary rounded-full text-xs font-medium py-1.5 px-5 shadow-md">
                    {data.category}
                  </div>
                </div>
                <div className="p-5 col-span-3 flex flex-col justify-between">
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
                      <span className="text-black font-medium">
                        {data.cost}
                      </span>
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
                  <div className="flex space-x-2 mt-3">
                    <button
                      className={`w-full py-1.5 rounded-full font-medium shadow-md ${
                        selectedPlaces.some(
                          (selected) => selected.name === data.name
                        )
                          ? "bg-red-500 text-white"
                          : "bg-primary text-white"
                      }`}
                      onClick={() => handlePlaceSelection(data)}
                    >
                      {selectedPlaces.some(
                        (selected) => selected.name === data.name
                      )
                        ? "Deselect"
                        : "Select Place"}
                    </button>
                    <button className="bg-primary w-full py-1.5 rounded-full font-medium shadow-md">
                      <Link to={`/details/${data.name}`}>More Info</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center h-full">
              <p>No packages match your criteria!</p>
            </div>
          )}
        </div>
      </div>

      {/* Error Popup */}
      {errorPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center">
            <p className="text-red-500 font-medium mb-4">Budget exceeded!</p>
            <p className="text-sm">You cannot add this place to your selection.</p>
            <button
              onClick={() => setErrorPopup(false)}
              className="mt-4 bg-primary text-white py-2 px-4 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Route Map Section */}
      {showRouteMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-medium mb-4">Route Map</h2>
            <p className="mb-4">Displaying route for selected places:</p>
            <ul className="list-disc list-inside mb-4">
              {selectedPlaces.map((place, index) => (
                <li key={index}>{place.name}</li>
              ))}
            </ul>
            <p className="font-medium">Total Budget: ₹{totalSelectedCost}</p>
            <button
              className="bg-primary text-white w-full py-2 rounded-full font-medium mt-5"
              onClick={() => setShowRouteMap(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TourPackage;