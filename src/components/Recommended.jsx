import React from "react";
import { TfiAngleRight } from "react-icons/tfi";

export default function Recommended() {
  return (
    <section className="p-2 mx-20 mt-4 bg-white h-auto rounded-lg max-md:mx-0">
      <div className="flex font-bold justify-between py-3 text-base">
        <p>Recommended for you</p>
        <a href="#" className="text-sm text-orange-500 flex items-center">
          SEE ALL
          <TfiAngleRight className="font-bold" />
        </a>
      </div>
      <div className="grid sm:grid-cols-6 max-sm:grid-cols-3  gap-2 text-left text-sm cursor-pointer">
        <div className="hover:scale-105">
          <img src="/image/rec1.jpg" />
          <p>B008 Elegant Female Crys...</p>
          <p>&#8358;1,280</p>
          <p className="line-through text-xs text-gray-600">&#8358;2,200</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec2.jpg" />
          <p>Riapawel 4 PCS Bohemia...</p>
          <p>&#8358;6,688</p>
          <p className="line-through text-xs text-gray-600">&#8358;3,899</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec3.jpg" />
          <p>Fashion Ladies Opal Cryst...</p>
          <p>&#8358;3,399</p>
          <p className="line-through text-xs text-gray-600">&#8358;4,990</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec4.jpg" />
          <p>B007 Fashion Love Heart...</p>
          <p>&#8358;999</p>
          <p className="line-through text-xs text-gray-600">&#8358;1,500</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec5.jpg" />
          <p>Punk Infinite Infinity Sign...</p>
          <p>&#8358;760</p>
          <p className="line-through text-xs text-gray-600">&#8358;1,520</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec6.jpg" />
          <p>New Fashionable Chain L...</p>
          <p>&#8358;1,999</p>
        </div>
      </div>
    </section>
  );
}
