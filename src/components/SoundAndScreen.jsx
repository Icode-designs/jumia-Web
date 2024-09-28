import React from "react";
import { TfiAngleRight } from "react-icons/tfi";

export default function SoundAndScreens() {
  return (
    <section className="mx-20 mt-4 bg-white h-auto rounded-lg  max-md:mx-0">
      <div>
        <div className="flex font-bold px-3 text-center mb-2 text-white rounded-t-lg bg-blue-500 py-3 justify-between text-base">
          <h4>Screen and Sound Sale</h4>
          <a href="#" className="flex items-center text-orange-500">
            <p>SEE ALL</p>
            <TfiAngleRight />
          </a>
        </div>
        <div className="grid  sm:grid-cols-6 mx-2 max-sm:grid-cols-3 scroll-container max-h-96 overflow-x-scroll gap-2 text-left text-sm cursor-pointer">
          <div>
            <img src="/image/ssimg.jpg" alt="" />
          </div>
          <div>
            <img src="/image/ssimg1.jpg" alt="" />
          </div>
          <div>
            <img src="/image/ssimg2.jpg" alt="" />
          </div>
          <div>
            <img src="/image/ssimg3.jpg" alt="" />
          </div>
          <div>
            <img src="/image/ssimg4.jpg" alt="" />
          </div>
          <div>
            <img src="/image/ssimg5.jpg" alt="" />
          </div>
          <div>
            <img src="/image/ssimg6.jpg" alt="" />
          </div>
          <div>
            <img src="/image/ssimg7.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
