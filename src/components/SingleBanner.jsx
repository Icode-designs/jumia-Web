import React from "react";

export default function SingleBanner() {
  return (
    <section className="grid gap-1 mt-3 bg-white rounded-lgs md:mx-20 max-md:mx-auto">
      <div className="grid grid-cols-2 gap-1 p-2">
        <img className="hover:scale-105" src="/image/ban11.png" />
        <img className="hover:scale-105" src="/image/ban2.gif" />
      </div>
    </section>
  );
}
