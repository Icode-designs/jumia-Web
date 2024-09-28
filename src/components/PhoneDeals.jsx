import React from "react";
import { TfiAngleRight } from "react-icons/tfi";

export default function PhoneDeals() {
  return (
    <section className="mx-20 mt-4 bg-white h-auto rounded-lg max-md:mx-0">
      <div className="flex font-bold px-3 rounded-t-lg bg-blue-500 mx-auto justify-between py-3 text-base">
        <p className="text-white">Phones Super Sale Deals</p>
        <a href="#" className="text-sm text-orange-500 flex items-center">
          SEE ALL
          <TfiAngleRight className="font-bold" />
        </a>
      </div>
      <div className="grid sm:grid-cols-6 mx-2 max-sm:grid-cols-3 scroll-container max-h-96 overflow-y-scroll gap-2 text-center text-sm cursor-pointer">
        <div className="hover:scale-105">
          <img src="/image/phd8.jpg" />
          <p>Tripods Stand Cell Phone...</p>
          <p>&#8358;14,599</p>
          <p className="line-through text-xs text-gray-600">&#8358;28,499</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd9.jpg" />
          <p>XIAOMI Redmi 13 6.79" 8...</p>
          <p>&#8358;231,600</p>
          <p className="line-through text-xs text-gray-600">&#8358;615,907</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd10.jpg" />
          <p>Oraimo FreePods 4 Active...</p>
          <p>&#8358;49,775</p>
          <p className="line-through text-xs text-gray-600">&#8358;106,163</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd11.jpg" />
          <p>itel 5W Charger With Fre...</p>
          <p>&#8358;2,490</p>
          <p className="line-through text-xs text-gray-600">&#8358;5,000</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd13.jpg" />
          <p>XIAOMI Redmi 12 6.79" 4...</p>
          <p>&#8358;220,500</p>
          <p className="line-through text-xs text-gray-600">&#8358;279,000</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd12.jpg" />
          <p>Realmi 11pro+ 6.72" 12...</p>
          <p>&#8358;514,050</p>
          <p className="line-through text-xs text-gray-600">&#8358;865,000</p>
        </div>
      </div>
    </section>
  );
}
