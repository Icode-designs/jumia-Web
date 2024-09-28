import React, { useEffect, useRef } from "react";
import { GiHealthPotion, GiPressureCooker } from "react-icons/gi";
import { IoIosPhonePortrait } from "react-icons/io";
import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoShirtOutline,
} from "react-icons/io5";
import { MdOutlineKitchen } from "react-icons/md";
import { CiApple } from "react-icons/ci";
import { FiMonitor } from "react-icons/fi";
import { PiBabyLight, PiGuitarLight } from "react-icons/pi";
import { CgMoreO } from "react-icons/cg";

export default function SideBar() {
  return (
    <div className="hidden lg:flex w-52 rounded bg-white mr-4 ml-2">
      <div>
        <ul className="flex flex-col justify-between gap-y-1.5 p-2 font-sans  text-xs cursor-pointer">
          <li className="flex hover:text-orange-500">
            <GiPressureCooker className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Appliances</p>
          </li>
          <li className="flex hover:text-orange-500">
            <IoIosPhonePortrait className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Phones & Tablets</p>
          </li>
          <li className="flex hover:text-orange-500">
            <GiHealthPotion className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Health & Beauty</p>
          </li>
          <li className="flex hover:text-orange-500">
            <IoHomeOutline className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Home & Office</p>
          </li>
          <li className="flex hover:text-orange-500">
            <MdOutlineKitchen className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Electronics</p>
          </li>
          <li className="flex hover:text-orange-500">
            <IoShirtOutline className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Fashion</p>
          </li>
          <li className="flex hover:text-orange-500">
            <CiApple className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Supermarket</p>
          </li>
          <li className="flex hover:text-orange-500">
            <FiMonitor className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Computing</p>
          </li>
          <li className="flex hover:text-orange-500">
            <PiBabyLight className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Baby Products</p>
          </li>
          <li className="flex hover:text-orange-500">
            <IoGameControllerOutline className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Gaming</p>
          </li>
          <li className="flex hover:text-orange-500">
            <PiGuitarLight className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Musical Instruments</p>
          </li>
          <li className="flex hover:text-orange-500">
            <CgMoreO className="mb-auto mt-1 p-0 text-base mr-1" />
            <p className="mt-1">Other Categories</p>
          </li>
        </ul>
      </div>
    </div>
    //   </div>
    // </div>
  );
}
