import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaAngleDown, FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex relative justify-between items-center bg-white mt-8 py-4 px-20 max-md:px-3">
        {/* Logo Section */}
        <div className="flex items-center py-0 mr-11 max-md:mr-2">
          <h2 className="font-bold text-3xl">JUMIA</h2>
          <img
            src="/image/jumiastar.png"
            className="w-6 h-auto ml-2"
            alt="Jumia Star"
          />
        </div>

        {/* Search Bar */}
        <div className="items-center w-full p-2 py-0 ml-11 flex max-md:ml-6 relative">
          <BiSearchAlt2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-auto text-gray-500 pointer-events-none" />
          <input
            type="text"
            className="w-full pl-10 py-3 shadow-slate-400 shadow-md rounded-md max-lg:rounded-r-none h-9 border border-gray-600 outline-0 md:w-full"
            placeholder="Search products and brands"
          />
          <button className="ml-3 max-lg:ml-0 mr-3 p-3 pt-2 h-9 text-xs rounded-md max-lg:rounded-l-none bg-orange-500 font-bold text-white shadow-slate-400 shadow-md hover:scale-110">
            SEARCH
          </button>
        </div>

        {/* Desktop Nav Links */}
        <NavLinks />

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mr-3 text-xl hover:scale-125"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute right-0 z-20 rounded-bl-2xl ml-auto mr-0  flex flex-col bg-white cursor-pointer  w-52 mb-1   shadow-md">
          <div className="flex flex-col">
            <a
              href=""
              className="text-black hover:text-orange-500 flex flex-row align-middle p-2 mx-1"
            >
              <FaRegUser className="text-lg mr-2" />
              <p className="text-base">Account</p>
            </a>
            <a
              href=""
              className="text-black hover:text-orange-500 flex flex-row align-middle p-2 mx-1"
            >
              <IoMdHelpCircleOutline className="text-lg mr-2" />
              <p className="text-base">Help</p>
            </a>
            <a
              href=""
              className="text-black hover:text-orange-500 flex flex-row align-middle p-2 mx-1"
            >
              <MdOutlineShoppingCart className="text-lg mr-2" />
              <p className="text-base">Cart</p>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
