import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="m-10">
      <div className="bg-black px-10 py-5 grid grid-cols-3 rounded-3xl gap-10 h-48">
        <div>
          <Link to="/">
            <div className="cursor-pointer flex items-center text-white">
              <p className="text-2xl font-medium tracking-wider">
                GoE<span className="text-primary font-semibold">X</span>plore
              </p>
              <span className="text-lg relative top-1 pl-1">
                <GiWorld />
              </span>
            </div>
          </Link>
          <ul className="text-white flex justify-between text-2xl mt-3">
            <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
              <FaFacebook />
            </li>
            <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
              <FaInstagram />
            </li>
            <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
              <FaXTwitter />
            </li>
            <li className="hover:text-primary transition-colors duration-200 cursor-pointer">
              <IoLogoYoutube />
            </li>
          </ul>
          <p className="text-white mt-8 text-sm">2024 <span className="text-primary">©</span> developed by Sneka R</p>
        </div>
        <div className="justify-self-center flex gap-10">
            <div>
            <p className="font-medium text-white text-lg">Pages</p>
            <ul className="space-y-3 text-white mt-3 font-medium text-sm">
                <li className="cursor-pointer text-primary">
                    Home
                </li>
                <li className="cursor-pointer hover:text-primary duration-300 transition-colors">
                    About
                </li>
            </ul>
            </div>

            <div>
            <p className="font-medium text-white text-lg">Support</p>
            <ul className="space-y-3 text-white mt-3 font-medium text-sm">
            <li className="cursor-pointer hover:text-primary duration-300 transition-colors">
                    FAQ
                </li>
                <li className="cursor-pointer hover:text-primary duration-300 transition-colors">
                    Contact
                </li>
            </ul>
            </div>
        </div>
        <div className="place-self-center w-full">
            <ul className="text-white flex justify-between w-full">
                <li>Terms & conditions</li>
                <li>Privacy policy</li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
