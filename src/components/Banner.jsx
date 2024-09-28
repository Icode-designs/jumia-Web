import React from "react";

export default function Banner() {
  return (
    <section className="grid gap-1 mt-3 bg-white rounded-lg grid-rows-2 md:mx-20 max-md:mx-auto">
      <div className="grid grid-cols-2 gap-1 p-2 pb-1">
        <img className="hover:scale-105" src="/image/ban4.gif" />
        <img className="hover:scale-105" src="/image/ban1.jpg" />
      </div>
      <div className="grid grid-cols-2 gap-1 p-2 pt-1">
        <img className="hover:scale-105" src="/image/ban2.gif" />
        <img className="hover:scale-105" src="/image/ban3.jpg" />
      </div>
    </section>
  );
}
