import React from "react";

export default function PhoneSale() {
  return (
    <section className="mx-20 mt-4 bg-white h-auto rounded-lg max-md:mx-0">
      <div className="flex font-bold px-3 rounded-t-lg bg-blue-500 mx-auto justify-center py-3 text-base">
        <p className="text-white">Phones Super Sale</p>
      </div>
      <div className="grid sm:grid-cols-6 mx-2 max-sm:grid-cols-3 scroll-container max-h-96 overflow-y-scroll gap-2 text-center text-sm cursor-pointer">
        <div className="hover:scale-105">
          <img src="/image/phd1.png" />
          <p>Cell Phones</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd2.png" />
          <p>iPhones</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd3.png" />
          <p>Smart Phones</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd4.png" />
          <p>Tablet</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd5.png" />
          <p>Phones Under 150k</p>
        </div>
        <div className="hover:scale-105">
          <img src="/image/phd7.png" />
          <p>Mobile Accessories</p>
        </div>
      </div>
    </section>
  );
}
