import React from "react";
import SideBar from "./SideBar";
import Slider from "./Slider";
import QuickContact from "./QuickContact";

export default function Header() {
  return (
    <div
      id="#adaptScreen"
      className="grid lg:grid-cols-[1fr_3fr_1fr]  mx-20  max-md:mx-auto md:grid-cols-1 mt-3"
    >
      <SideBar />
      <Slider />
      <QuickContact />
    </div>
  );
}
