import React from "react";

export default function Screens() {
  return (
    <section className="mx-20 mt-4 bg-white h-auto  rounded-lg max-md:mx-0">
      <div className="flex font-bold px-3 text-center mb-2 rounded-t-lg bg-blue-500 py-3 text-base">
        <h4 className="mx-auto text-white">Screen and Sound Sale</h4>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center m-2 cursor-pointer">
        <div className="hover:scale-105">
          <img src="/image/scimg.png" alt="" />
        </div>
        <div className="hover:scale-105">
          <img src="/image/scimg1.png" alt="" />
        </div>
        <div className="hover:scale-105">
          <img src="/image/scimg2.png" alt="" />
        </div>
      </div>
    </section>
  );
}
