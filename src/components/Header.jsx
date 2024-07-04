import React from "react";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-5">
        <img src="./assets/Logo.svg" alt="logo" />
        <button
          className="bg-gradient-to-r from-orange-400 from-10% via-orange-600 via-30% to-red-500 to-90%
        text-white bo px-2.5 py-1.5 rounded-full"
        >
          Hoster is hiring
        </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li>
          <a href="#"></a>Plans
        </li>
        <li>
          <a href="#"></a>Find Domain
        </li>
        <li>
          <a href="#"></a>Why Hoster
        </li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="font-gray-400 " href="#">
          SignIn
        </a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
          Join Waitlist
        </button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
