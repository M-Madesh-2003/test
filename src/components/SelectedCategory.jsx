import NavBar from './NavBar';
import Footer from './Footer';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { places } from '../data/touristPlace';
import { GoDotFill } from 'react-icons/go';
import { FaLocationArrow } from 'react-icons/fa';

const SelectedCategory = () => {
  const { type } = useParams();
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    const filteredPlaces = places.filter((data) =>
      data.type.includes(type.charAt(0).toUpperCase() + type.slice(1))
    );
    setPlaceList(filteredPlaces);
  }, [type]);

  return (
    <>
      <NavBar />
      <div className="px-10 my-10">
        <p className="text-3xl font-medium">{type.charAt(0).toUpperCase() + type.slice(1)} Category</p>
        <div className='grid grid-cols-4 justify-between items-center gap-x-5 gap-y-10 my-10'>
          {placeList.map((data, ind) => (
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
      <Footer />
    </>
  );
};

export default SelectedCategory;
