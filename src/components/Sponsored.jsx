import React from "react";
import { TfiAngleRight } from "react-icons/tfi";

export default function Sponsored() {
  return (
    <section className="p-2 mx-20 mt-4 bg-white h-auto rounded-lg max-md:mx-0">
      <div className="flex font-bold justify-between py-3 text-base">
        <p>Sponsored products</p>
        <a href="#" className="text-sm text-orange-500 flex items-center">
          SEE ALL
          <TfiAngleRight className="font-bold" />
        </a>
      </div>
      <div className="grid sm:grid-cols-6 max-sm:grid-cols-3  gap-2 text-left text-sm cursor-pointer">
        <div className="hover:scale-105">
          <img src="/image/sp1.jpg" />
          <p>NIVEA Pearl & Beauty An...</p>
          <p>&#8358;7,050</p>
          <p className="line-through text-xs text-gray-600">&#8358;9,400</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/sp2.jpg" />
          <p>A-Grade LiFePO4 12V 10...</p>
          <p>&#8358;291,149</p>
          <p className="line-through text-xs text-gray-600">&#8358;388,199</p>
        </div>
        <div className="hover:scale-105 text">
          <img src="/image/sp3.jpg" />
          <p>2 In 1 Mens Shirt Round...</p>
          <p>&#8358;8,200</p>
          <p className="line-through text-xs text-gray-600">&#8358;9,999</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/sp4.jpg" />
          <p>Women Bags Ladies Bags...</p>
          <p>&#8358;2,890</p>
          <p className="line-through text-xs text-gray-600">&#8358;5,999</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/sp5.jpg" />
          <p>3.2V 280Ah LiFePO4 Lithi...</p>
          <p>&#8358;446,794</p>
          <p className="line-through text-xs text-gray-600">&#8358;595,724</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/rec6.jpg" />
          <p>NIVEA Dry Impact Roll-on...</p>
          <p>&#8358;4,430</p>
          <p className="line-through text-xs text-gray-600">&#8358;5,400</p>
        </div>
      </div>
    </section>
  );
}
