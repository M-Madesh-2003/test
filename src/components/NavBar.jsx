import { navItems } from "../data/navdata.js";
import { Link, useLocation } from "react-router-dom";
import { GiWorld } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
  const path = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white flex justify-between items-center w-full h-20 shadow-md sticky top-0 left-0 px-10 z-20">
      <Link to="/">
        <div className="cursor-pointer flex items-center">
          <p className="text-2xl font-medium tracking-wider">
            GoE<span className="text-primary font-semibold">X</span>plore
          </p>
          <span className="text-lg relative top-1 pl-1">
            <GiWorld />
          </span>
        </div>
      </Link>
      <ul className="flex space-x-5">
        {navItems.map((data, ind) => (
          <div
            key={ind}
            className="relative"
            onMouseEnter={data.title === "Category" ? handleMouseEnter : null}
            onMouseLeave={data.title === "Category" ? handleMouseLeave : null}
          >
            <Link to={data.route}>
              <li
                className={`text-base cursor-pointer ${
                  path.pathname === data.route
                    ? "bg-primary text-black hover:bg-primary"
                    : "bg-transparent"
                } hover:bg-gray-200 px-5 py-1 rounded-full transition-colors duration-300`}
              >
                {data.title}
              </li>
            </Link>

            {data.title === "Category" && isDropdownOpen && (
              <ul className="absolute bg-white shadow-lg rounded-md mt-1 space-y-2 p-2">
                {data.list.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-300"
                  >
                    <Link to={`/category/${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;