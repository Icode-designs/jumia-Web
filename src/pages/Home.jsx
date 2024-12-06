import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Feautured from "../components/Feautured";
import Recommended from "../components/Recommended";
import Banner from "../components/Banner";
import FlashSale from "../components/FlashSale";
import Sponsored from "../components/Sponsored";
import LimitedStock from "../components/LimitedStock";
import PhoneSale from "../components/PhoneSales";
import PhoneDeals from "../components/PhoneDeals";
import SingleBanner from "../components/SingleBanner";
import Screens from "../components/Screens";
import SoundAndScreens from "../components/SoundAndScreen";

export default function Home() {
  return (
    <div className="w-full h-full pt-1 bg-gray-300 relative">
      <Nav />
      <Header />
      <Feautured />
      <Recommended />
      <Banner />
      <FlashSale />
      <Sponsored />
      <Banner />
      <LimitedStock />
      <PhoneSale />
      <PhoneDeals />
      <SingleBanner />
      <Screens />
      <SoundAndScreens />
    </div>
  );
}
