import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LiaAngleDownSolid } from "react-icons/lia";
export default function NavLinks() {
  return (
    <div className="flex flex-row py-0 mt-auto mb-1 max-lg:hidden ">
      <div className="text-black ">
        <a
          href=""
          className="flex flex-row align-middle p-1 mx-1 hover:text-orange-500 "
        >
          <FaRegUser className=" text-lg mt-1 mr-1" />
          <p className=" text-base mx-2">Account</p>
          <LiaAngleDownSolid className=" text-xs mt-2 m1-3" />
        </a>
      </div>
      <div className="text-black ">
        <a
          href=""
          className="flex flex-row align-middle p-1 mx-1 hover:text-orange-500"
        >
          <IoMdHelpCircleOutline className=" text-lg mt-1 mr-1" />
          <p className=" text-base mx-2">Help</p>
          <LiaAngleDownSolid className=" text-xs mt-2 m1-3" />
        </a>
      </div>
      <div className="text-black ">
        <a
          href=""
          className="flex flex-row align-middle p-1 mx-1 hover:text-orange-500"
        >
          <MdOutlineShoppingCart className=" text-lg mt-1 mr-1" />
          <p className=" text-base mx-2">Cart</p>
          <LiaAngleDownSolid className=" text-xs mt-2 m1-3" />
        </a>
      </div>
    </div>
  );
}
